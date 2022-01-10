import { Row, Col, Modal} from "antd";
import { useAppContext } from "context/appContext";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CountDownTimer from "utils/countdownTimer";

const ModalStyle = styled(Modal)`
    z-index: 99;
`
function GameStage2() {
    let info = [
        {text: 'smile' , value: 1},
        {text: 'cry' , value: 0},
        {text: 'happy' , value: 1},
        {text: 'love' , value: 1},
        {text: 'angry' , value: 0},
        {text: 'satisfy' , value: 1}
    ]
    const [text, setText] = useState(0)
    const [score, setScore] = useState(0)
    const { nextStage,visible, setVisible} = useAppContext()
    // const [[hrs, mins, secs], setTime] = useState([0, 0, 10]);


    const goodButton = (text:number) => {
        setText(prev => (prev + 1 ) % info.length)
        if (info[text].value === 1){
            score < 10 ? setScore(score + 1) : setVisible(!visible);
        } else {
            setScore(score)
        }
    }

    const badButton = (text:number) => {
        setText(prev => (prev + 1 ) % info.length)
        if (info[text].value === 0){
            score < 10 ? setScore(score + 1) : setVisible(!visible);
        } else {
            setScore(score)
        }
    }

    // const passStage = () => {
    //     setVisible(true)
    //     setScore(0)
    // }

    // useEffect(() => {
    //         const tick = () => {
    //             if (hrs === 0 && mins === 0 && secs === 0 && score < 10) {
    //                 alert('you lose')
    //                 reset()
    //             }
    //             else if (mins === 0 && secs === 0) {
    //                 setTime([hrs - 1, 59, 59]);
    //             } else if (secs === 0) {
    //                 setTime([hrs, mins - 1, 59]);
    //             } else {
    //                 setTime([hrs, mins, secs - 1]);
    //             }
    //             };
            
    //             const reset = () => setTime([parseInt('0'), parseInt('0'), parseInt('10')]);
    //             const timerId = setInterval(() => tick(), 1000);
    //             return () => clearInterval(timerId);
    // },[hrs, mins, score, secs]);

    const hoursMinSecs = {hours: 0, minutes: 0, seconds: 10}
    
    return (
       <>
       <p>Speed game</p>
       <CountDownTimer  hoursMinSecs={hoursMinSecs}/>
       {/* <div>
                <p>{`${hrs.toString().padStart(2, '0')}:${mins
                .toString()
                .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
       </div> */}
        <div><h1>{info[text].text}</h1></div>
       <Row>
           <Col><button onClick={()=>badButton(text)}>BAD</button></Col> 
           <Col><button onClick={()=>goodButton(text)}>GOOD</button></Col>
        </Row>
        <h4>Point : {score}</h4>
       {visible && <button onClick={nextStage}>Next</button> }

       </>
    );
}

export default  GameStage2;