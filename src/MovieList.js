import React from "react";

const MovieList = props => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies !== undefined && props.movies.length ? (
        props.movies.map((movie, index) => (
          <div className="image-container d-flex justify-content-start m-3">
            <img src={movie.Poster} alt="movie" />
            <div
              onClick={() => props.handleFavouritesClick(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent />
            </div>
          </div>
        ))
      ) : (
        <div className="col">
          <h3 className="text-muted">Nothing found.</h3>
        </div>
      )}
    </>
  );
};

export default MovieList;
