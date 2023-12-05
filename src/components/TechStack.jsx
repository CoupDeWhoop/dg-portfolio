import React, { useState } from "react";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const techStackLogos = {
    'react-native': { src: '/logos/react-native-white.png', alt: 'React Native' },
    typescript: { src: 'src//assets/logos/ts.svg', alt: 'TypeScript' },
    firebase: { src: 'src/assets/logos/firebase-1.svg', alt: 'Firebase Realtime Database' },
    expo: { src: 'src/assets/logos/expo-1.svg', alt: 'Expo' },
    react: { src: 'src/assets/logos/react-1.svg', alt: 'React' },
    javascript: { src: 'src/assets/logos/logo-javascript.svg', alt: 'JavaScript' },
    axios: { src: 'src/assets/logos/Axios.svg', alt: 'Axios' },
    html: { src: 'src/assets/logos/html-5.svg', alt: 'Html 5' },
    css: { src: 'src/assets/logos/css-3.svg', alt: 'CSS' },
    node: {src: 'src/assets/logos/nodejs-2.svg', alt: 'Node.js'},
    express: {src: 'src/assets/logos/express-109.svg', alt: 'Express'},
    postgresql: {src: 'src/assets/logos/postgresql.svg', alt: 'PostgreSQL'},
    paper: {src: 'src/assets/logos/p_monogram.png', alt: 'React Native Paper'}
  };

const TechStack = ({ techStack }) => {
  

    return (
        <div className="tech-stack-container">
          {techStack.map((tech, index)=> (
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