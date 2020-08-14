import React, { useContext } from "react"
import { ThemeContext } from './../themeContext'
import Button from './Button'

function Header() {
    const { theme } = useContext(ThemeContext)

    return (
        <header className={`${theme}-theme`}>
            <Button/>
            <h2>{theme === 'light' ? 'Light' : 'Dark'} Mode</h2>
        </header>
    )
}

export default Header