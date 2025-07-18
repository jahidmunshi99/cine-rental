import MovieImage from "../../assets/movie-1.png";
import AddToCart from "../AddToCart";
import Ratting from "../Rattings";
const MovieCard = ({ onMovieInfo }) => {
  return (
    <a
      href="#"
      onClick={() => {
        onMovieInfo();
      }}
    >
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img className="w-full object-cover" src={MovieImage} alt="" />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">Iron Man</h3>
          <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
          <div className="flex items-center space-x-1 mb-5">
            {
              <>
                <Ratting />
                <Ratting />
                <Ratting />
                <Ratting />
                <Ratting />
              </>
            }
          </div>
          <AddToCart />
        </figcaption>
      </figure>
    </a>
  );
};

export default MovieCard;
