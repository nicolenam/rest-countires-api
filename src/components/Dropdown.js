import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () =>{
        setIsOpen(!isOpen);
    }

    return(
        <div className="dropdown">
            <div className="dropdownBtn" onClick={handleClick}>Filter by Region 
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {
                isOpen && (
                    <div className="dropdownContent" >
                        <div className="dropdownItem">
                            Africa
                        </div>
                        <div className="dropdownItem">
                            America
                        </div>
                        <div className="dropdownItem">
                            Asia
                        </div>
                        <div className="dropdownItem">
                            Europe
                        </div>
                        <div className="dropdownItem">
                            Oceana
                        </div>
                    </div>
                )
            }
     
        </div>
        
    )
}

export default Dropdown;