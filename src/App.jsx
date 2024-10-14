import React ,{useState,useEffect} from 'react'
import Header from './components/Header.jsx'
import Figure from './components/Figure.jsx'
import WrongLetters from './components/wrongLetters.jsx'
import Word from './components/Word.jsx'
import Notofication from './components/Notofication.jsx'
import { showNotification as show } from './helper.js'
import Popup from './components/Popup.jsx'
import { giveWords as get } from './giveWords.js'
const App = () => {
  const { arrayName: initialArrayName, wordArray: initialWords } = get();
  const [playable,setPlayable]=useState(true);
  const [correctLetters,setCorrectLetters] = useState([]);
  const [wrongLetters,setWrongLetters] = useState([]);
  const [showNotification,setShowNotification]=useState(false);
  const [errors,setErrors]=useState(0);
  const [checkWin,setCheckWin]=useState(3);
  const [words, setWords] = useState(initialWords);
  const [arrayName, setArrayName] = useState(initialArrayName);
  const [selectedWord, setSelectedWord] = useState(initialWords[Math.floor(Math.random() * initialWords.length)]);
  useEffect(()=>{
    const handleKeydown= event => {
      const{key,keyCode}=event;
      if (playable && event.keyCode>= 65 && event.keyCode <= 90) { 
          const letter = event.key.toLowerCase();
           if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
            setCorrectLetters(correctLetters=>[...correctLetters,letter]); 
            if(correctLetters.join()===selectedWord){
              setCheckWin(1);
            }   
            } else {
              if(correctLetters.join()===selectedWord){
                setCheckWin(1);
              }   
             show(setShowNotification); 
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters=>[...wrongLetters,letter]);
              if(wrongLetters.length>5){
                setCheckWin(2);
              }
              setErrors(wrongLetters.length);    
            } 
             else {
              show(setShowNotification); 
            }
          }
      }
    }
      window.addEventListener('keydown',handleKeydown);
      return ()=> window.removeEventListener('keydown',handleKeydown);
  } ,[correctLetters,wrongLetters,playable]);
  const playAgain=()=>{
    const { arrayName: a, wordArray: w } = get();
    setWords(w);
    setArrayName(a);
    setSelectedWord(w[Math.floor(Math.random() * w.length)]);
    setCorrectLetters([]);
    setWrongLetters([]);
    setPlayable(true);
    setCheckWin(3);
    setErrors(0);
  }
  return (
    <div>
      <Header category={arrayName}/>
      <div className="game-container">
        <Figure errors={errors}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Popup checkWin={checkWin} selectedWord={selectedWord} playAgain={playAgain} setPlayable={setPlayable} correctLetters={correctLetters}/>
      </div>
      <Notofication showNotification={showNotification}/>
    </div>
  )
}

export default App
