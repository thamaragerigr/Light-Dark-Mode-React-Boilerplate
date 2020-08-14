import React, { useContext } from 'react'
import { ThemeContext } from './../themeContext'

function Button() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    
    return (
        <button
        onClick={toggleTheme}
        className={`${theme === 'light' ? 'dark' : 'light'}-theme`}
        >
            {theme === 'light' ? '🌜 Dark' : '🌞 Light'} Mode
        </button>
    )
}

export default Button