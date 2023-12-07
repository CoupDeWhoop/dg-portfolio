import React, {useState} from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import TechStack from "./TechStack";

const projectsData = [
  {
    title: 'Trippy',
    description: 'An app developed in a team of 6 streamlining the school trip-planning process. In three distinct user types: teacher, parent or pupil; trip details are managed, parental consent given, inventory items listed, whilst meeting points & locations are shared on the map-view. Head-counts are handled through a QR code system displayed uniquely by each pupil and scanned by the teacher.',
    image: '/project-images/Trippy screens transparent.png',
    gitHub: 'https://github.com/Proc31/trippy',
    hostedSite: 'https://northcoders.com/project-phase/trippy',
    hostedAltText: 'This app was made for ios or android, please visit the GitHub page for more details',
    techStack: ['react-native', 'typescript', 'firebase', 'expo', 'paper']
  },
  {
    title: 'NC News',
    description: 'A fully responsive web application for browsing news articles, commenting, voting and user interaction built using React, CSS and elements of Material UI.',
    image: '/project-images/nc-news.png',
    gitHub: 'https://github.com/CoupDeWhoop/fe-nc-news',
    hostedSite: 'https://incomparable-pithivier-d5878b.netlify.app/',
    hostedAltText: 'under construction 👷🏼‍♂️',
    techStack: ['react', 'javascript', 'axios', 'css']
  },
  {
    title: 'NC News API',
    description: 'RESTful API for my NC News Front-end project. Designed to deliver articles, comments, votes, categories and users from the database. Implemented using Jest, Husky and TDD with NodeJS, Express and PostgreSQL.',
    image: '/project-images/nc-news-api.png',
    gitHub: 'https://github.com/CoupDeWhoop/be-nc-news',
    hostedSite: 'https://nc-news-api-zlkx.onrender.com/api/',
    techStack: ['node', 'javascript', 'express', 'postgresql']
  },
  {
    title: 'Card Matching Game',
    description: 'Retro football cards matching game. Made early in the front-end part of the Northcoders bootcamp as a way of learning to manipulate the Document Object Model (DOM)',
    image: '/project-images/card-matcher-2.png',
    gitHub: 'https://github.com/CoupDeWhoop/card-matching-game',
    hostedSite: 'https://cozy-torte-539533.netlify.app/',
    techStack: ['javascript', 'html', 'css' ]
  }
];
const colourPalette = ['#b8e0d4','#809bce', '#eac4d5', '#d6eadf',  '#95b8d1' ]

const pickColour = (index) => {
  return colourPalette[index % colourPalette.length]
}

const Projects = () => {
  const [cardFlipped, setCardFlipped] = useState(Array(projectsData.length).fill(false));

  function handleClick(index) {
    const newCardState = [...cardFlipped];
    newCardState[index] = !newCardState[index]
    setCardFlipped(newCardState)
  }


  return (
    <section className="project-list">
      {projectsData.map((project, index) => (
        <div className="project-card" key={project.title}>
          <div className="project-card-top-line">
            <div className="project-title">
              <h3>{project.title}</h3>
            </div>
            <div className="project-icons">
              <a href={project.gitHub}>
                <FaGithub size={28} alt={`${project.title} github link`}/>
              </a>
              <div className="hosted-site-container">
                {project.hostedSite? <a 
                  href={project.hostedSite} target="_blank">
                    <FaGlobe size={28} alt={`${project.title} web link`}/> 
                  </a> : null }
                </div>
            </div>
          </div>
          <div className="flip-card-container"
            onClick={() => handleClick(index)}>
            <div className={'flip-card' + (cardFlipped[index]? ' flipped': '')}>
              <div className="flip-card-front" style={{backgroundColor: pickColour(index)}}>
                <img className="project-image" src={project.image} alt={project.title} />
                <img className="tap-to-flip-icon" src={'/other-icons/click_finger_icon.png'} alt={'tap to flip'} />
              </div>
              <div className="flip-card-back">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
          <div className="bottom-row">
            {/* <p className="tech-list-label">Tech stack</p> */}
            <TechStack techStack={project.techStack}/>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;