import React, { useContext } from 'react';
import './toggle.css';
import Sun from "../../images/sun.png";
import Moon from "../../images/moon.png";
import { ThemeContext } from '../context';

const Toggle = () => {
    const theme = useContext(ThemeContext);
    const handleClick =()=>{
        theme.dispatch({type: "TOGGLE"})
    }
    return (
        <>
            <div className="t">
                 <img src={Sun} alt="" className="tIcon" />
                 <img src={Moon} alt="" className="tIcon" />
                 <div className="tButton" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
            </div>
        </>
    )
}

export default Toggle
