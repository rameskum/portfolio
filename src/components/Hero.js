import React from "react"
import socialLinks from "../constants/social_links"
import heroImg from "../assets/images/hero-img.svg";
import links from "../constants/links";

const Hero = () => {

    const getContactPage = () => {
        return links.find(link => link.id === 'contact-page')
    }

    return (
        <header className="hero">
            <div className="section-center hero-center">
                <article className="hero-info">
                    <div className="underline"/>
                    <h1>i'm ramesh</h1>
                    <h4>Software Developer By Trade</h4>
                    <a href={getContactPage()?.url} className="btn hero-btn">
                        contact me
                    </a>
                    <ul className="social-icons hero-icons">
                        {socialLinks.map(link => {
                            return (
                                <li key={link.id}>
                                    <a className="social-icon" href={link.url}>
                                        {link.icon}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </article>
                <article className="hero-img">
                    <img alt="person having coffer and saying hello" className="hero-photo"
                         src={heroImg} placeholder="blurred"/>
                </article>
            </div>
        </header>
    )
}

export default Hero
