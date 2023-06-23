import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import Header from "./components/Header";
import Search from "./components/Search";
import Display from './components/Display';
import Details from './components/Details';

function App() {

  const [countriesData, setCountriesData] = useState(null);
  const [ isDarkMode, setisDarkMode ] = useState(false);
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
      <Header setisDarkMode={setisDarkMode} isDarkMode={isDarkMode}/>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className={`${isDarkMode && "darkMode"} wrapper filterContainer`}>
                  <Search setIsSelected={setIsSelected} isDarkMode={isDarkMode}/>
                  <Dropdown setIsSelected={setIsSelected} isDarkMode={isDarkMode}/>
                </div>
                <Display countriesData={countriesData} isSelected={isSelected} isDarkMode={isDarkMode}/>
              </>
            }
          />
          <Route path="/details/:country" element={<Details isDarkMode={isDarkMode}/>} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
