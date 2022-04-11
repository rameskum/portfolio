const links = [
    {
        id: "home-page",
        text: "home",
        url: "/",
    },
    {
        id: "about-page",
        text: "about",
        url: "/about/",
    },
    {
        id: "project-page",
        text: "projects",
        url: "/projects/",
    },
    {
        id: "contact-page",
        text: "contact",
        url: "/contact/",
    },
]

export const aboutLink = () => {
    return links.filter(link => link.id === 'about-page')
}

export const projectLink = () => {
    return links.filter(link => link.id === 'project-page')
}

export default links
