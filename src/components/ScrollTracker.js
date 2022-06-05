import {useEffect, useState} from 'react';

const ScrollTracker = () => {

    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = () => {
        const winScroll = document.scrollingElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div className="scroll-tracker-container">
            <div className="scroll-tracker-style" style={{width: `${scrollTop}%`}}></div>
        </div>
    );
}

export default ScrollTracker;