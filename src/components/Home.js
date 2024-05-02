import React from 'react';

function Home({adventures}) {


    //mapping out every adventure name
    const nameOfAdventures = adventures.map((adventure) => {
       return <h3 key={adventure.id}>{adventure.name}</h3>
    })







    return (
      <div>
        <header>
            <h1>Home Page of the Adventure Journal</h1>
            <p>You can always click 'Home' to return to this home page.</p>
            <p>Click on 'Adventures' to see a whole list of places with images.</p>
            <p>Click on 'About' to learn more about this SPA!</p>
            <p>Click Add an Adventure to add more spots!</p>
            
        </header>
        <div>
            <h2>Here are a list of Adventure spots!</h2>
            <ul>{nameOfAdventures}</ul>


        </div>   
      </div>
    );
  }
  export default Home;