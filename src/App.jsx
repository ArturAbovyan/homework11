import './App.css';
import { useState } from "react";
import {handleCheck, resultat} from './array';
let currentTargetSet
function App() {
const [choice, setChoice] = useState('')
const handleChoose = (e)=>{
  setChoice(e.target.innerText);
}
const handleChoiceSet = (e)=>{
  e.target.textContent = `${choice}`;
  currentTargetSet = e.currentTarget.textContent ;
  if(choice=="X"){
    setChoice("O")
  }
  else{
    setChoice("X")
}
let num = e.currentTarget.value
  handleCheck(num,choice);
}
if(choice && !resultat()){
  switch(choice){
    case 'X':
      return (
        <div className="App">
          <button className='firstSection' value='0'  onClick={handleChoiceSet}></button>
          <button className='firstSection' value='1'  onClick={handleChoiceSet}></button>
          <button className='firstSection' value='2'  onClick={handleChoiceSet}></button>
          <button className='midSection' value='3'  onClick={handleChoiceSet}></button>
          <button className='midSection' value='4'  onClick={handleChoiceSet}></button>
          <button className='midSection' value='5'  onClick={handleChoiceSet}></button>
          <button className='lastSection' value='6'  onClick={handleChoiceSet}></button>
          <button className='lastSection' value='7'  onClick={handleChoiceSet}></button>
          <button className='lastSection' value='8'  onClick={handleChoiceSet}></button>
        </div>
  );
     case 'O':
       return(
        <div className="App">
          <button className='firstSection' value='0'  onClick={handleChoiceSet}></button>
          <button className='firstSection' value='1'  onClick={handleChoiceSet}></button>
          <button className='firstSection' value='2'  onClick={handleChoiceSet}></button>
          <button className='midSection' value='3'  onClick={handleChoiceSet}></button>
          <button className='midSection' value='4'  onClick={handleChoiceSet}></button>
          <button className='midSection' value='5'  onClick={handleChoiceSet}></button>
          <button className='lastSection' value='6'  onClick={handleChoiceSet}></button>
          <button className='lastSection' value='7'  onClick={handleChoiceSet}></button>
          <button className='lastSection' value='8'  onClick={handleChoiceSet}></button>
        </div>
       )
  }
}
else if (resultat() && resultat() != "drow"){
  return(
    <div>
    <div className='result'>{currentTargetSet}'s player is win</div>
    <button id="refreshBtn" onClick={()=>{
      window.location.reload()
    }}>Reset</button>
    </div>
  )
}
else if (resultat() && resultat() === "drow"){
  return(
    <div>
    <div className='result'>It is Drow</div>
    <button id="refreshBtn" onClick={()=>{
      window.location.reload()
    }}>Reset</button>
    </div>
  )
}
  else{
    return(
    <div>
      <h1 style={{ margin: "10% 10% 0% 10%" }}>Please Choose <span style={{color: "red"}}>X</span> or <span style={{color: "green"}}>O</span></h1>
      <button onClick={handleChoose} className="chooseButton">X</button>
      <button onClick={handleChoose} className="chooseButton" id="btn2">O</button>
    </div>
    )
  }
}

export default App;
