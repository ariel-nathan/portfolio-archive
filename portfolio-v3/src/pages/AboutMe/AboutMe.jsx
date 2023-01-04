import * as React from "react";

import Skills from "./views/Skills";
import Experiences from "./views/Experiences";
import Projects1 from "./views/Projects/Projects1";
import Projects2 from "./views/Projects/Projects2";
import Projects3 from "./views/Projects/Projects3";
import Projects4 from "./views/Projects/Projects4";
import ContactMe from "./views/Projects/ContactMe";

function AboutMe({ setActivePage }) {
  const [index, setIndex] = React.useState(1);

  const views = [
    { view: "Skills" },
    { view: "Experiences" },
    { view: "Projects1" },
    { view: "Projects2" },
    { view: "Projects3" },
    { view: "Projects4" },
    { view: "Contact Me" },
  ];

  console.log(index, views.length);

  const handleViewChange = (e) => {
    if (e.target.id === "next") {
      if (index >= views.length) {
        setIndex(1);
      } else {
        setIndex(index + 1);
      }
    } else if (e.target.id === "prev") {
      if (index <= 1) {
        setIndex(views.length);
      } else {
        setIndex(index - 1);
      }
    }
  };

  const handleView = () => {
    switch (index) {
      case 1:
        return <Skills />;
      case 2:
        return <Experiences />;
      case 3:
        return <Projects1 />;
      case 4:
        return <Projects2 />;
      case 5:
        return <Projects3 />;
      case 6:
        return <Projects4 />;
      case 7:
        return <ContactMe setActivePage={setActivePage} />;
      default:
        return <Skills />;
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center overflow-hidden">
      <div className="mb-16">{handleView()}</div>
      <div className="absolute bottom-0 right-3/4 mb-5 md:top-1/2">
        <button
          className="btn btn-lg"
          id="prev"
          onClick={(e) => handleViewChange(e)}
        >
          {"<"}
        </button>
      </div>
      <div className="absolute bottom-0 left-3/4 mb-5 md:top-1/2">
        <button
          className="btn btn-lg"
          id="next"
          onClick={(e) => handleViewChange(e)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
