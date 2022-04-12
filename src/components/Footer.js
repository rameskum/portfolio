import React from "react"
import SocialDetails from "./SocialDetails";

const Footer = () => {
    return (
        <footer className="footer">
            <SocialDetails/>
            <p>copyright &copy; {new Date().getFullYear()} <span>ramesh kumar</span>. all rights reserved.</p>
        </footer>
    )
}

export default Footer
