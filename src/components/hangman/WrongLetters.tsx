import { WrongContainer } from "pages/gamecontent/styles/hangman.styles";

const WrongLetters = ({ wrongLetters }: any) => {
  return (
    <WrongContainer>
      <div>
        {wrongLetters.length > 0 && <p style={{marginBottom: '0'}}>Wrong </p>}
        {wrongLetters.map((letter :string, i: number) => 
        <span key={i}>{letter}</span>).reduce((prev: any, curr: any) => 
        (prev === null ? [curr] : [prev, ", ", curr]), null)
        }
      </div>
    </WrongContainer>
  );
};

export default WrongLetters;