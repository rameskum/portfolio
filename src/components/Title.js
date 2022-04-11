import React from "react"

const Title = ({title, className}) => {
    return (
        <div className={className || 'section-title'}>
            <h2>{title || "default title"}</h2>
            <div className="underline"/>
        </div>
    )
}

export default Title
