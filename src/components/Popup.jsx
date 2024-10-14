import React from 'react'
const Popup = ({checkWin,selectedWord,playAgain,setPlayable,correctLetters}) => {
  let check=false;
  let wordSelected=selectedWord;
  for(let i=0;i<correctLetters.length;i++){
    if(selectedWord.includes(correctLetters[i])){
      selectedWord=selectedWord.split(correctLetters[i]).join('');
    }
  }
  if(selectedWord==''){
    check=true;
  }
  let finalMessage='';
  let finalRevealWord='';
  if(check){
   finalMessage='Congratulations! You won! 😃';
   setPlayable(false);
  }
  else if(checkWin==2){
   finalMessage='Unfortunately you lost. 😕';
   finalRevealWord=`...the word is: ${wordSelected}`;
   setPlayable(false);
  }
  return (
    <div className="popup-container" style={finalMessage===''?{}:{display:'flex'}} id="popup-container">
      <div className="popup">
        <h2 id="final-message">{finalMessage}</h2>
        <h3 id="final-message-reveal-word">{finalRevealWord}</h3>
        <button id="play-button" onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup
