# Adventure Journal App

Adventure Journal is Single Page Application (SPA) for keeping track of your adventures. Users can add new adventures with details like name, location, image URL, and type. This application uses a RESTful API to interact with a local db.json file, which contains an array of adventure objects.

## Components

- App
- NavBar
- Home
- AdventureList
- AdventureCard

## Installation

1. Clone the repository: `git clone git@github.com:kevinwjchoi/phase-2-project-adventure-journal.git`
2. Navigate to the project directory: `cd adventure-journal`
3. Install dependencies: `npm install`

## Usage
To start the json server, run the following command: 
`json-server --watch db.json`
To start the application, run the following command:
`npm start`
This will start the development server and open the application in your default browser. You will be able to navigate between pages using React Router. Add new adventures with details like name, location, image URL, and type. Displays a list of adventures with their respective details. Use React Router for seamless page navigation. 

Contributing Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.