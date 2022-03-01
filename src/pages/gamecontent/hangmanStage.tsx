import Figure from "components/hangman/Figure";
import Header from "components/hangman/Header";
import Popup from "components/hangman/Popup";
import Word from "components/hangman/Word";
import WrongLetters from "components/hangman/WrongLetters";
import { useEffect, useState } from "react";
import Container from "components/container/container";
import "./styles/hangman.css"
import { Box } from "theme/components";
import { GameContainer } from "./styles/hangman.styles";
import axios from "axios";
import { useAppContext } from "context/appContext";

const words = [
    'think',
    'blink',
    'work',
    'money',
    'game',
  ];

  let selectedWord = words[Math.floor(Math.random() * words.length)];

  function HangmanStage() {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([String]);
    const [wrongLetters, setWrongLetters] = useState([String]);
    const [loseTime, setLoseTime] = useState(0);
    const { setCardID, getQuotes } = useAppContext();

    const fetchData = async () => {
      try {
          const {data: response} = await axios.get('https://healing-project.herokuapp.com/results');
          await setCardID(response.result.length + 1)
        } catch (error) {
          console.error(error);
        } 
  };
    useEffect(() => {
      fetchData()
      getQuotes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
    useEffect(() => {
    const handleKeydown = (event: { key: any; keyCode: any; }) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } 
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  const playAgain = () => {
    setLoseTime(loseTime + 1)
    console.log(loseTime )
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Container header={{ title: 'Special Game', left: 'back' }}>
      <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 100px)', marginTop: '60px'}}>
      <Header />
      <GameContainer>
        <Figure wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
      </GameContainer>
      <Popup 
      correctLetters={correctLetters} 
      wrongLetters={wrongLetters} 
      selectedWord={selectedWord} 
      playAgain={playAgain}
      loseTime={loseTime} />
      </Box>
      </Container>
    </>
  );
}

export default HangmanStage;
