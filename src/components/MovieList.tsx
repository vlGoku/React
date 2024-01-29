import "../MovieList.css";

const movies = [
  {
    id: 1,
    title: "Killers of the Flower Moon",
    director: "Martin Scorcese",
    runtime: 3.26,
    rating: 5,
  },
  {
    id: 2,
    title: "Asteroid City",
    director: "Wes Anderson",
    runtime: 1.45,
    rating: 4,
  },
  {
    id: 3,
    title: "The Whale",
    director: "Darren Aronofsky",
    runtime: 1.57,
    rating: 5,
  },
];

export default function MovieList() {
  return (
    <div className="container">
      {movies.map((movie) => {
        return (
          <div className="movie-card" key={movie.id}>
            <h2>Title: {movie.title}</h2>
            <h5>Director: {movie.director}</h5>
            <span>Runtime: {movie.runtime} h</span>
            <div>{movie.rating && "*".repeat(movie.rating)}</div>
          </div>
        );
      })}
    </div>
  );
}
