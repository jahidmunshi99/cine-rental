import { useContext, useState } from "react";
import Cart from "../../Cine/Cart";
import { MoodContext, MovieContext } from "../../context/index.js";
import {
  BrandLogo,
  Moon,
  Ring,
  ShoppingCart,
  Sun,
} from "../../utils/logo-utitily";

const Header = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMood, setDarkMood } = useContext(MoodContext);

  const handleCartModal = () => {
    setShowCartModal(true);
  };

  const handleCartClose = () => {
    setShowCartModal(false);
  };

  const handleClickMood = () => {
    setDarkMood(!darkMood);
  };

  return (
    <header className="border-b-1 border-green-300 mb-10">
      {showCartModal && <Cart onCartClose={handleCartClose} />}

      <nav className="container flex items-center justify-between space-x-10 py-3">
        <button className="cursor-pointer">
          <img src={BrandLogo} width="139" height="26" alt="logo" />
        </button>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block cursor-pointer"
              onClick={handleClickMood}
            >
              <img src={darkMood ? Moon : Sun} width="24" height="24" alt="" />
            </button>
          </li>
          {/* Updated Cart Button */}
          <li className="relative">
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartModal}
            >
              <img src={ShoppingCart} width="24" height="24" alt="" />
            </a>
            {cartData.length > 0 && (
              <div className="bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-2">
                {cartData.length}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
