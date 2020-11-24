import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import MovieList from "./MovieList";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `https://www.omdbapi.com/?s=star%20wars&apikey=6b37a65b`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
