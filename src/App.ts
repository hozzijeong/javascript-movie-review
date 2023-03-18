import { Store } from './Store';

import Header from './components/Header';
import ListTitle from './components/ListTitle';
import ItemList from './components/ItemList';
import MoreButton from './components/MoreButton';
import WholeScreenMessageAlert from './components/WholeScreenMessageAlert';
import { initialMovieStats, MovieRender } from './domain/MovieRender';

class App {
  $main = document.createElement('main');
  $itemView = document.createElement('section');

  listTitle;
  itemList;
  moreButton;

  constructor($target: HTMLElement) {
    this.init();

    new Header($target);

    this.$itemView.className = 'item-view';

    this.listTitle = new ListTitle(this.$itemView);
    this.itemList = new ItemList(this.$itemView);
    this.moreButton = new MoreButton(this.$itemView);

    this.$main.insertAdjacentElement('beforeend', this.$itemView);
    $target.insertAdjacentElement('beforeend', this.$main);
  }

  init() {
    const movieStateProxy = new Proxy<any>(initialMovieStats, {
      get: (target, props) => {
        return target[props];
      },
      set: (target, props, value) => {
        target[props] = value;

        switch (props) {
          case 'nextPage':
            value === -1 ? this.moreButton.hide() : this.moreButton.show();
            break;

          case 'category':
            if (!this.listTitle) break;

            if (value === 'popular') target['query'] = '';

            this.listTitle.render(this.$itemView);
            break;

          case 'results':
            if (!this.itemList || !this.moreButton) break;

            this.itemList?.render(this.$itemView);
            this.moreButton?.render(this.$itemView);
            break;

          case 'error':
            const { isError, message } = value;

            if (isError === false) break;

            this.$itemView.innerHTML = WholeScreenMessageAlert(message);
            break;
          default:
        }

        return true;
      },
    });

    Store.movieStates = new MovieRender(movieStateProxy);
    Store.movieStates?.renderPopularMovies();
  }
}

export default App;