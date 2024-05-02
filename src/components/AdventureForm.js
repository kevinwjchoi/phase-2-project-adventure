import React , {useState} from "react";

function AdventureForm({}){

        //all the state/setters for input values 
        const [inputName, setInputName] = useState("")
        const [inputImage, setInputImage] = useState("")
        const [inputLocation, setInputLocation] = useState("")
        const [inputType, setInputType] = useState("")


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