import React, {useState} from 'react';

function RandomWinnerForm() {
  const [contestNameValue, setContestNameValue] = useState("");
  const [contestantsList, setContestantsList] = useState([]);
  
  function handleInputName(event){
    if(event.target.value.length <= 15)
    setContestNameValue(event.target.value)
  }
  function handleSubmitName(event){
    event.preventDefault();
    
    const newContestant = {
      name: contestNameValue,
    }
    if(contestNameValue.length > 1)
    setContestantsList([...contestantsList, newContestant]);

    setContestNameValue("");

  }

  const displayContestants = contestantsList.map((contestant) => {
    return <ul key={contestant.name}>{contestant.name}</ul>
  })

  let numContest = contestantsList.length;
  function getRandomInt(numContest) {
    return Math.floor(Math.random() * (numContest));
  }


  function handleSelectWinner(){
    console.log("selecting winner...")
    getRandomInt(numContest);
    
    const winner = contestantsList.filter((contestantsList) => {
      return (contestantsList === contestantsList[getRandomInt(numContest)])
    })
    console.log(winner);


  }


    return (
      <div>
        <h1>Put Form here!</h1>
        <form onSubmit={handleSubmitName}>
          <input type="text" placeholder='enter contestant name'  value={contestNameValue} onChange={handleInputName}/>
          <button>Submit</button>
        </form>
        <h3>{displayContestants}</h3>
        <button onClick={handleSelectWinner}>Select Winner</button>
        <h3>Put Winner here</h3>
        
      </div>
    );
  }
  
  export default RandomWinnerForm


  // Create a button with the text "Select Winner"
  // When a User clicks that button, randomly select one of the names as the winner and render the winner to the page
  // The winner's name should be in ALL CAPS when rendered to the page
  // If there is one name or less, render a message: Please add more contestants
  // If the User clicks the button again, the Winner should update 