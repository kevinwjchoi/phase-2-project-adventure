import React from "react";


function AdventureCard({adventure}){
    const {name, location, image} = adventure;
    

    return(
        <>
            <div className="card-container">
                <h3 className="adventure-name">{name} in {location}</h3>
                <div className="image-container">
                    <img src={image} alt={name} className="custom-image" />
                </div>
            </div>
            <div>
                <button>Favorite this spot</button>
                <spacer> </spacer>
                <button>Delete this spot</button>
            </div>
        </>

                

                
    )


}

export default AdventureCard; 
