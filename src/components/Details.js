import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';

const Details = ({isDarkMode}) =>{

    const { country } = useParams();
    const [ isDetail, setIsDetail ] = useState(null);

    useEffect(()=>{

        const getDetailsData = async () =>{

            try{
                const response = await axios.get(`https:restcountries.com/v3.1/name/${country}`);
                const data = response.data[0];
                console.log(data)
                let currency;
                let nativeName;
                let languages = [];

                for (const key in data.currencies) {
                    currency = data.currencies[key].symbol
                }

                for( const key in data.name.nativeName){
                    nativeName = data.name.nativeName[key].common
                    console.log(nativeName)
                }

                for( const key in data.languages){
                    languages.push(data.languages[key]);
                }

                const details = {
                    name: data.name.common,
                    nativeName: nativeName,
                    capital: data.capital[0],
                    population: data.population,
                    url: data.flags.png,
                    region: data.region,
                    subregion: data.subregion,
                    currency: currency,
                    borders: data.borders,
                    languages: languages,
                    tld: data.tld,
                    alt: data.altSpellings[1]
                  };

                  setIsDetail(details);
            }
            catch (error) {
                console.log(error)
            }
        }
        getDetailsData();
    },[country])

    return(
        <div className={` ${isDarkMode && "darkMode"}`}>
            <Link to="/">
                <div className="backBtnContainer wrapper">
                    <p className="backBtn">&larr; back</p>
                </div>
            </Link>
            <div className="detailsContainer wrapper">
                {
                    isDetail && (
                    <>
                        <img src={isDetail.url} alt={isDetail.alt}/>
                        <div className="detailsContent">
                            <p className="detailName">{isDetail.name}</p>
                            <div className="columnContainer">
                                <div className="firstColumn">
                                    <p><span>Native Name:</span> {isDetail.nativeName}</p>
                                    <p><span>Population:</span> {isDetail.population.toLocaleString()}</p>
                                    <p><span>Region:</span> {isDetail.region}</p>
                                    <p><span>Sub Region:</span> {isDetail.subregion}</p>
                                    <p><span>Capital:</span> {isDetail.capital}</p>
                                </div>
                                <div className="secondColumn">
                                    <p><span>Top Level Domain:</span> {isDetail.tld}</p>
                                    <p><span>Currencies:</span> {isDetail.currency}</p>
                                    <p><span>Languages:</span> {isDetail.languages.join(", ")}</p>
                                </div>
                            </div>
                            {
                                <p className="borderCountries"><span>Border Countries: </span>  
                                {
                                    isDetail.borders ? 
                                        
                                        isDetail.borders.slice(0,5).map((border)=>{
                                            return(
                                                <span key={border} className="detailsBorder">{border}</span>
                                            )
                                        })
                                    :
                                    <span>N/A</span>
                                }
                                </p>
                            }
                        </div> 
                    </>
                    )
                }
            </div>
        </div>

    )
}

export default Details;
