import MovieListItem from "./MovieListItem";
import { IMovie } from "../ts/interfaces/global_interface";
import useMovies from "./useMovies";
import style from "./css/MovieList.module.css";

export default function MovieList() {
  const [movies, err] = useMovies();
  {
    if (err !== null) {
      return <div>{(err as Error).message}</div>;
    } else {
      return (
        <div className={style.moviesContainer}>
          {" "}
          {(movies as IMovie[]).map((movie: IMovie): JSX.Element => {
            return <MovieListItem key={movie.id} movie={movie} />;
          })}
        </div>
      );
    }
  }
}
