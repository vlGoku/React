import MovieList from "./components/MovieList";
import MoviesProvider from "./components/MoviesProvider";
import "./App.css";
import FormEdit from "./components/FormEdit";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        sx={{ textAlign: "center", mt: 3, mb: 3 }}
      >
        Movie List
      </Typography>
      <MoviesProvider>
        <MovieList />
      </MoviesProvider>
    </>
  );
}

export default App;
