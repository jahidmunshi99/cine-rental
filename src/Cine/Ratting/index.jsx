import { Star } from "../../utils/logo-utitily.js";

const Rating = ({ value }) => {
  const Stars = Array(value).fill(Star);

  return (
    <>
      {Stars.map((item, index) => (
        <img key={index} src={item} width="14" height="14" alt="star" />
      ))}
    </>
  );
};

export default Rating;
