import Rating from "./Rating";

type Movie = {
  id: number;
  title: string;
  director: string;
  runtime: number;
  rating: number;
};
interface Props {
  movie: Movie;
  onRating(id: number, rating: number): void;
}

export default function MovieListItem({ movie, onRating }: Props) {
  return (
    <div className="movie-card">
      <h2>Title: {movie.title}</h2>
      <h5>Director: {movie.director}</h5>
      <span>Runtime: {movie.runtime}</span>
      <div>
        <Rating item={movie} onRating={onRating} />
      </div>
    </div>
  );
}
