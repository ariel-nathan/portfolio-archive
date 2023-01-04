import React from "react";

import { experiences } from "../data/Experiences";

function Experiences() {
  return (
    <div className="flex flex-col">
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>experiences ls</code>
        </pre>
        <pre data-prefix="-" className="">
          <code>
            <span className=""></span>
          </code>
        </pre>
        {experiences.map((experience) => (
          <React.Fragment key={experience.title}>
            <pre data-prefix=">" className="text-warning">
              <code>{experience.title}</code>
            </pre>
            <pre data-prefix=">" className="text-info">
              <code>
                <span className="text-gray-400">@ </span>
                <span className="text-info">{experience.company}</span>
              </code>
            </pre>
            <pre data-prefix=">" className="text-red-500">
              <code>
                <span className="text-red-500">{experience.date}</span>
              </code>
            </pre>
            <pre data-prefix="-">
              <code>
                <span></span>
              </code>
            </pre>
          </React.Fragment>
        ))}
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      </div>
    </div>
  );
}

export default Experiences;
