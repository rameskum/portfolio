import React from "react"
import Title from "./Title"
import {FaAngleDoubleRight} from "react-icons/fa"
import jobs from "../constants/jobs";
import {aboutLink} from "../constants/links";

const Jobs = () => {
    const [value, setValue] = React.useState(0)
    const {company, position, duration, bullets} = jobs[value]
    return (
        <section className="section jobs">
            <Title title="experience"/>
            <div className="jobs-center">
                <div className="btn-container">
                    {jobs.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={index === value ? "job-btn active-btn" : "job-btn"}
                                onClick={() => setValue(index)}>
                                {item.company}
                            </button>
                        )
                    })}
                </div>
                <article className="job-info">
                    <h3>{position}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{duration}</p>
                    {bullets.map((item, idx) => {
                        return (
                            <div key={'bull' + idx} className="job-desc">
                                <FaAngleDoubleRight className="job-icon"/>
                                <p>{item}</p>
                            </div>
                        )
                    })}
                </article>
            </div>
            <a href={aboutLink()?.url} className='btn center-btn'>more info</a>
        </section>
    )
}

export default Jobs
