import React from "react"
import {FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";
import links from "../constants/links"
import SocialDetails from "./SocialDetails";

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
                                <Link to={link.url} onClick={toggleSidebar}>
                                    {link.text}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <SocialDetails />
            </div>
        </aside>
    )
}

export default Sidebar
