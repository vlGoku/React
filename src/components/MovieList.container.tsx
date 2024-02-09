import { useState, useEffect, useContext } from "react";
import { IMovie } from "../ts/interfaces/global_interface";
import MovieList from "./MovieList";
import MovieContext from "./MovieContext";

export default function MovieListContainer() {
  const [movies, setMovies] = useContext(MovieContext);
  const [err, setErr] = useState<Error | null>(null);

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    const connect = async () => {
      try {
        const data = await fetch("/movies", options);
        if (!data.ok) {
          throw new Error("Sorry, we couldn't connect to our server!");
        }
        setMovies((await data.json()) as IMovie[]);
      } catch (error) {
        setErr(error as Error);
      }
    };
    connect();
  }, []);

  return <MovieList movies={movies!} err={err} />;
}
