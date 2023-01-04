import * as React from "react";

import { motion } from "framer-motion";

import memoji from "../images/memoji.png";

function Home({ setActivePage }) {
  return (
    <div className="flex flex-1 flex-col md:flex-row md:justify-center md:items-center">
      {/* Memoji */}
      <div className="text-left flex flex-1 justify-center items-center">
        <img className="w-5/6" src={memoji} alt="An avatar of Ariel" />
      </div>
      {/* End Memoji */}

      {/* Welcome Text */}
      <div className="md:text-left text-center flex flex-1 flex-col md:items-start px-5">
        <motion.h1
          animate={{
            x: [500, 0],
            opacity: [0, 1],
          }}
          transition={{ duration: 1 }}
          className="text-4xl hidden md:flex-1 md:tooltip md:tooltip-right tooltip-open md:tooltip-info"
          data-tip="Hello"
        >
          👋
        </motion.h1>
        <motion.h1
          animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 1, delay: 1 }}
          className="text-4xl mt-5"
        >
          I'm <span className="font-bold text-info">Ariel</span>,
        </motion.h1>
        <motion.h1
          animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 1, delay: 2 }}
          className="text-4xl"
        >
          A{" "}
          <span
            className="font-bold md:tooltip md:tooltip-right md:tooltip-info text-info"
            data-tip="I like code :)"
          >
            Software Engineer
          </span>{" "}
          from New Jersey
        </motion.h1>
        <div className="flex w-full justify-center items-center md:justify-start">
          <motion.button
            animate={{
              opacity: [0, 1],
            }}
            transition={{ duration: 1, delay: 2.5 }}
            className="btn btn-info mt-5 mr-5"
            onClick={() => setActivePage("aboutme")}
          >
            About Me
          </motion.button>
          <motion.button
            animate={{
              opacity: [0, 1],
            }}
            transition={{ duration: 1, delay: 3 }}
            className="btn btn-info mt-5"
            onClick={() => setActivePage("contact")}
          >
            Contact Me
          </motion.button>
        </div>
      </div>
      {/* End Welcome Text */}
    </div>
  );
}

export default Home;
