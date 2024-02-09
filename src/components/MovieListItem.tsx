import Rating from "./Rating";
import { IMovie } from "../ts/interfaces/global_interface";

interface Props {
  movie: IMovie;
}

export default function MovieListItem({ movie }: Props) {
  return (
    <div className="movie-card">
      <h2>Title: {movie.title}</h2>
      <h5>Director: {movie.director}</h5>
      <span>Runtime: {movie.runtime}</span>
      <div>
        <Rating item={movie} />
      </div>
    </div>
  );
}
