const WrongLetters = ({ wrongLetters }: any) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters.map((letter :string, i: number) => <span key={i}>{letter}</span>).reduce((prev: any, curr: any) => (prev === null ? [curr] : [prev, ", ", curr]), null)}
      </div>
    </div>
  );
};

export default WrongLetters;