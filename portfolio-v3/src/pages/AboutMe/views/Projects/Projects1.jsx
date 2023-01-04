import React from "react";

import Project from "./components/Project";

import { projects } from "../../data/Projects";

function Projects1() {
  return (
    <div className="flex flex-col">
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>projects ls</code>
        </pre>
        <pre data-prefix="-">
          <code>
            <span></span>
          </code>
        </pre>
        {projects.slice(0, 3).map((project) => (
          <Project key={project.title} project={project} />
        ))}
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      </div>
    </div>
  );
}

export default Projects1;
