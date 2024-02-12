import { useState, useEffect, useContext } from "react";
import MovieContext from "./MovieContext";
import { MovieInput } from "../ts/interfaces/global_interface";
import { IMovie } from "../ts/interfaces/global_interface";

interface Props {
  onSave: (movie: MovieInput) => void;
  editMovie?: IMovie;
}

export default function useFormEdit({ onSave, editMovie }: Props) {
  const [movie, setMovie] = useState<MovieInput>({
    title: "",
    director: "",
    runtime: 0,
  });
  useEffect(() => {
    if (editMovie) {
      setMovie(editMovie);
    }
  }, [editMovie]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMovie((prevMovie) => {
      return { ...prevMovie, [name]: value };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(movie);
  };
  return [{ movie }, { handleChange }, { handleSubmit }];
}
