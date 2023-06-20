import axios from 'axios';
import { useState, useEffect } from 'react';

const Display = ({ countriesData, isSelected }) => {

    const [ displayData, setDisplayData ] = useState([]);

    useEffect(()=>{

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

        if(isSelected === "america" || isSelected === "africa" || isSelected === "asia" || isSelected === "europe"){
            getRegionData();
        }else{
            getCountryData();
        }
    },[isSelected]);

    return (
        <div className="gridContainer">
            {   isSelected ?
                (
                    displayData.map((country)=>{
                        return(
                            <div className="gridItem" key={country.altSpellings[0]}>
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
                        )
                    })
                ):
                countriesData &&
                (
                    countriesData.map((country)=>{
                        return(
                            <div className="gridItem" key={country.altSpellings[0]}>
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
                        )
                    })

                )
            }
        </div>
    );
  };
  
  export default Display;
  