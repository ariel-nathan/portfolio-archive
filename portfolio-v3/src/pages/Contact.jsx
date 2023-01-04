import * as React from "react";

import memoji from "../images/memoji-waving.png";

function Contact() {
  return (
    <div className="flex flex-1 flex-col md:flex-row justify-center items-center overflow-hidden">
      {/* Column 1 */}
      <div className="text-left flex-1 flex justify-center items-center p-2">
        <img className="w-5/6" src={memoji} alt="An avatar of Ariel" />
      </div>
      {/* End Column 1 */}

      {/* Column 2 */}
      <div className="mockup-code w-5/6 md:w-1/2 md:mr-28">
        <pre data-prefix="$">
          <code>contact-info ls</code>
        </pre>
        <pre data-prefix="-">
          <code>
            <span></span>
          </code>
        </pre>
        <pre data-prefix=">" className="">
          <code>
            <span>
              e-mail:{" "}
              <a className="link text-info" href="mailto:me@arielnathan.com">
                me@arielnathan.com
              </a>
            </span>
          </code>
        </pre>
        <pre data-prefix=">" className="">
          <code>
            <span>
              github:{" "}
              <a
                className="link text-info"
                target="_blank"
                href="https://www.github.com/ariel-nathan"
              >
                view my code
              </a>
            </span>
          </code>
        </pre>
        <pre data-prefix=">" className="">
          <code>
            <span>
              linkedin:{" "}
              <a
                className="link text-info"
                target="_blank"
                href="https://www.linkedin.com/in/ariel-nathan/"
              >
                connect with me
              </a>
            </span>
          </code>
        </pre>
        <pre data-prefix=">" className="">
          <code>
            <span>
              resume:{" "}
              <a
                className="link text-info"
                target="_blank"
                href="https://drive.google.com/file/d/1LDUDgqzx-L2G2JhH4HJFi28cDLi1eZyb/view?usp=sharing"
              >
                view my resume
              </a>
            </span>
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
      {/* End Column 2 */}
    </div>
  );
}

export default Contact;
