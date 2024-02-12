import { IMovie, MovieInput } from "../ts/interfaces/global_interface";
import { useState, useEffect } from "react";
import useFormEdit from "./useFormEdit";

export default function FormEdit(): JSX.Element {
  const { movie, handleChange, handleSubmit } = useFormEdit(
    onSave,
    editMovie as IMovie
  );

  return (
    <form className="input-movie-form" onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input
          name="title"
          id="title"
          type="text"
          placeholder="Movie title"
          value={movie.title}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="director">
        Director:
        <input
          name="director"
          id="director"
          type="text"
          placeholder="Movie director"
          value={movie.director}
          onChange={handleChange}
        />
      </label>
      <label>
        Runtime:
        <input
          name="runtime"
          id="runtime"
          type="number"
          placeholder="Movie runtime"
          value={movie.runtime}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}
