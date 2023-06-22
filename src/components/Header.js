import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () =>{

    const [ isDarkMode, setisDarkMode ] = useState(false);

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
                    <FontAwesomeIcon icon={faMoon} />
                    <p>Dark Mode</p>  
                </>
                :
                <>
                    <FontAwesomeIcon icon={faSun} />
                    <p>Light Mode</p>
                </>
            }
            </div>
        </header>
    )
}

export default Header;