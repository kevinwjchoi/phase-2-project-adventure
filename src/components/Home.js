import { useOutletContext } from 'react-router-dom';

function Home({adventures}) {
    const outlet = useOutletContext();
    const nameOfAdventures = adventures.map((adventure) => {
       return <h3 key={adventure.id}>{adventure.name}</h3>
    })
   


    return (
      <div>
        <header>
            <h1>Home Page of the Adventure Journal</h1>
            <p>Adventure Journal is Single Page Application (SPA) for keeping track of your adventures. Users can add new adventures with details like name, location, image URL, and type. This application uses a RESTful API to interact with a local db.json file, which contains an array of adventure objects.</p>
        </header>
            {outlet}
            <h2>Here are a list of Adventure spots!</h2>
            {nameOfAdventures}
      </div>
    );
  }
  export default Home;