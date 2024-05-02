import './styles.css';
import { Route, Routes} from 'react-router-dom';
import React , {useEffect, useState} from "react";
import Home from './Home';
import NavBar from './NavBar';
import AdventureList from './AdventureList';
import About from './About';
import AdventureForm from './AdventureForm';


function App() {
  const [adventures, setAdventures] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/adventures")
    .then((res) => res.json())
    .then((adventureObj) => setAdventures(adventureObj))
    .catch((error) => console.log(error))
  }, [])

  function handleNewAdventure(newAdventure){
    setAdventures([...adventures, newAdventure])
  }

  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home adventures={adventures} />} />
        <Route path="/adventurelist" element={<AdventureList adventures={adventures} />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/adventureform" element={<AdventureForm handleNewAdventure={handleNewAdventure}  />} />
      </Routes>  
      </header>
    </div>
  );
}

export default App;
