import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react'; 

const Details = () =>{

    const { country } = useParams();
    const [ isDetail, setIsDetail ] = useState(null);

    useEffect(()=>{

        const getDetailsData = async () =>{

            try{
                const response = await axios.get(`https:restcountries.com/v3.1/name/${country}`);
                const data = response.data[0];
                let currency;

                for (const key in data.currencies) {
                    currency = data.currencies[key].symbol
                }

                const details = {
                    name: data.name.common,
                    capital: data.capital[0],
                    population: data.population,
                    nativeName: data.name.nativeName,
                    url: data.flags.png,
                    region: data.region,
                    subregion: data.subregion,
                    currency: currency

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
        <div className="detailsContainer">
            {
                isDetail && (
                    <p>{isDetail.currency}</p>
                )
            }
        
        </div>
    )
}

export default Details;

{/* <img src={isDetail.flags.png}/>
<div className="detailsContent">
    <p>{isDetail.name}</p>
    <div className="columnContainer">
        <div className="firstColumn">
            <p>Native Name: <span>{isDetail.name.nativeName.ita.official}</span></p>
        </div>
        <div className="secondColumn"></div>
    </div>
    <div>
        Border Countries:
       <span className="borderCountry">some country</span>
    </div>
</div> */}