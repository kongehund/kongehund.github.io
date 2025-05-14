import React from 'react';
// import styles from './header.module.css';
import './header.scss';
import {Link} from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

interface HeaderProps {
    sections?: string[];
}

const Header: React.FC<HeaderProps> = ({ sections }) => {
    const handleHighlight = (sectionId: string) => {
        const el = document.getElementById(sectionId);
        if (!el) return;
       
         // Get the current background color
        const originalBg = getComputedStyle(el).backgroundColor;

        // Create a new style element with a unique animation
        const animationName = `flash-${Date.now()}`;
        const styleEl = document.createElement('style');
        styleEl.innerHTML = `
        @keyframes ${animationName} {
            0% { background-color:rgb(133, 157, 173); }
            100% { background-color: ${originalBg}; }
        }
        `;
        document.head.appendChild(styleEl);

        // Apply animation inline
        el.style.animation = `${animationName} 1s ease-in-out`;

        // Clean up after animation completes
        el.addEventListener('animationend', () => {
            el.style.animation = '';
            document.head.removeChild(styleEl);
    }, { once: true });
        
    };
    
    return (
        <header className="header">
            <div className="headerLogo">
                <RouterLink to="/">
                    kongehund
                </RouterLink>
            </div>
            <nav>
                {sections && sections.map((section) => (
                    <div className="sectionLinkContainer">
                        <Link
                    key={section}
                    to={section.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="sectionLink"
                    onClick={() => handleHighlight(section.toLowerCase())}
                        >
                            {section}
                        </Link>
                    </div>
                        ))}
            </nav>
        </header>
    )
}

export default Header;