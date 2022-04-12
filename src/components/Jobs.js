import React from "react"
import Title from "./Title"
import {FaAngleDoubleRight} from "react-icons/fa"
import jobs from "../constants/jobs";
import {Link} from "react-router-dom";

const Jobs = () => {
    const [value, setValue] = React.useState(0)
    jobs.sort((a , b) => (b.id - a.id)); // sort by reverse chronological
    const {mainCompany, location, position, duration, bullets} = jobs[value]
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
                    <h4>{mainCompany + ' - ' + location}</h4>
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
            <Link to='/about' className='btn center-btn'>more info</Link>
        </section>
    )
}

export default Jobs
