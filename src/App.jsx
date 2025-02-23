import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark bg-gray-950" : "bg-white"}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
