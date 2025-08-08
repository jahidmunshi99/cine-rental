import { useContext, useState } from "react";
import { MovieContext } from "../context/index.js";
import { getAllMovies } from "../data/index.js";
import MoveCard from "./MovieCard";
import MovieCardModal from "./MovieCardModal/index.jsx";

const MovieList = () => {
  const { cartData, setCartData } = useContext(MovieContext);
  const [showModal, setShowModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const movies = getAllMovies();

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();

    const checkDuplication = cartData.find((item) => item.id == movie.id);
    if (!checkDuplication) {
      setCartData([...cartData, movie]);
    } else {
      alert(`The Move ${movie.title} is already Added to Cart`);
      console.error(`The Move ${movie.title} is already Added to Cart`);
    }
  };

  const handleModalAddToCart = (movie) => {
    const checkDuplication = cartData.find((item) => item.id == movie.id);
    if (!checkDuplication) {
      setCartData([...cartData, movie]);
    } else {
      alert(`The Move ${movie.title} is already Added to Cart`);
      console.error(`The Move ${movie.title} is already Added to Cart`);
    }

    setShowModal(false);
  };

  const handleMovieCardDetails = (currentMovieInfo) => {
    setMovieDetails(currentMovieInfo);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <MovieCardModal
          onModalClose={handleModalClose}
          movie={movieDetails}
          onAddToCard={handleModalAddToCart}
        />
      )}
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MoveCard
              key={movie.id}
              movie={movie}
              onMovieDetails={handleMovieCardDetails}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
