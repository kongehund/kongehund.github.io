import React from 'react';
import './PillButton.scss';

interface PillButtonProps {
    onClick: () => void;
    children: React.ReactNode; // Accepts any JSX content
}

const PillButton: React.FC<PillButtonProps> = ({ onClick, children }) => {
    return (
        <button className="pillButton" onClick={onClick} style={{ padding: '10px 20px' }}>
            {children}
        </button>
    );
};

export default PillButton;
