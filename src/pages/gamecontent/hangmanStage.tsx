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
import styled from "styled-components";
import { Button, Row } from "antd";

const words = [
    'heal',
    'game',
    'goal',
    'card',
    'token',
    'happy',
    'plant',
    'gift',
  ];
  
  interface KeyProps {
    colorBg?: string
  }

  const KeyButton = styled(Button)<KeyProps>`
  &:disabled{
    background-color: ${(props: KeyProps) => props.colorBg? props.colorBg  : '#818384' } !important;
    background:  ${(props: KeyProps) => props.colorBg? props.colorBg  : '#818384' }!important;
    color: #f5f5f5 !important;
  }
  background-color:#818384 ;
  color: white;
  margin: 0 3px;
  width: 25px;
  height: 35px;
  padding: 4px;
  justify-content: center ;
  align-items: center;
  text-align: center;
  `
  const KeyRow = styled(Row)`
  margin: 10px 2px;
  `
  let selectedWord = words[Math.floor(Math.random() * words.length)];

  function HangmanStage() {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState<any>([]);
    const [wrongLetters, setWrongLetters] = useState<any>([]);
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
  const handleKeydown = (key :any) => {
    if (playable && key) {
      const letter = key.toLowerCase();
      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters((currentLetters: any) => [...currentLetters, letter]);
        } 
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters((currentLetters: any) => [...currentLetters, letter]);
        }
      }
    }
  };
  useEffect(() => {
  }, [correctLetters, wrongLetters, playable])
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
      <Container header={{ title: 'Special Game' }}>
      <Box justify='center' align='center' direction='column' style={{ marginTop: '60px', overflowY: 'scroll'}}>
      <Header />
      <GameContainer>
        <Figure wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      <div style={{display: 'flex', position: 'relative',margin: '10px', zIndex: '1001'}}>
    <Box justify="center" align="center" direction="column">
    <KeyRow gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}>
      <KeyButton size={"small"} 
      disabled={wrongLetters.includes("q") || correctLetters.includes("q") ? true : false}
      colorBg={wrongLetters.includes("q")? "#3A3A3C" : correctLetters.includes("q") ? "#538D4E" : "#818384" }
      onClick={()=> handleKeydown("Q")}>Q</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("w")? "#3A3A3C" : correctLetters.includes("w") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("w") || correctLetters.includes("w") ? true : false}
      onClick={()=> handleKeydown("W")}>W</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("e")? "#3A3A3C" : correctLetters.includes("e") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("e") || correctLetters.includes("e") ? true : false}
      onClick={()=> handleKeydown("E")}>E</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("r")? "#3A3A3C" : correctLetters.includes("r") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("r") || correctLetters.includes("r") ? true : false}
      onClick={()=> handleKeydown("R")}>R</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("t")? "#3A3A3C" : correctLetters.includes("t") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("t") || correctLetters.includes("t") ? true : false}
      onClick={()=> handleKeydown("T")}>T</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("t")? "#3A3A3C" : correctLetters.includes("t") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("y") || correctLetters.includes("y") ? true : false}
      onClick={()=> handleKeydown("Y")}>Y</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("u")? "#3A3A3C" : correctLetters.includes("u") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("u") || correctLetters.includes("u") ? true : false}
      onClick={()=> handleKeydown("U")}>U</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("i")? "#3A3A3C" : correctLetters.includes("i") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("i") || correctLetters.includes("i") ? true : false}
      onClick={()=> handleKeydown("I")}>I</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("o")? "#3A3A3C" : correctLetters.includes("o") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("o") || correctLetters.includes("o") ? true : false}
      onClick={()=> handleKeydown("O")}>O</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("p")? "#3A3A3C" : correctLetters.includes("p") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("p") || correctLetters.includes("p") ? true : false}
      onClick={()=> handleKeydown("P")}>P</KeyButton>
    </KeyRow>
    <KeyRow gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}> 
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("a")? "#3A3A3C" : correctLetters.includes("a") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("a") || correctLetters.includes("a") ? true : false}
      onClick={()=> handleKeydown("A")}>A</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("s")? "#3A3A3C" : correctLetters.includes("s") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("s") || correctLetters.includes("s") ? true : false}
      onClick={()=> handleKeydown("S")}>S</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("d")? "#3A3A3C" : correctLetters.includes("d") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("d") || correctLetters.includes("d") ? true : false}
      onClick={()=> handleKeydown("D")}>D</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("f")? "#3A3A3C" : correctLetters.includes("f") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("f") || correctLetters.includes("f") ? true : false}
      onClick={()=> handleKeydown("F")}>F</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("g")? "#3A3A3C" : correctLetters.includes("g") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("g") || correctLetters.includes("g") ? true : false}
      onClick={()=> handleKeydown("G")}>G</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("h")? "#3A3A3C" : correctLetters.includes("h") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("h") || correctLetters.includes("h") ? true : false}
      onClick={()=> handleKeydown("H")}>H</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("j")? "#3A3A3C" : correctLetters.includes("j") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("j") || correctLetters.includes("j") ? true : false}
      onClick={()=> handleKeydown("J")}>J</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("k")? "#3A3A3C" : correctLetters.includes("k") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("k") || correctLetters.includes("k") ? true : false}
      onClick={()=> handleKeydown("K")}>K</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("l")? "#3A3A3C" : correctLetters.includes("l") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("l") || correctLetters.includes("l") ? true : false}
      onClick={()=> handleKeydown("L")}>L</KeyButton>
    </KeyRow>
    <KeyRow gutter={{ xs: 24, sm: 24, md: 24, lg: 32 }}>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("z")? "#3A3A3C" : correctLetters.includes("z") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("z") || correctLetters.includes("z") ? true : false}
      onClick={()=> handleKeydown("Z")}>Z</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("x")? "#3A3A3C" : correctLetters.includes("x") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("x") || correctLetters.includes("x") ? true : false}
      onClick={()=> handleKeydown("X")}>X</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("c")? "#3A3A3C" : correctLetters.includes("c") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("c") || correctLetters.includes("c") ? true : false}
      onClick={()=> handleKeydown("C")}>C</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("v")? "#3A3A3C" : correctLetters.includes("v") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("v") || correctLetters.includes("v") ? true : false}
      onClick={()=> handleKeydown("V")}>V</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("b")? "#3A3A3C" : correctLetters.includes("b") ? "#538D4E" : "#818384" }
      disabled={wrongLetters.includes("b") || correctLetters.includes("b") ? true : false}
      onClick={()=> handleKeydown("B")}>B</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("n")? "#3A3A3C" : correctLetters.includes("n") ? "right" : "#818384" }
      disabled={wrongLetters.includes("n") || correctLetters.includes("n") ? true : false}
      onClick={()=> handleKeydown("N")}>N</KeyButton>
      <KeyButton size={"small"} 
      colorBg={wrongLetters.includes("m")? "#3A3A3C" : correctLetters.includes("m") ? "right" : "#818384" }
      disabled={wrongLetters.includes("m") || correctLetters.includes("m") ? true : false}
      onClick={()=> handleKeydown("M")}>M</KeyButton>
    </KeyRow>
    </Box>
    </div>
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
