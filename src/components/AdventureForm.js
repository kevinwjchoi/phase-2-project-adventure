import React , {useState} from "react";

function AdventureForm(){


    return (

        <form onSubmit={handleSubmit}>
        <h2>Add a new adventure spot!</h2>
        <input type="text" value={inputName} onChange={handleNameChange} placeholder='Enter new adventure name'></input>
        <input type="text" value={inputImage} onChange={handleImageChange}placeholder='Enter image url'></input>
        <input type="text" value={inputLocation} onChange={handleLocationChange} placeholder='Enter image location'></input>
        <input type="text" value={inputType} onChange={handleTypeChange} placeholder='Enter image type'></input>
        <button>Submit</button>
    </form>


    )
}


export default AdventureForm; 