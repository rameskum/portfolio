import React from "react"
import socialLinks from "../constants/social_links"

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="social-icons">
                {socialLinks.map(link => {
                    return (
                        <li>
                            <a className="social-icon" href={link.url} key={link.id}>
                                {link.icon}
                            </a>
                        </li>
                    )
                })}
            </ul>

            <p>copyright &copy; {new Date().getFullYear()} <span>ramesh kumar</span>. all rights reserved.</p>
        </footer>
    )
}

export default Footer
