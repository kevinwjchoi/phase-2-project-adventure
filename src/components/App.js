import './styles.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import React , {useEffect, useState} from "react";
import Home from './Home';
import NavBar from './NavBar';
import AdventureList from './AdventureList';
import About from './About';


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
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home adventures={adventures} handleNewAdventure={handleNewAdventure} />} />
        <Route path="/adventurelist" element={<AdventureList adventures={adventures} />} />
      </Routes>  
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
