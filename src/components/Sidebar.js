import React from "react"
import {FaTimes} from "react-icons/fa"
import links from "../constants/links"
import socialLinks from "../constants/social_links"

const Sidebar = ({isOpen, toggleSidebar}) => {
    return (
        <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"} id="sidebar">
            <div>
                <button className="close-btn" id="close-btn" onClick={toggleSidebar}>
                    <FaTimes/>
                </button>
                <ul className="sidebar-links">
                    {links.map(link => {
                        return (
                            <li key={link.id}>
                                <a href={link.url} onClick={toggleSidebar}>
                                    {link.text}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <ul className="social-icons">
                    {socialLinks.map(link => {
                        return (
                            <li key={link.id}>
                                <a href={link.url} className="social-icon" target="_blank" rel="noopener noreferrer">
                                    {link.icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
