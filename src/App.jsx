import Page from "./Page";
import { MoodProvider } from "./provider/MoodProvider";
import { MovieProvider } from "./provider/MovieProvider";

function App() {
  return (
    <>
      <MoodProvider>
        <MovieProvider>
          <Page />
        </MovieProvider>
      </MoodProvider>
    </>
  );
}

export default App;
