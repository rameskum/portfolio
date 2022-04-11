import React from "react"
import {FaGithub} from "react-icons/fa";
import {CgArrowTopRightO} from "react-icons/cg";

const Project = ({
                     id,
                     title,
                     description,
                     tags,
                     code,
                     demo,
                     image
                 }) => {
    return (
        /*<article className="project">
            <img src={image} alt={title} className="project-img"/>
            <div className="project-info">
                <span className="project-number">0{id + 1}.</span>
                <a href={`/projects/${slug}`} className="project-slug">
                    <h3>{title}</h3>
                </a>
                <p className="project-desc">{description}</p>
                <div className="project-stack">
                    {stack.map(item => {
                        return <span key={item.id}>{item.title}</span>
                    })}
                </div>
                <div className="project-links">
                    <a href={github}>
                        <FaGithubSquare className="project-icon"/>
                    </a>
                    <a href={url}>
                        <FaShareSquare className="project-icon"/>
                    </a>
                </div>
            </div>
        </article>*/
        <article className="project">
            <div className="project-img">
                <img alt={title} src={image}/>
            </div>
            <div className="project-info">
                <span className="project-number">1.</span>
                <a className="project-slug" href={`/projects/${id}`}>
                    <h3>{title}</h3>
                </a>
                <p className="project-desc">
                    {description}
                </p>
                <div className="project-stack">
                    {tags.map(tag => {
                        return <span>{tag}</span>
                    })}
                </div>
                <div className="project-links">
                    <a className="social-icon" href={code} target="_blank" rel="noreferrer">
                        <FaGithub/>
                    </a>
                    <a className="social-icon" href={demo} target="_blank" rel="noreferrer">
                        <CgArrowTopRightO/>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default Project
