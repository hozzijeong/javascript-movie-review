import logo from '../../templates/logo.png';
import { Store } from '../Store';

class Header {
  $header = document.createElement('header');

  constructor($target) {
    this.init($target);

    this.$header.addEventListener('click', this.onClickEvent);
    this.$header.querySelector('.search-box').addEventListener('submit', this.onSubmitEvent);
  }

  init($target) {
    $target.insertAdjacentElement('beforeend', this.$header);
    this.render(this.$header);
  }

  render($target) {
    $target.innerHTML = this.template();
  }

  async onSubmitEvent(e) {
    e.preventDefault();
    const { currentTarget } = e;
    const { value } = currentTarget.querySelector('input');

    if (value.length === 0) {
      alert('1글자 이상 입력해 주셔야 합니다.');
      return;
    }

    Store.movieStates.renderSearchedMovies(value);
  }

  onClickEvent(e) {
    const { target } = e;
    if (target.dataset.type !== 'logo') return;

    Store.movieStates.renderPopularMovies();
    document.querySelector('.search-box').reset();
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
