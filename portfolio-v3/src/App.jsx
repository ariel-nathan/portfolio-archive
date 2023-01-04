import * as React from "react";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact";

import NavBar from "./components/NavBar/NavBar";

function App() {
  const [theme, setTheme] = React.useState("");
  const [activePage, setActivePage] = React.useState("home");

  React.useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const handlePage = (page) => {
    switch (page) {
      case "home":
        return <Home setActivePage={setActivePage} />;
      case "aboutme":
        return <AboutMe setActivePage={setActivePage} />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col h-screen app" data-theme={theme}>
      <NavBar
        theme={theme}
        handleThemeChange={handleThemeChange}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <div className="flex-1 flex justify-center items-center">
        {handlePage(activePage)}
      </div>
    </div>
  );
}

export default App;
