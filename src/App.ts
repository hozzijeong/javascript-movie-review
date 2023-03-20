import { Store } from './Store';

import Header from './components/Header';
import ListTitle from './components/ListTitle';
import ItemList from './components/ItemList';
import MoreButton from './components/MoreButton';
import WholeScreenMessageAlert from './components/WholeScreenMessageAlert';
import Movie, { initialMovieStats } from './domain/Movie';
import { Skeleton } from './components/Skeleton';

class App {
  $main = document.createElement('main');
  $itemView = document.createElement('section');

  listTitle: ListTitle;
  itemList: ItemList;
  moreButton: MoreButton;
  skeleton: Skeleton;

  constructor($target: HTMLElement) {
    this.setStoreMovieState();

    new Header($target);

    this.$itemView.className = 'item-view';

    this.listTitle = new ListTitle();
    this.itemList = new ItemList();
    this.moreButton = new MoreButton();
    this.skeleton = new Skeleton(this.itemList.$ul);

    this.$main.insertAdjacentElement('beforeend', this.$itemView);
    $target.insertAdjacentElement('beforeend', this.$main);

    Store.get('movieStates')?.renderPopularMovies();
  }

  setStoreMovieState() {
    const movieStateProxy = new Proxy<any>(initialMovieStats, {
      get: (target, props) => {
        return target[props];
      },
      set: (target, props, value) => {
        target[props] = value;

        switch (props) {
          case 'nextPage': {
            value === -1 ? this.moreButton.hide() : this.moreButton.show();
            if (value === 1) {
              this.skeleton.attachSkeleton();
              this.itemList.removeCurentCategory();
            }
            break;
          }

          case 'category': {
            if (!this.listTitle) break;
            if (value === 'popular') target['query'] = '';

            this.listTitle.render(this.$itemView);
            break;
          }

          case 'results': {
            if (!this.itemList || !this.moreButton) break;

            this.skeleton.removeSkeleton();
            this.itemList.render(this.$itemView);
            this.moreButton.render(this.$itemView);
            break;
          }

          case 'error': {
            if (!value.length) break;

            this.$itemView.innerHTML = '';
            this.$itemView.insertAdjacentElement('beforeend', WholeScreenMessageAlert(value));
            break;
          }
          default:
        }

        return true;
      },
    });

    Store.set('movieStates', new Movie(movieStateProxy));
  }
}

export default App;
