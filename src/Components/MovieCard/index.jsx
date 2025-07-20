import Star from "../../assets/star.svg";
import { getImgUrl } from "../../util";
import Ratting from "../Rattings";
const MovieCard = ({ onMovieInfo, movie }) => {
  const rattings = Array(movie).fill(Star);
  console.log(rattings);
  return (
    <a
      href="#"
      onClick={() => {
        onMovieInfo();
      }}
    >
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img
          className="w-full object-cover"
          src={getImgUrl(movie.cover)}
          alt={Image.title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
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
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </a>
  );
};

export default MovieCard;
