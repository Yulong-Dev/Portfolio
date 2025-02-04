import React, { useState } from 'react';
import { IoMdMoon } from "react-icons/io";


const Toggle = () => {
    const [theme, setTheme] = useState(true)
    const toggleTheme =() => {
        setTheme(!theme);
        document.body.classList.toggle("darkmode")
    }
  return (
    <div>
        <div className={theme? 'switch-mode':'switch-mode dark'} onClick={()=>toggleTheme()}>
             <IoMdMoon className="yt"/>
        </div>
    </div>
  )
}

export default Toggle
