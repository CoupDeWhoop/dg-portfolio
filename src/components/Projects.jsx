import React, {useState} from "react";
import { FaGithub } from "react-icons/fa";
import TechStack from "./TechStack";

const projectsData = [
  {
    title: 'Trippy',
    description: 'A description of Trippy. Overlapping user interfaces. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia, quos, praesentium, esse numquam sapiente corrupti facere ipsam laborum accusamus delectus voluptas blanditiis fugit totam sint exercitationem tempore quas ducimus. ' ,
    image: '/project-images/Trippy screens transparent.png',
    gitHub: 'https://github.com/Proc31/trippy',
    hostedSite: '',
    hostedAltText: 'This app was made for ios or android, please visit the GitHub page for more details',
    techStack: ['react-native', 'typescript', 'firebase', 'expo', 'paper']
  },
  {
    title: 'NC News',
    description: 'Fromt end we applicaiton built in react. etc Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aut magni obcaecati nesciunt iusto recusandae, iste quo consequatur a tempora animi reprehenderit perferendis nihil aliquam magnam minima? Minus, a sunt?',
    image: '/project-images/nc-news.png',
    gitHub: 'https://github.com/CoupDeWhoop/fe-nc-news',
    hostedSite: 'https://incomparable-pithivier-d5878b.netlify.app/',
    hostedAltText: 'under construction 👷🏼‍♂️',
    techStack: ['react', 'javascript', 'axios', 'css']
  },
  {
    title: 'NC News API',
    description: 'This is the restful API. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus dolorem tempora, doloremque odio provident ut? Similique quo fuga itaque? Alias necessitatibus illo suscipit, provident hic blanditiis magnam harum ipsum.',
    image: '/project-images/nc-news-api.png',
    gitHub: 'https://github.com/CoupDeWhoop/be-nc-news',
    hostedSite: 'https://nc-news-api-zlkx.onrender.com/api/',
    techStack: ['node', 'javascript', 'express', 'postgresql']
  },
  {
    title: 'Card Matching Memory Game',
    description: 'retro football cards matching game. used domLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores eos dolorem error! Dolorem veniam, architecto voluptatum recusandae ullam distinctio veritatis aut repudiandae explicabo, quae earum praesentium unde adipisci optio.',
    image: '/project-images/card-matcher.png',
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
                <FaGithub size={28} />
              </a>
              <div className="hosted-site-container">
                {project.hostedSite? <a 
                  href={project.hostedSite} target="_blank">
                  <p style={{ fontSize: '28px' }}>🌏</p>
                  </a> : null }
                </div>
            </div>
          </div>
          <div className="flip-card-container"
            onClick={() => handleClick(index)}>
            <div className={'flip-card' + (cardFlipped[index]? ' flipped': '')}>
              <div className="flip-card-front" style={{backgroundColor: pickColour(index)}}>
                <img className="project-image" src={project.image} alt={project.title} />
              </div>
              <div className="flip-card-back">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
          <div className="bottom-row">
            <p className="tech-list-label">Tech stack</p>
            <TechStack techStack={project.techStack}/>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;