import axios from 'axios';
import { useState, useEffect } from 'react';

const Display = ({ countriesData,region }) => {

    const [ regionData, setRegionData ] = useState([]);

    useEffect(()=>{
        const getRegionData = async () =>{
    
            try{
                const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
                setRegionData(response.data);
            }
            catch (error) {
                console.log(error)
            }
        }
        if(region){
            getRegionData();
        }
    },[region])

    return (
        <div className="gridContainer">
            {   region ?
                (
                    regionData.map((country)=>{
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
  