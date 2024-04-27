
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
                <option>Filter by type</option>
                <option>Beach</option>
                <option>Forest</option>
                <option>Hike</option>
                <option>Other</option>
            </select>
            <select>
                <option>Filter by location</option>
                <option>Orgeon</option>
                <option>Costa Rica</option>
                <option>Hawaii</option>
                <option>Japan</option>
                <option>Other</option>
            </select>
            {arrayOfAdventures}
        </div>
        
    )


}

export default AdventureList;