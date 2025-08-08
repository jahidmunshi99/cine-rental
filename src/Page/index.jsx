import { useContext } from "react";
import MovieList from "../Cine/MovieList";
import { MoodContext } from "../context/index.js";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";

const Page = () => {
  const { darkMood } = useContext(MoodContext);
  return (
    <div className={`${!darkMood ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
