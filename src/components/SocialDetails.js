import socialLinks from "../constants/social_links";
import React from "react";

const SocialDetails = ({className}) => {
    return (
        <ul className={className || 'social-icons'}>
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
    )
}

export default SocialDetails;