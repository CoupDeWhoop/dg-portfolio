import Projects from "./Projects"
export default function ScrollSection() {
    return (
        <section className="scroll-container">
            <p className="intro-text"><em>Hello !</em><br/>
            I'm a back-end software developer working at Bright HR in Manchester. Having begun as a Javascript Developer, I'm now primarily working with C#. I previously worked as a music teacher in Bolton for 16 years and continue to play the trumpet.</p>
            <Projects />
        </section>
    )
}
