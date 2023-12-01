import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
    {
      title: 'Trippy',
      description: 'A description of Trippy. Overlapping user interfaces. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia, quos, praesentium, esse numquam sapiente corrupti facere ipsam laborum accusamus delectus voluptas blanditiis fugit totam sint exercitationem tempore quas ducimus. ' ,
      image: 'src/assets/project-images/Trippy screens.png',
      techStack: ['react-native', 'typescript', 'firebase', 'expo']
    },
    {
      title: 'NC News',
      description: 'Restful API etc Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aut magni obcaecati nesciunt iusto recusandae, iste quo consequatur a tempora animi reprehenderit perferendis nihil aliquam magnam minima? Minus, a sunt?',
      image: 'src/assets/project-images/NC news.png',
      techStack: ['react', 'javascript', 'axios', 'css']
    },
  ];

  const techStackLogos = {
    'react-native': { src: 'src/assets/logos/react-native-white.png', alt: 'React Native' },
    'typescript': { src: 'src/assets/logos/ts.svg', alt: 'TypeScript' },
    'firebase': { src: 'src/assets/logos/firebase-1.svg', alt: 'Firebase Realtime Database' },
    'expo': { src: 'src/assets/logos/expo-1.svg', alt: 'Expo' },
    'react': { src: 'src/assets/logos/react-1.svg', alt: 'React' },
    'javascript': { src: 'src/assets/logos/logo-javascript.svg', alt: 'JavaScript' },
    'axios': { src: 'src/assets/logos/Axios.svg', alt: 'Axios' },
    'css': { src: 'src/assets/logos/css-3.svg', alt: 'CSS' },
  };
  

export default function projects() {
    return (
      <section className="project-list">
        {projectsData.map((project) => (
            <div className="project-card">
                <div className="project-card-top-line">
                  <h4>{project.title}</h4>
                  <div className="project-icons">
                    <FaGithub size={28} />
                    <p style={{ fontSize: '28px' }}>🌏</p> {/* need to sort pointer*/}
                    {/* <FaExternalLinkAlt size={28}/> */}
                  </div>
                </div>
                <p>{project.description}</p>
                <img className="project-image" src={project.image}/>
                <div className="bottom-row">
                  <p>Tech stack</p>
                  <div className="tech-stack-container">
                      {project.techStack.map((tech) => (
                        <div className="tech-img">
                          <img
                          key={tech}
                          src={techStackLogos[tech].src}
                          alt={`${techStackLogos[tech].alt} logo`}
                          title={techStackLogos[tech].alt}
                          className="tech-logo"
                          />
                        </div>
                        ))}
                  </div>  
                </div>
            </div>
         ))}
      </section>
    )
}