import React from "react"

function About(){

    return(
        <div>
        <h2>Welcome to the About page! </h2>
        <p>This is my Phase 2 project that showcases different vacation spots.</p>
        <p>Adventure Journal is Single Page Application (SPA) for keeping track of your adventures.
        Users can add new adventures with details like name, location, image URL, and type. 
        This application uses a RESTful API to interact with a local db.json file, 
        which contains an array of adventure objects.</p>


        <p>
            Other functions I plan on adding later:
            <li>
                Delete button to remove adventure spots
            </li>
            <li>
                Filter by location
            </li>
            <li>
                Filter by type
            </li>
            <li>
                Update image URL
            </li>
        </p>

    </div>
    )

}

export default About;