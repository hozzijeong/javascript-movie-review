import starFilled from '../images/star_filled.png';
import starEmpty from '../images/star_empty.png';
import { IMovieItemProps } from '../types/movie';

const skeletonTemplate = () => `
  <div class="item-thumbnail skeleton"></div>
  <div class="item-title skeleton"></div>
  <div class="item-score skeleton"></div>
`;

const commonTemplate = ({ title, voteAverage, posterPath }: IMovieItemProps) => `
  <img
    class="item-thumbnail"
    src="https://image.tmdb.org/t/p/w500/${posterPath}"
    loading="lazy"
    alt="${title}"
    />
  <p class="item-title">${title}</p>
  <p class="item-score"><img src="${
    voteAverage > 5 ? starFilled : starEmpty
  }" alt="별점" /> ${voteAverage?.toFixed(1)}</p>
`;

function movieItem(movie: IMovieItemProps | { title: null }) {
  const item = `
  <li>
    <a href="#">
      <div class="item-card">
      ${movie.title === null ? skeletonTemplate() : commonTemplate(movie)}
      </div>
    </a>
  </li>`;

  return item;
}

export default movieItem;