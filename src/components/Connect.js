import poster from "../assets/images/project-1.jpeg"
import handshake from "../assets/videos/connect.mp4"
import Title from "./Title";
import {Link} from "react-router-dom";

const Connect = () => {
    return (
        <>
            <section className="section connect">
                <video
                    autoPlay
                    className="video-container"
                    controls
                    loop
                    muted
                    poster={poster}>

                    <source src={handshake} type="video/mp4"/>
                    Sorry, your browser does not support embedded videos
                </video>
                <div className="video-banner">
                    <Title title="let's get in touch"/>
                    <p className="video-text">
                        My inbox is always open. Whether you have a question
                        or just want to say hi, I’ll try my best to get back to you!
                    </p>
                    <Link className="btn" to="/contact">contact me</Link>
                </div>
            </section>
        </>
    );
}

export default Connect;