import React from "react";

function ContactMe({ setActivePage }) {
  return (
    <div className="flex flex-col">
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>contact-me ls</code>
        </pre>
        <pre data-prefix="-">
          <code>
            <span></span>
          </code>
        </pre>
        <pre data-prefix=">" className="">
          <code>
            <button
              className="btn btn-info"
              onClick={() => setActivePage("contact")}
            >
              Contact Me
            </button>
          </code>
        </pre>
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

export default ContactMe;
