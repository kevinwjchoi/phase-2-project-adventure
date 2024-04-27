
import React from "react";

function AdventureCard({adventure}){
    const {name, location, image, type} = adventure;
    

    return(
        <div>
            <h2>{name} in {location}</h2>
            <img src={image}/>
            
        </div>
        
    )


}

export default AdventureCard; 