import { useAppContext } from "context/appContext";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { checkWin } from "utils/hangmanHelper";

const Popup = ({ correctLetters, wrongLetters, selectedWord, playAgain } : any) => {
  const history = useHistory();
  let finalMessage = "";
  let finalMessageRevealWord = "";
  const { setStage } = useAppContext();
  
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won! 😃";
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Unfortunately you lost. 😕";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
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
        { checkWin(correctLetters, wrongLetters, selectedWord) === "win" ? <button onClick={endStage}>OK</button>
          : <button onClick={playAgain}>Play again</button>
        }
       
      </div>
    </div>
  );
};

export default Popup;
