import { useState } from "react";
import { MovieContext } from "../context";

const MovieProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  return (
    <MovieContext.Provider value={{ cartData, setCartData }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider };
