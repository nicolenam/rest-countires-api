import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = ({setIsSelected}) =>{

    const handleChange = (e) =>{

        setIsSelected(e.target.value);
    }

    return(
        <main>
            <form>
                <label className="sr-only">Search for a country</label>
                <div className="searchContainer">
                    <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
                    <input className="search" placeholder="Search for a country" onChange={handleChange}></input>
                </div>
            </form>
        </main>
    )
}

export default Search;