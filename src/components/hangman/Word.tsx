import { LetterBox, WordContainer } from "pages/gamecontent/styles/hangman.styles";

const Word = ({ selectedWord, correctLetters }: any) => {
  return (
    <WordContainer>
      {selectedWord.split("").map((letter :string, i:number) => {
        return (
          <div key={i}>
            {correctLetters.includes(letter) ? 
              <LetterBox correct={true}>
                  {letter}
                </LetterBox>
            :
            <LetterBox key={i}>
            {null}
          </LetterBox>}
          </div>
        );
      })}
    </WordContainer>
  );
};

export default Word;