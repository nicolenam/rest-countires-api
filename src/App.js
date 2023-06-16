import './App.css';
import Dropdown from './components/Dropdown';
import Header from "./components/Header";
import Search from "./components/Search";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="filterContainer">
        <Search />
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
