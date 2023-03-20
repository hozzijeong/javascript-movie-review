import { Store } from '../Store';
import { eventThrottle } from '../utils/throttle';

class MoreButton {
  $button = document.createElement('button');

  constructor() {
    this.$button.className = 'btn primary full-width more-button hidden';

    this.$button.addEventListener('click', this.onClickMoreButton);
  }

  render($target: HTMLElement) {
    this.$button.innerText = '더 보기';
    $target.insertAdjacentElement('beforeend', this.$button);
  }

  onClickMoreButton() {
    if (!Store.get('movieStates')) return;

    const states = Store.get('movieStates')?.getMovieStates();

    if (!states) return;
    const { nextPage, category, query } = states;

    if (category === 'popular') {
      Store.get('movieStates')?.renderPopularMovies(nextPage);

      return;
    }

    Store.get('movieStates')?.renderSearchedMovies(query, nextPage);
  }

  hide() {
    this.$button.classList.add('hidden');
  }

  show() {
    this.$button.classList.remove('hidden');
  }
}

export default MoreButton;
