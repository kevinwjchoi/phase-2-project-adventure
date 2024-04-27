import { useOutletContext } from 'react-router-dom';
import React, {useState} from 'react';
import AdventureCard from './AdventureCard';

function AdventureList({adventures}){

    const arrayOfAdventures = adventures.map((adventure) => {
        return <AdventureCard key={adventure.id} adventure={adventure}/>                    
    })

    return (
        <div>
            <h2>Take a look at all these beautiful places i've traveled to!</h2>
            {arrayOfAdventures}
        </div>
        
    )


}

export default AdventureList;