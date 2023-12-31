import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Display = ({ countriesData, isSelected, isDarkMode }) => {

    const [ displayData, setDisplayData ] = useState([]);

    useEffect(()=>{

        console.log(isSelected);
        const getRegionData = async () =>{
    
            try{
                const response = await axios.get(`https://restcountries.com/v3.1/region/${isSelected}`);
                setDisplayData(response.data);
            }
            catch (error) {
                console.log(error)
            }
        }

        const getCountryData = async () =>{

            try{
                const response = await axios(`https://restcountries.com/v3.1/name/${isSelected}`);
                setDisplayData(response.data);
            }
            catch (error) {
                console.log(error)
            }
        }

        if(isSelected === "America" || isSelected === "Africa" || isSelected === "Asia" || isSelected === "Europe"){
            getRegionData();
        }else if(isSelected){
            getCountryData();
        }

    },[isSelected]);

    return (
        <div className={`${isDarkMode && "darkMode"} wrapper gridContainer`}>
        
            {   isSelected ?
                (
                    displayData.map((country)=>{
                        return(
                            <Link to={`details/${country.name.official}`} key={country.altSpellings[0]}>
                                <div className="gridItem">
                                    <div>
                                        <img className="gridImg" src={country.flags.png} alt={country.flags.alt}/>
                                    </div>
                                    <div className="gridContent">
                                        <h2>{country.name.official}</h2>
                                        <p><span>Population:</span> {country.population.toLocaleString()}</p>
                                        <p><span>Region: </span>{country.region}</p>
                                        <p><span>Capital: </span>{country.capital}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                ):
                countriesData &&
                (
                    countriesData.map((country)=>{
                        return(
                            <Link to={`details/${country.name.official}`} key={country.altSpellings[0]}>

                                <div className="gridItem">
                                    <div>
                                        <img className="gridImg" src={country.flags.png} alt={country.flags.alt}/>
                                    </div>
                                    <div className="gridContent">
                                        <h2>{country.name.official}</h2>
                                        <p><span>Population:</span> {country.population.toLocaleString()}</p>
                                        <p><span>Region: </span>{country.region}</p>
                                        <p><span>Capital: </span>{country.capital}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })

                )
            }
        </div>
    );
  };
  
  export default Display;
  