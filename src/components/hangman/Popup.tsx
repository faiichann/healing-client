import { useAppContext } from "context/appContext";
import { ConfirmModal } from "pages/gamecontent/styles/stage.styles";
import { useHistory } from "react-router-dom";
import { ButtonStyle } from "theme/components";
import { checkWin } from "utils/hangmanHelper";
import { Typography } from "antd";
import axios from "axios";
const { Title } = Typography;

const Popup = ({ correctLetters, wrongLetters, selectedWord, playAgain, loseTime } : any) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let countTime = "";
  const { isName, isGoalType, isGoalMsg, isEmoji, isMsgBot, isColorBg, 
    isRateStar, cardID, setStage, author, text, imgQuote, nextStage} = useAppContext();
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "เย้!! ผ่านแล้ว";
    finalMessageRevealWord = "จงเชื่อมั่นในตัวเองไว้ ไปรับรางวัลกัน";
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    if ( loseTime > 2 ) {
      finalMessage = "หว่า!! แย่จัง";
      finalMessageRevealWord = `( ${selectedWord})`;
      countTime = `ไม่เป็นไรนะเรามีของตอบแทนความพยายามในตัวคุณ`
    }else {
      finalMessage = "พยายามอีกครั้ง!!";
      finalMessageRevealWord = `( ${selectedWord} )`;
      countTime = `เหลือโอกาสอีก ${ 3 - (loseTime)} ครั้ง`
    }
  }

  const data = {
    card_id: cardID,
    username: isName,
    rating: isRateStar,
    type: isGoalType,
    goal: isGoalMsg,
    nft_card: {
        emoji: isEmoji,
        bg_color: isColorBg,
        caption: isMsgBot
    },
    qoutes: {
        aurthur: author,
        qoute: text,
        img: imgQuote
    }
  }
  const sentData = async () =>{
    try {
      await axios.post('https://healing-project.herokuapp.com/results',data,).then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    } catch (error) {
      console.error(error);
    } 
    await setStage(4)
  }

   const endStage = async() => {
     await sentData()
     nextStage()
   }

  return (
    <div className="popup-container" style={finalMessage !== "" ? { display: "flex" } : {}}>
      <ConfirmModal title={
        checkWin(correctLetters, wrongLetters, selectedWord) === "win" ?
        <>
            <div style={{zIndex: '100',display: 'flex'}}>
            <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="42" cy="42" r="42" fill="white"/>
            <path d="M36.608 23.2643L36.608 33.1163L26.852 33.1163L26.852 23.2643L36.608 23.2643ZM56.3601 23.2643L56.3601 33.1163L46.5081 33.1163L46.5081 23.2643L56.3601 23.2643ZM66.116 43.3967L56.3601 43.3967L56.3601 63.0046L26.7559 63.0046L26.7559 43.3967L17 43.3967L17 53.2487L66.116 53.2487L66.116 43.3967Z" fill="#8FB486"/>
            </svg>
            </div>
        </>
        :
        <>
            <div style={{zIndex: '100',display: 'flex'}}>
            <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="42" cy="42" r="42" fill="white"/>
            <path d="M36.608 23.4007L36.608 33.2527L26.852 33.2527L26.852 23.4007L36.608 23.4007ZM56.3601 23.4007L56.3601 33.2527L46.5081 33.2527L46.5081 23.4007L56.3601 23.4007ZM56.4562 43.533L56.4562 63.141L66.2121 63.141L66.2121 53.3851L17.0961 53.3851L17.0961 63.141L26.852 63.141L26.852 43.533L56.4562 43.533Z" fill="#F9A186"/>
            </svg>
            </div>
        </>
        }
        type={ checkWin(correctLetters, wrongLetters, selectedWord) === "win" ? "pass" : "fail" }
        visible={finalMessage !== "" ?  true : false} 
        onOk={checkWin(correctLetters, wrongLetters, selectedWord) === "win" ? endStage : playAgain } 
        closable={false}
        footer={ checkWin(correctLetters, wrongLetters, selectedWord) === "win" ?[
            <ButtonStyle typebutton='Large' 
            sizebutton={75} 
            onClick={endStage} 
            backgroundbutton={'#A6CD9C'}
            style={{fontWeight: '400', fontSize: '18px'}}> รับรางวัล </ButtonStyle>
          ] :  
          loseTime > 2 ? [
            <ButtonStyle typebutton='Large' 
            sizebutton={75} 
            onClick={endStage} 
            style={{fontWeight: '400', fontSize: '18px'}}> รับรางวัล </ButtonStyle>
          ] 
          : 
          [
            <ButtonStyle typebutton='Large' 
            sizebutton={75} 
            onClick={playAgain} 
            style={{fontWeight: '400', fontSize: '18px'}}> เล่นอีกครั้ง </ButtonStyle>
          ]}>
            <Title level={3} style={{color: '#333333', margin: '5px'}}>{finalMessage}</Title>
            <p>{finalMessageRevealWord}</p>
            <p>{countTime}</p>
        </ConfirmModal>
    </div>
  );
};

export default Popup;
