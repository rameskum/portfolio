import React from "react"

const Title = ({title, sectionDesc = null, className}) => {
    return (
        <div className={className || 'section-title'}>
            <h2>{title || "default title"}</h2>
            <div className="underline"/>
            {
                sectionDesc && <p>{sectionDesc}</p>
            }
        </div>
    )
}

export default Title
