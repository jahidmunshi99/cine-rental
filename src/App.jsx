import MoveList from "./Cine/MoveList";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Sidebar from "./Layout/SideBar";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MoveList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
