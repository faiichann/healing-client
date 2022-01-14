const Word = ({ selectedWord, correctLetters }: any) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter :string, i:number) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;