import Rating from "./Rating";
import { IMovie } from "../ts/interfaces/global_interface";
import style from "./css/MovieListItem.module.css";

interface Props {
  movie: IMovie;
}

export default function MovieListItem({ movie }: Props) {
  const classNames = [style.movieCard];
  if (movie.rating === 5) classNames.push(style.fiveStar);
  return (
    <div className={classNames.join(" ")}>
      <h2 className={style.heading}>Title: {movie.title}</h2>
      <h5 className={style.heading}>Director: {movie.director}</h5>
      <span>Runtime: {movie.runtime}</span>
      <div>
        <Rating item={movie} />
      </div>
    </div>
  );
}
