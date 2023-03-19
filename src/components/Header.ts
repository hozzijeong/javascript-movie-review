import logo from '../images/logo.png';
import { Store } from '../Store';

class Header {
  $header = document.createElement('header');
  $searchBox: HTMLFormElement | null;

  constructor($target: HTMLElement) {
    this.init($target);

    this.$header.addEventListener('click', this.onClickEvent);
    this.$searchBox = this.$header.querySelector('.search-box');

    if (!(this.$searchBox instanceof HTMLFormElement)) return;
    this.$searchBox.addEventListener('submit', this.onSubmitEvent);
  }

  init($target: HTMLElement) {
    $target.insertAdjacentElement('beforeend', this.$header);
    this.render(this.$header);
  }

  render($target: HTMLElement) {
    $target.innerHTML = this.template();
  }

  async onSubmitEvent(e: SubmitEvent) {
    e.preventDefault();
    if (!(e.currentTarget instanceof HTMLElement)) return;
    const { currentTarget } = e;
    const { value } = currentTarget.querySelector('input') as HTMLInputElement;

    if (value.length === 0) {
      alert('1글자 이상 입력해 주셔야 합니다.');
      return;
    }

    Store.movieStates?.renderSearchedMovies(value);
  }

  onClickEvent(e: Event) {
    if (!(e.target instanceof HTMLElement)) return;

    const { target } = e;
    if (target.dataset.type !== 'logo') return;

    Store.movieStates?.renderPopularMovies();

    if (this.$searchBox instanceof HTMLFormElement) {
      this.$searchBox.reset();
    }
  }

  template() {
    return `<h1><img src="${logo}" alt="MovieList 로고" data-type="logo" /></h1>
      <form class="search-box">
        <input type="text" placeholder="검색" class="search-input" />
        <button data-type="search" class="search-button">검색</button>
      </form>`;
  }
}

export default Header;