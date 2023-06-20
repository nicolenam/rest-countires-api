import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({setIsSelected}) =>{

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
        <div className="dropdown">
            <div className="dropdownBtn" onClick={handleClick}>{selected}
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {
                isOpen && (
                    <div className="dropdownContent" onClick={handleSelected}>
                        <div className="dropdownItem" id="Africa">
                            Africa
                        </div>
                        <div className="dropdownItem" id="America">
                            America
                        </div>
                        <div className="dropdownItem" id="Asia">
                            Asia
                        </div>
                        <div className="dropdownItem" id="Europe">
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

