import React, {useState} from 'react';

function Home({adventures, handleNewAdventure}) {

    //all the state/setters for input values 
    const [inputName, setInputName] = useState("")
    const [inputImage, setInputImage] = useState("")
    const [inputLocation, setInputLocation] = useState("")
    const [inputType, setInputType] = useState("")



    //mapping out every adventure name
    const nameOfAdventures = adventures.map((adventure) => {
       return <h3 key={adventure.id}>{adventure.name}</h3>
    })

   //handles all the input values  
   function handleNameChange(e){
    setInputName(e.target.value)
    }
    function handleImageChange(e){
        setInputImage(e.target.value)
    }
    function handleLocationChange(e){
        setInputLocation(e.target.value)
    }
    function handleTypeChange(e){
        setInputType(e.target.value)
    }

    //Handles what happens once submit button is clicked 
    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:3000/adventures", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: inputName,
                image: inputImage,
                location: inputLocation,
                type: inputType
            }),
        })
        .then((res) => res.json())
        .then((newAdventure) => handleNewAdventure(newAdventure));
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
            <h2>Here are a list of Adventure spots!</h2>
            <ul>{nameOfAdventures}</ul>


        </div>   
      </div>
    );
  }
  export default Home;