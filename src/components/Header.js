import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () =>{

    const [ isDarkMode, setisDarkMode ] = useState(true);

    const handleClick = () =>{
        setisDarkMode(!isDarkMode);
    }

    return(
        <header className={`${isDarkMode ? "darkMode" : "lightMode"} wrapper`}>
            <h1>Where in the world?</h1>
            <div className="mode" onClick={handleClick}>
            {
                isDarkMode ?
                <>
                    <FontAwesomeIcon icon={faSun} />
                    <p>Dark Mode</p>  
                </>
                :
                <>
                    <FontAwesomeIcon icon={faMoon} />
                    <p>Light Mode</p>
                </>
            }
            </div>
        </header>
    )
}

export default Header;