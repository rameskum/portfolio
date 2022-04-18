import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {BsArrowUpRightSquare} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import defaultProjectImage from '../assets/images/rest-api.svg';

const Project = ({id, title, description, tags, code, demo, image}) => {
    return (<article className="project">
        <div className="project-img">
            <img alt={title} src={image || defaultProjectImage}/>
        </div>
        <div className="project-info">
            <span className="project-number">{id}.</span>
            <Link className="project-slug" to={`/projects/`}>
                <h3>{title}</h3>
            </Link>
            <p className="project-desc">{description}</p>
            <div className="project-stack">
                {tags.map((tag, idx) => {
                    return <span key={'tag-' + idx}>{tag}</span>;
                })}
            </div>
            <div className="project-links">
                <a
                    className="social-icon"
                    href={code}
                    target="_blank"
                    rel="noreferrer">
                    <FaGithub/>
                </a>
                <a
                    className="social-icon"
                    href={demo}
                    target="_blank"
                    rel="noreferrer">
                    <BsArrowUpRightSquare/>
                </a>
            </div>
        </div>
    </article>);
};

export default Project;
