import React, { useState } from "react";
import { cn } from "./lib/utils";

const workExperience = [
  {
    company: "Farms to Friends",
    title: "Lead Engineer",
    location: "Remote",
    start: new Date("2024-01-01"),
    end: new Date(),
    description: "Leading the development of an e-commerce buying club.",
  },
  {
    company: "Achieve",
    title: "Software Engineer",
    location: "Remote",
    start: new Date("2023-10-01"),
    end: new Date("2024-11-01"),
    description:
      "Lead the development of two new services. The Acceleration Loans App, which allowed our customers to apply for debt relief faster.",
  },
  {
    company: "Achieve",
    title: "Associate Engineer",
    location: "Remote",
    start: new Date("2022-09-01"),
    end: new Date("2023-09-01"),
    description:
      "Developed the internationalization logic for one of our services, which allowed us to expand to the other markets. Improved the teams ticket resolution time by introducing ephemeral environments for testing and debugging in the Kubernetes cluster.",
  },
  {
    company: "CyberCube",
    title: "Software Engineer Intern",
    location: "Remote",
    start: new Date("2022-05-01"),
    end: new Date("2022-08-01"),
    description:
      "Implemented telemetry in our customer-facing application using our internal analytics API. Developed reusable React components to improve codebase efficiency. Decreased vulnerabilities and made customer experiences smoother by resolving bugs in the backlog.",
  },
  {
    company: "Network Doctor",
    title: "Core Services Engineer Intern",
    location: "Englewood, NJ",
    start: new Date("2022-03-01"),
    end: new Date("2022-04-01"),
    description:
      "Improved the rate at which new systems engineers came up to speed by enhancing the existing onboarding process. Developed custom scripts to deploy remote software, improving efficiency.",
  },
  {
    company: "Network Doctor",
    title: "Systems Engineer Intern",
    location: "Englewood, NJ",
    start: new Date("2021-10-01"),
    end: new Date("2022-03-01"),
    description:
      "Freed up system engineer time by developing a custom script to export and organize Google Suite customer data. Created effective documentation for common problems, reducing time spent working on tickets, easing client worries and improving efficiency.",
  },
  {
    company: "Home Dynamix",
    title: "Ecommerce Analyst",
    location: "North Arlington, NJ (Hybrid)",
    start: new Date("2019-09-01"),
    end: new Date("2021-08-01"),
    description:
      "Increased understanding of product KPIs by building an internal analytics dashboard to scrape, store, organize, and display product data. Surpassed business milestones, generating $2.6 million in sales over 18 months through data analysis and leveraging custom-built internal tooling.",
  },
];

const projects = [
  {
    name: "RLS Scope",
    description:
      "Verify proper scoping of your Supabase project's RLS policies with AI-generated pgTAP tests. Built during the 2024 Supabase + YC Hackathon.",
    url: "https://www.npmjs.com/package/rls-scope",
    tech: ["Node.js", "TypeScript", "pgTAP", "Supabase", "Anthropic Claude"],
  },
  {
    name: "Torrent Indexer",
    description: "A tool to index torrent releases",
    url: "https://github.com/ariel-nathan/torrent-indexer",
    tech: ["Bun", "TypeScript", "Axios", "Cheerio"],
  },
  {
    name: "LoRa Doomsday Communication Device",
    description:
      "A LoRa communication device for offgrid scenarios. Can send and receive messages up to 3 miles away. Looks like a blackberry.",
    url: "",
    tech: ["Micro Controllers", "LoRa", "CircuitPython", "Adafruit"],
  },
];

const recommendations = [
  {
    author: "Mushfiq Mahmud",
    date: new Date("2024-11-26"),
    quote:
      "Ariel is a quick learner, a motivated self-starter, and a dependable collaborator. I am confident that he will bring these same qualities to any organization he joins, and I believe he will be a tremendous asset to your team.",
    url: "https://docs.google.com/document/d/1WhfNZ1pdB9yYX46AicYcUdHYDlbMQJtJ2p0bR90TAII/edit?usp=sharing",
  },
  {
    author: "Firoz Patan",
    date: new Date("2024-11-22"),
    quote:
      "Ariel would be an incredible asset to any team, and he deserves recognition for his exceptional technical skills and initiative-taking attitude",
    link: "https://docs.google.com/document/d/1ybWB9BTyWd-Iz6h0Ss4uzCnklYhvrws9nu51ubBtTPI/edit?usp=sharing",
  },
  {
    author: "Matt Williamson",
    date: new Date("2022-08-10"),
    quote:
      "[Ariel] was quick to learn, and was great about receiving and reacting to constructive feedback. He was always willing to learn...",
    link: "https://docs.google.com/document/d/1fVQm2WMZuR7KJjDEfn8BCZvSvbziM5z4sSbHELyfl_M/edit?usp=sharing",
  },
  {
    author: "Jeremy Ferrara",
    date: new Date("2021-07-28"),
    quote:
      "[Ariel's] technical skills were also something that made him standout. He was able to build multiple projects that became staples in our ability to report on our business.",
    link: "https://docs.google.com/document/d/1zf4TObFILFEPK8QdsG5K72KqSzMA7-yPk9i2AXPfX_M/edit?usp=sharing",
  },
];

export function File({
  title,
  className,
  children,
  activeFile,
  setActiveFile,
}: {
  title: string;
  className?: string;
  children?: React.ReactNode;
  activeFile: string | undefined;
  setActiveFile: (file: string) => void;
}) {
  return (
    <div
      onClick={() => setActiveFile(title)}
      className={cn(
        "relative group max-w-xs flex flex-col md:max-w-md lg:max-w-lg w-full border-x border-t border-black h-8 max-h-80 md:max-h-96 transition-all ease-in-out",
        activeFile === title && "h-80 md:h-96"
      )}
    >
      <div
        className={cn(
          "absolute select-none cursor-pointer -top-[26px] border bg-white border-black px-2 border-b-white group-hover:bg-black group-hover:text-white",
          className,
          activeFile === title && "opacity-100 bg-black text-white"
        )}
      >
        {title}
      </div>
      <div
        className={cn(
          "invisible p-2 max-h-96 pb-8 overflow-x-auto grow flex flex-col",
          activeFile === title && "visible"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function Experience(experience: (typeof workExperience)[number]) {
  return (
    <>
      <p>
        <strong>{experience.company}</strong> | <em>{experience.title}</em>
      </p>
      <p>
        {experience.start.toLocaleDateString("default", {
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        })}{" "}
        -{" "}
        {experience.end.getTime() === new Date().getTime()
          ? "Current"
          : experience.end.toLocaleDateString("default", {
              month: "short",
              year: "numeric",
              timeZone: "UTC",
            })}
      </p>
      <p>{experience.description}</p>
    </>
  );
}

function Recommendation(recommendation: (typeof recommendations)[number]) {
  return (
    <div className="border p-2 mb-4 rounded space-y-2">
      <p>
        <em>&quot;{recommendation.quote}&quot;</em>
      </p>
      <div className="flex items-center justify-between">
        <p className="text-xs">
          <strong>{recommendation.author}</strong> |{" "}
          {recommendation.date.toLocaleDateString("default", {
            month: "short",
            year: "numeric",
            timeZone: "UTC",
          })}
        </p>
        <a
          href={recommendation.url}
          target="_blank"
          className="underline text-xs"
          rel="noreferrer"
        >
          View Full
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [activeFile, setActiveFile] = useState<string>("About Me");
  const [clicks, setClicks] = useState<number>(0);

  return (
    <div className="flex flex-col items-center grow justify-center">
      {clicks >= 3 && (
        <File
          title="Top Secret"
          activeFile={activeFile}
          setActiveFile={setActiveFile}
          className="left-[40%] z-10"
        >
          <p>Whoa! You found the secret file! 🎉</p>
          <br />
          <p>Here's a little secret:</p>
          <br />
          <p>My Bitcoin wallet seed phrase is:</p>
          <p>
            <strong>cabbage bacon tomato lettuce avocado onion...</strong>
          </p>
          <br />
          <p>Just kidding! Here's a cookie for your efforts!</p>
          <p className="text-9xl text-center select-none">🍪</p>
        </File>
      )}
      <File
        title="Experience"
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        className="left-3.5 z-20"
      >
        {workExperience.map((experience) => (
          <React.Fragment key={experience.description}>
            <Experience key={experience.description} {...experience} />
            <br />
          </React.Fragment>
        ))}
        <p>I also delivered pizzas as a teenager in my Dodge Challenger.</p>
      </File>
      <File
        title="Stuff I'm Proud Of"
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        className="left-[30%] z-20"
      >
        <p>
          My <em>beautiful</em> wife,{" "}
          <a
            href="https://elianaberrean.com"
            target="_blank"
            className="underline"
          >
            <strong>Eliana Berrean</strong>
          </a>
        </p>
        <br />
        <p>
          <strong>Associates Degree</strong> | Computer Science
        </p>
        <p>
          <em>Bergen Community College</em>, 2024
        </p>
        <br />
        <p>
          <strong>Achieve AI Hackathon Finalist</strong>, 2023
        </p>
      </File>
      <File
        title="Projects"
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        className="left-[70%] z-50"
      >
        {projects.map((project) => (
          <React.Fragment key={project.name}>
            <p className="inline-block">
              <strong>{project.name}</strong>
            </p>
            <a href={project.url} target="_blank" className="underline">
              {project.url}
            </a>
            <p>{project.description}</p>
            <p className="text-xs">
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>
            <br />
          </React.Fragment>
        ))}
      </File>
      <File
        title="Recommendations"
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        className="left-[10%] z-30"
      >
        {recommendations.map((recommendation) => (
          <React.Fragment key={recommendation.author}>
            <Recommendation key={recommendation.author} {...recommendation} />
          </React.Fragment>
        ))}
      </File>
      <File
        title="About Me"
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        className="left-1/2 z-30"
      >
        <p>
          Hello there! I'm <strong>Ariel</strong>,
        </p>
        <br />
        <p>
          A software engineer based in NJ/NYC. I love building things and
          solving problems.
        </p>
        <br />
        <p>
          Whether it's software, an offgrid LoRa communication system, or a
          woodworking project. I'm always looking for new mysteries to unravel.
        </p>
        <br />
        <p>
          Thanks for stopping by! Feel free to check out my resume and projects.
        </p>
        <br />
        <p>
          <strong>P.S. </strong>
          theres an easter egg around here somewhere...
        </p>
        <p className="text-gray-100 select-none">
          <strong>Hint:</strong> Clicking on the "Ariel's Files" multiple times
          might reveal it...
        </p>
      </File>
      <File
        title="Resume"
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        className="left-[30%] z-40"
      >
        <a
          href="https://drive.google.com/file/d/1XC7ea3sZprrAKvtnRT6KLLuy2jdwxmHX/view?usp=sharing"
          target="_blank"
          className="underline"
        >
          Click here to view my resume
        </a>
      </File>
      <File
        title="Contact Info"
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        className="left-[60%] z-50"
      >
        <p>
          me (at) arielnathan (dot) com
          <span className="text-gray-400 select-none">
            {" "}
            - (spam protection)
          </span>
        </p>
        <br />
        <a
          href="https://linkedin.com/in/ariel-nathan"
          target="_blank"
          className="underline"
        >
          https://linkedin.com/in/ariel-nathan
        </a>
        <br />
        <a
          href="https://github.com/ariel-nathan"
          target="_blank"
          className="underline"
        >
          https://github.com/ariel-nathan
        </a>
      </File>
      <div className="max-w-xs transition-all ease-in-out border md:max-w-md lg:max-w-lg border-black flex items-center z-50 justify-center w-full p-4 bg-white">
        <div
          onClick={() => setClicks(clicks + 1)}
          className="border border-black rounded bg-yellow-300 p-2 select-none cursor-pointer"
        >
          <h1>Ariel's Files</h1>
        </div>
      </div>
    </div>
  );
}
