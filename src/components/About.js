import profilePicture from "../assets/images/about-img.png"
import Title from "./Title";
import links from "../constants/links";

const About = () => {

    const getAboutLink = () => {
        return links.find(link => link.id === 'about-page');
    }

    return (
        <section className="section about">
            <div className="section-center about-center">
                <article className="about-img">
                    <img className="hero-photo" src={profilePicture} alt="ramesh kumar profile picture"/>
                </article>
                <article className="about-info">
                    <Title title="about" className="about-title"/>
                    <p>
                        I am a developer by trade with a keen interest in technology. Beside challenging myself, I love
                        learning new
                        technologies and languages.
                    </p>
                    <p>
                        Starting as a full-time software developer, I have worked with JAVA, SQL, Groovy, and
                        Spring-Boot. I also have
                        supported multiple System Integration Testing and Productions. I always have looked towards
                        automating manual
                        tasks like a Junkie which maintains production. I am currently working in Pune, Maharashtra
                        specializes in
                        back-end development, algorithms, and data structure.
                    </p>
                    <a className="btn" href={getAboutLink()?.url}>learn more</a>
                </article>
            </div>
        </section>
    )
}

export default About;