import React, {useState} from 'react';

function RandomWinnerForm() {
  const [contestNameValue, setContestNameValue] = useState("");
  const [contestantsList, setContestantsList] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [winningNum, setWinningNum] = useState(0)

  //Random Number Generator using # of contestants as max.
  let numContest = contestantsList.length;
  function getRandomInt(numContest) {
    return Math.floor(Math.random() * (numContest));
  }
  
  //Checking if char is less than 15, set it as contestNameValue state 
  function handleInputName(event){
    if(event.target.value.length <= 15)
    setContestNameValue(event.target.value)
  }
  //Event that sets the new obj into contestantsList array state. 
  function handleSubmitName(event){
    event.preventDefault();

    const newContestant = {
      name: contestNameValue,
    }
    if(contestNameValue.length > 1)
    setContestantsList([...contestantsList, newContestant]);
    setContestNameValue("");
  }

  //display contestants 
  const displayContestants = contestantsList.map((contestant) => {
    return <ul key={contestant.name}>{contestant.name}</ul>
  })

  //defined to get winning Num for contestant
  function handleSelectWinner() {
    console.log("selecting winner...")
    setIsClicked(true);
    const newWinningNum = getRandomInt(numContest);
    setWinningNum(newWinningNum);
  }
  
  


    return (
      <div>
        <h1>Put Form here!</h1>
        <form onSubmit={handleSubmitName}>
          <input type="text" placeholder='enter contestant name'  value={contestNameValue} onChange={handleInputName}/>
          <button>Submit</button>
        </form>
        {contestantsList.length <= 1 && <p>Please add more contestants.</p>}
        <h3>{displayContestants}</h3>
        <button onClick={handleSelectWinner}>Select Winner</button>
        <h3>Put Winner here</h3>
        <div>{isClicked ? contestantsList[winningNum].name.toUpperCase() : null}</div>
        
      </div>
    );
  }
  
  export default RandomWinnerForm


  
 
  // The winner's name should be in ALL CAPS when rendered to the page
  // If there is one name or less, render a message: Please add more contestants
  // If the User clicks the button again, the Winner should update 