import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({setIsSelected, isDarkMode}) =>{

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Filter by Region");

    const handleClick = () =>{
        setIsOpen(!isOpen);
    }

    const handleSelected = (e) =>{

        const selectedId = e.target.id;
        setSelected(selectedId);
        setIsSelected(selectedId);
        setIsOpen(false);
    }

    return(
        <div className={` ${isDarkMode && "headerDarkMode"} dropdown`}>
            <div className="dropdownBtn" onClick={handleClick}>{selected}
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {
                isOpen && (
                    <div className={`${isDarkMode ? "dropdownBack" : "dropdownContent"}`} onClick={handleSelected}>
                    
                        <div className={` ${isDarkMode ? "darkDropDown" : "dropdownItem" }`} id="Africa">
                            Africa
                        </div>
                        <div className={` ${isDarkMode ? "darkDropDown" : "dropdownItem" }`} id="America">
                            America
                        </div>
                        <div className={` ${isDarkMode ? "darkDropDown" : "dropdownItem" }`} id="Asia">
                            Asia
                        </div>
                        <div className={` ${isDarkMode ? "darkDropDown" : "dropdownItem" }`} id="Europe">
                            Europe
                        </div>

                        {/* <div className="dropdownItem" id="oceana">
                            Oceana
                        </div> */}
                    </div>
                )
            }
     
        </div>
        
    )
}

export default Dropdown;

