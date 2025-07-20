import { useState } from "react";
import MoonIcon from "../../assets/icons/moon.svg";
import BrandLogo from "../../assets/logo.svg";
import ringIcon from "../../assets/ring.svg";
import shoppingCartIcon from "../../assets/shopping-cart.svg";
import CartDetails from "../../Cine/CartDetails";
const Header = () => {
  const [showCartInfo, setShowCartInfo] = useState(false);
  const handleClickCartDetails = () => {
    setShowCartInfo(true);
  };

  const handleClickOnClose = () => {
    setShowCartInfo(false);
  };
  return (
    <>
      {showCartInfo && <CartDetails onclose={handleClickOnClose} />}

      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={BrandLogo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ringIcon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={MoonIcon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => {
                  handleClickCartDetails();
                }}
              >
                <img src={shoppingCartIcon} width="24" height="24" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
