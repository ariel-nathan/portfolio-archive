import React from "react";

function Project({ project }) {
  const badgeColor = (badge) => {
    switch (badge) {
      case "React":
        return "badge-info";
      case "React Native":
        return "badge-info";
      case "JavaScript":
        return "badge-warning";
      case "Node.js":
        return "badge-success";
      case "Python":
        return "badge-warning";
      case "MongoDB":
        return "badge-success";
      case "SQL":
        return "badge-error";
      case "Firebase":
        return "badge-error";
      default:
        return "badge-secondary";
    }
  };

  return (
    <div>
      <pre data-prefix=">" className="text-warning">
        <code>{project.title}</code>
      </pre>
      {/* <pre data-prefix=">" className="">
        <code>{project.description}</code>
      </pre> */}
      <pre data-prefix=">" className="text-info">
        <a
          className={`link text-info ${
            project.link === "" ? "line-through pointer-events-none" : ""
          }`}
          href={project.link}
          target="_blank"
        >
          Visit
        </a>
        <span> </span>
        <a
          className={`link text-info ${
            project.github === "" ? "line-through pointer-events-none" : ""
          }`}
          href={project.github}
          target="_blank"
        >
          GitHub
        </a>
      </pre>
      <pre data-prefix=">" className="">
        {project.tech.slice(0, 2).map((tech) => (
          <div key={tech} className={`badge badge-sm mr-1 ${badgeColor(tech)}`}>
            {tech}
          </div>
        ))}
      </pre>
      {project.tech.length > 2 && (
        <pre data-prefix=">" className="">
          {project.tech.slice(2, 4).map((tech) => (
            <div
              key={tech}
              className={`badge badge-sm mr-1 ${badgeColor(tech)}`}
            >
              {tech}
            </div>
          ))}
        </pre>
      )}

      <pre data-prefix="-">
        <code>
          <span></span>
        </code>
      </pre>
    </div>
  );
}

export default Project;
