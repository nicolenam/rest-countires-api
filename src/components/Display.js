const Display = ({ countriesData }) => {

    return (
        <div>
            {
                countriesData &&
                (
                    countriesData.map((country)=>{
                        return(
                            <div key={country.altSpellings[0]}>
                                <div>
                                    <img src={country.flags.png} alt={country.flags.alt}/>
                                </div>
                                <div>
                                    <h2>{country.name.official}</h2>
                                    <p>Population: {country.population.toLocaleString()}</p>
                                    <p>Region: {country.region}</p>
                                    <p>Capital: {country.capital}</p>
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
  