import { useParams } from 'react-router-dom';

const Details = () =>{

    const { country } = useParams();

    return(
        <div>Details about a {country}</div>
    )
}

export default Details;