import { useState } from "react";
import CartDetails from "../../Components/CartDetails";
import MovieCard from "../../Components/MovieCard";
import MovieInfoMadal from "../../Components/MovieInfoMadal";
import movieList from "../../data/index.js";

const MoveList = ({ showCartInfo, onCartclose }) => {
  const movies = movieList();

  console.log(movies);
  const [showModal, setShowModal] = useState(false);

  const handleClickClose = () => {
    setShowModal(false);
  };

  const handleClickMovieCard = () => {
    setShowModal(true);
  };
  return (
    <div className="content">
      {showCartInfo && <CartDetails onCartclose={onCartclose} />}
      {showModal && <MovieInfoMadal onClose={handleClickClose} />}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCard movie={movie} onMovieInfo={handleClickMovieCard} />
        ))}
      </div>
    </div>
  );
};

export default MoveList;
