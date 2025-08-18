import { useState } from 'react';
import '../styles/main.css';
import '../styles/dark.css';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
        document.body.classList.toggle('dark-theme', !isDarkMode);
    };

    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme}
                aria-label="Toggle dark mode"
            />
            <span className="slider round"></span>
        </label>
    );
};

export default ThemeToggle;