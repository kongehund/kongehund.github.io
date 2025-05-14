import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Projects(){
    const projectsGridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = projectsGridRef.current;
        if (!grid) return;
        
        const nativeWheelHandler = (event: WheelEvent) => {
            if (projectsGridRef.current) {
                event.preventDefault();
                projectsGridRef.current.scrollLeft += event.deltaY;
            }
        };

        grid.addEventListener('wheel', nativeWheelHandler, { passive: false });

        return () => {
            grid.removeEventListener('wheel', nativeWheelHandler);
        };
    });

    return (
        <div className="projectsContainer">
            <h2>Projects</h2>
            <p>Here are some of my projects. 
                <br/>Click on the images to learn more about them!</p>
            <div className="projectsGrid"
        ref={projectsGridRef}>
                <div className="projectCard">
                    <Link to="/tempora">
                        <img src="/tempora-logo.png" alt="Tempora Logo" />
                    </Link>
                    <h2>Tempora</h2>
                    <p>Quick and Efficient Music Timing</p>
                </div>
                <div className="projectCard projectCard--empty">
                    <h2>Other projects will appear here</h2>
                </div>
            </div>
        </div>
    );
}