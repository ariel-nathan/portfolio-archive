import React from "react";

import { skills } from "../data/Skills";

function Skills() {
  return (
    <div className="flex flex-col">
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>skills ls</code>
        </pre>
        <pre data-prefix="-">
          <code>
            <span></span>
          </code>
        </pre>
        {skills.map((skill) => (
          <pre key={skill} data-prefix=">" className="text-warning">
            <code>{skill}</code>
          </pre>
        ))}
        <pre data-prefix="-">
          <code>
            <span></span>
          </code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      </div>
    </div>
  );
}

export default Skills;
