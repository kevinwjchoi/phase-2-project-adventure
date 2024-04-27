
import React from 'react';
import AdventureCard from './AdventureCard';

function AdventureList({adventures}){

    const arrayOfAdventures = adventures.map((adventure) => {
        return <AdventureCard key={adventure.id} adventure={adventure}/>                    
    })

    return (
        <div>
            <h2>Take a look at all these beautiful places i've traveled to!</h2>
            <select>
                <option>All</option>
                <option>Beach</option>
                <option>Forest</option>
                <option>Hike</option>
            </select>
            {arrayOfAdventures}
        </div>
        
    )


}

export default AdventureList;