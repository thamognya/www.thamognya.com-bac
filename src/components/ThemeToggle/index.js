import React, {useState} from 'react'
import { FaRegMoon, FaRegSun } from "react-icons/fa"
import "./index.scss"

const ThemeToggle = () => {
    const icon_size = 30;
    const [icon, setIcon] = useState('FaRegSun')
    //const [icon] = useState('FaRegSun')
    const changeTheme = (a) => {
        const item = localStorage.getItem("theme")

        let theme;
        if (item === "dark") {
            theme = "";
            localStorage.setItem('theme', "")
        } else {
            theme = "dark"
            localStorage.setItem('theme', 'dark')
        }
        localStorage.setItem('theme', theme);
        document.body.className = localStorage.getItem("theme");
        setIcon(a);

        /*const item2 = localStorage.getItem("iconName")
        let iconName = a;
        if (item2 === "FaRegSun") {
            iconName = "FaRegMoon"
            localStorage.setItem('iconName', "FaRegMoon")
        } else {
            iconName = "FaRegSun"
            localStorage.setItem('iconName', "FaRegSun")
        }

        localStorage.setItem('iconName', iconName);
        document.body.className = localStorage.getItem("iconName");*/
    }
    const themeIsLight = (icon === 'FaRegMoon')
    const Icon = themeIsLight ? <FaRegSun size={icon_size} onClick={() => changeTheme('FaRegSun') }/> : <FaRegMoon size={icon_size} onClick={() => changeTheme('FaRegMoon') }/>
    return (
        <div className="icon">
            {Icon}
        </div>
    )
}

export default ThemeToggle;
