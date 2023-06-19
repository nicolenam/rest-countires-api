const Display = ({ countriesData }) => {

    return (
        <div className="gridContainer">
            {
                countriesData &&
                (
                    countriesData.map((country)=>{
                        return(
                            <div className="gridItem" key={country.altSpellings[0]}>
                                <div>
                                    <img class="gridImg" src={country.flags.png} alt={country.flags.alt}/>
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
  