import MovieList from "./components/MovieList";
import MoviesProvider from "./components/MoviesProvider";
import "./App.css";
import FormEdit from "./components/FormEdit";

function App() {
  return (
    <FormEdit
      onSave={(movie) => console.log(movie)}
      editMovie={{
        id: 9,
        title: "Best film ever",
        director: "Best director ever",
        runtime: 300,
        rating: 5,
      }}
    />
  );
}

export default App;
