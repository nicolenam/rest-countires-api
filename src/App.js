import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import Dropdown from './components/Dropdown';
import Header from "./components/Header";
import Search from "./components/Search";
import Display from './components/Display';

function App() {

  const [countriesData, setCountriesData] = useState(null);
  const [isSelected, setIsSelected] = useState("");

  useEffect(()=>{

    const getCountriesData = async () =>{

      try {
        const response = await axios.get(`https://restcountries.com/v3.1/all`)
        console.log(response.data);
        setCountriesData(response.data);
      }
      catch (error) {
        console.error(error);
      }
    }  
     
    getCountriesData();  
  },[])

  return (
    <div className="App">
      <Header />
      <div className="filterContainer">
        <Search setIsSelected={setIsSelected}/>
        <Dropdown setIsSelected={setIsSelected}/>
      </div>
        <Display countriesData={countriesData} isSelected={isSelected}/>
    </div>
  );
}

export default App;
