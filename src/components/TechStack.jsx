import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const techStackLogos = {
  axios: { src: "/logos/Axios.svg", alt: "Axios" },
  css: { src: "/logos/css-3.svg", alt: "CSS" },
  express: { src: "/logos/express-109.svg", alt: "Express" },
  expo: { src: "/logos/expo-1.svg", alt: "Expo" },
  firebase: { src: "/logos/firebase-1.svg", alt: "Firebase Realtime Database" },
  html: { src: "/logos/html-5.svg", alt: "Html 5" },
  javascript: { src: "/logos/logo-javascript.svg", alt: "JavaScript" },
  mui: { src: "/logos/material-ui.svg", alt: "Material UI" },
  nextJS: { src: "/logos/next-js.svg", alt: "NextJs" },
  node: { src: "/logos/nodejs-2.svg", alt: "Node.js" },
  postgresql: { src: "/logos/postgresql.svg", alt: "PostgreSQL" },
  paper: { src: "/logos/p_monogram.png", alt: "React Native Paper" },
  react: { src: "/logos/react-1.svg", alt: "React" },
  "react-native": { src: "/logos/react-native-white.png", alt: "React Native" },
  typescript: { src: "/logos/ts.svg", alt: "TypeScript" },
  tailwind: { src: "/logos/tailwind.svg.png", alt: "Tailwind" },
};

const TechStack = ({ techStack }) => {
  return (
    <div className="tech-stack-container">
      {techStack.map((tech, index) => (
        <div key={index}>
          <div className="tech-logo-container">
            <div className="tech-logo">
              <img
                src={techStackLogos[tech].src}
                alt={`${techStackLogos[tech].alt} logo`}
              />
            </div>
            <div className="tech-title">
              <p>{techStackLogos[tech].alt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
