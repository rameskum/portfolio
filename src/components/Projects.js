import React from "react"
import Title from "./Title"
import links from "../constants/links";
import projects from "../constants/projects";
import Project from "./Project";

const Projects = ({title, showLink}) => {

    const projectLink = () => {
        return links.find(link => link.id === 'project-page')
    }

    return (
        <section className="section projects">
            <Title title={title} sectionDesc="Latest applications I developed as fun projects and self learning."/>
            <div className="section-center projects-center">
                {projects
                    .filter(project => project.present)
                    .map((project, index) => {
                    return <Project key={project.id} index={index} {...project} />
                })}
            </div>
            {showLink && (
                <a href={projectLink()?.url} className="btn center-btn">
                    projects
                </a>
            )}
        </section>
    )
}

export default Projects
