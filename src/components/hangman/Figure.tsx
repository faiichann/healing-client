import { FigureContainer } from "pages/gamecontent/styles/hangman.styles";
import { Image } from 'antd';
import step0 from 'assets/images/stage/step0.png'
import step1 from 'assets/images/stage/step1.png'
import step2 from 'assets/images/stage/step2.png'
import step3 from 'assets/images/stage/step3.png'
import step4 from 'assets/images/stage/step4.png'
import step5 from 'assets/images/stage/step5.png'
import step6 from 'assets/images/stage/step6.png'
const Figure = ({ wrongLetters }:any) => {
  const errors = wrongLetters.length;

  return (
    <FigureContainer>
      {errors === 0 && <Image width={200} src={step0} preview={false}/>}
      {/* <!-- Head --> */}
      {errors === 1 && <Image width={200} src={step1} preview={false}/>}
      {/* <!-- Body --> */}
      {errors === 2 && <Image width={200} src={step2} preview={false}/>}
      {/* <!-- Arms --> */}
      {errors === 3 && <Image width={200} src={step3} preview={false}/>}
      {errors === 4 && <Image width={200} src={step4} preview={false}/>}
      {/* <!-- Legs --> */}
      {errors === 5 && <Image width={200} src={step5} preview={false}/>}
      {errors === 6 && <Image width={200} src={step6} preview={false}/>}
      {errors === 7 && <Image width={200} src={step6} preview={false}/>}
    </FigureContainer>
  );
};

export default Figure;