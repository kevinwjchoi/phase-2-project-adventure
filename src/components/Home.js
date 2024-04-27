import { useOutletContext } from 'react-router-dom';
import React, {useState} from 'react';

function Home({adventures, handleNewAdventure}) {

    //all the state/setters for input values 
    const [inputName, setInputName] = useState("")
    const [inputImage, setInputImage] = useState("")
    const [inputLocation, setInputLocation] = useState("")
    const [inputType, setInputType] = useState("")

    const outlet = useOutletContext();

    //mapping out every adventure name
    const nameOfAdventures = adventures.map((adventure) => {
       return <h3 key={adventure.id}>{adventure.name}</h3>
    })

   //handles all the input values  
   function handleNameChange(e){
    setInputName(e.target.value)
}    




    return (
      <div>
        <header>
            <h1>Home Page of the Adventure Journal</h1>
            <p>You can always click 'Home' to return to this home page.</p>
            <p>Click on 'Adventures' to see a whole list of places with images.</p>
            <p>Click on 'About' to learn more about this SPA!</p>
        
           
            
        </header>
        <div>
            {outlet}
            <h2>Here are a list of Adventure spots!</h2>
            <ul>{nameOfAdventures}</ul>

            <form >
                <h2>Add a new adventure spot!</h2>
                <input type="text" value={inputName} onChange={handleNameChange} placeholder='Enter new adventure name'></input>
                <input type="text" value={inputImage} onChange={handleImageChange}placeholder='Enter image url'></input>
                <input type="text" value={inputLocation} onChange={handleLocationChange} placeholder='Enter image location'></input>
                <input type="text" value={inputType} onChange={handleTypeChange} placeholder='Enter image type'></input>
                <button>Submit</button>
            </form>
        </div>   
      </div>
    );
  }
  export default Home;