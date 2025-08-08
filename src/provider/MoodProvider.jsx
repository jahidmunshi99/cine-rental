import { useState } from "react";
import { MoodContext } from "../context/index.js";
const MoodProvider = ({ children }) => {
  const [darkMood, setDarkMood] = useState(false);
  return (
    <MoodContext.Provider value={{ darkMood, setDarkMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export { MoodProvider };
