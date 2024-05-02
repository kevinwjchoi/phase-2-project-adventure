import React , {useState} from "react";

function AdventureForm({handleNewAdventure}){

    //all the state/setters for input values 
    const [inputName, setInputName] = useState("")
    const [inputImage, setInputImage] = useState("")
    const [inputLocation, setInputLocation] = useState("")
    const [inputType, setInputType] = useState("")


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

        setInputImage("");
        setInputImage("");
        setInputLocation("");
        setInputType("");
    }

    return (
    <>
        <header>
        <h1>Add a new adventure spot!</h1>
        </header>
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={inputName} onChange={handleNameChange} placeholder='Enter new adventure name'></input>
        <input type="text" value={inputImage} onChange={handleImageChange}placeholder='Enter image url'></input>
        <input type="text" value={inputLocation} onChange={handleLocationChange} placeholder='Enter image location'></input>
        <input type="text" value={inputType} onChange={handleTypeChange} placeholder='Enter image type'></input>
        <button>Submit</button>
        </form>
    </div>
    </>    
    

    )
}


export default AdventureForm; 