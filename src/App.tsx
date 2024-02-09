import MovieList from "./components/MovieList.container";
import MoviesProvider from "./components/MoviesProvider";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Movie List</h1>
      <MoviesProvider>
        <MovieList />
      </MoviesProvider>
    </>
  );
}

export default App;
