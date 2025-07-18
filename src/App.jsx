import { useState } from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import MoveList from "./Layout/MoveList";
import Sidebar from "./Layout/SideBar";

function App() {
  const [showCartInfo, setShowCartInfo] = useState(false);
  const hanldeClickMovieCart = () => {
    setShowCartInfo(true);
  };

  return (
    <div className="bg-gray-600">
      <Header onCartInfo={hanldeClickMovieCart} />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MoveList
            showCartInfo={showCartInfo}
            onCartclose={() => {
              setShowCartInfo(!showCartInfo);
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
