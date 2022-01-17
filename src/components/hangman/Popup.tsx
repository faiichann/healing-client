import { useAppContext } from "context/appContext";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { checkWin } from "utils/hangmanHelper";

const Popup = ({ correctLetters, wrongLetters, selectedWord, playAgain, loseTime } : any) => {
  const history = useHistory();
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let countTime = "";
  const { setStage } = useAppContext();
  
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won! 😃";
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    if ( loseTime > 2 ) {
      finalMessage = "Unfortunately you lost 3 time . Good trying I have this for you";
      finalMessageRevealWord = `...the word was: ${selectedWord}`;
    }else {
      finalMessage = "Unfortunately you lost. 😕";
      finalMessageRevealWord = `...the word was: ${selectedWord}`;
      countTime = `You can try ${ 3 - (loseTime)} Time`
    }
  }
   const endStage = async() => {
    await setStage(4)
    history.push('/Gamecontent')
   }

  return (
    <div className="popup-container" style={finalMessage !== "" ? { display: "flex" } : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <h3>{countTime}</h3>
        { checkWin(correctLetters, wrongLetters, selectedWord) === "win" ? <button onClick={endStage}>OK</button>
          : loseTime > 2 ? <button onClick={endStage}>Get it</button> :<button onClick={playAgain}>Play again</button>
        }
       
      </div>
    </div>
  );
};

export default Popup;
