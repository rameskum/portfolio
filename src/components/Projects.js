import React from "react"
import Title from "./Title"
import projects from "../constants/projects";
import Project from "./Project";
import {Link} from "react-router-dom";

const Projects = ({title, showLink, classList}) => {

    return (
        <section className={(classList || '') + " section projects"}>
            <Title title={title} sectionDesc="Latest applications I developed as fun projects and self learning."/>
            <div className="section-center">
                {projects
                    .filter(project => (project.present || !showLink))
                    .map((project, index) => {
                        return <Project key={project.id} index={index} {...project} />
                    })}
            </div>
            {showLink && (
                <Link to='/projects/' className="btn center-btn">
                    projects
                </Link>
            )}
        </section>
    )
}

export default Projects
