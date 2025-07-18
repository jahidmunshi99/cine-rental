import { useState } from "react";
import CartDetails from "../../Components/CartDetails";
import MovieCard from "../../Components/MovieCard";
import MovieInfoMadal from "../../Components/MovieInfoMadal";

const MoveList = ({ showCartInfo, onCartclose }) => {
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
        {/*-- Begin Card --*/}
        <MovieCard onMovieInfo={handleClickMovieCard} />
        <MovieCard onMovieInfo={handleClickMovieCard} />
        <MovieCard onMovieInfo={handleClickMovieCard} />
        <MovieCard onMovieInfo={handleClickMovieCard} />
        <MovieCard onMovieInfo={handleClickMovieCard} />
        <MovieCard onMovieInfo={handleClickMovieCard} />
        {/*-- End Card --*/}
      </div>
    </div>
  );
};

export default MoveList;
