import { useState } from "react";
import MovieCard from "../../Cine/MovieCard";
import movieList from "../../data/index.js";
import MovieInfoMadal from "../MovieInfoMadal/index.jsx";

const MoveList = () => {
  const movies = movieList();

  const [showModal, setShowModal] = useState(false);

  const handleClickClose = () => {
    setShowModal(false);
  };

  const handleClickMovieCard = () => {
    setShowModal(true);
  };
  return (
    <div className="content">
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
