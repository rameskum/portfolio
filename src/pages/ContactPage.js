import contactImage from "../assets/images/contact.svg";
import Title from "../components/Title";
import SocialDetails from "../components/SocialDetails";
import {FaWhatsapp} from "react-icons/fa";
import {MdOutlineMailOutline} from "react-icons/md";

function ContactPage() {
    return (
        <section className="section single-page">
            <section className="section about">
                <div className="section-center about-center">
                    <article className="about-img">
                        <img className="hero-photo" src={contactImage} alt="contact"/>
                    </article>
                    <article className="about-info">
                        <Title title="Contact" className="about-title"
                               sectionDesc="Let's get to know each other, or just drop me a line."/>
                        <p>
                            If you are looking to get a hold of me, you can drop me a message:
                            <div>
                                <MdOutlineMailOutline className="social-icon"/>
                                <a className="link"
                                   href="mailto:rameskum.ms@outlook.com">
                                    rameskum.ms@outlook.com
                                </a>
                            </div>
                            <div>
                                <FaWhatsapp className="social-icon"/>
                                <a className="link"
                                   href="https://wa.me/+917064247865">
                                    +91 7064247865
                                </a>
                            </div>
                        </p>
                        <p>
                            You can also reach out to me on any social media below.
                        </p>
                        <SocialDetails/>
                    </article>
                </div>
            </section>
        </section>
    )
}

export default ContactPage;
