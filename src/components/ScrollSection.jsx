import Projects from "./Projects"
export default function ScrollSection() {
    return (
        <section className="scroll-container">
            <p className="intro-text">Based in Manchester, I am a motivated developer working hard each day to take my learning further. I thrive in a collaborative environment and am adept at working with and motivating others. With 15 years of experience as a teacher and a life-long commitment to mastering the trumpet, I bring not only technical skills but also creativity and personality to every project.<br/>
            <br/>
             If not working on solving problems with code or playing the trumpet, I can probably be found making (or eating) bread and pizza.</p>
            <br/>
            <Projects />
        </section>
    )
}