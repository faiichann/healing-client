import { Row, Col, Button, Progress} from "antd";
import { useAppContext } from "context/appContext";
import { useState } from "react";
import CountDownTimer from "utils/countdownTimer";
import { ConfirmModal } from "./styles/stage.styles";

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
    const { nextStage, isLose, setIsLose } = useAppContext()
    const [isPassVisible, setIsPassVisible] = useState(false);

    const goodButton = (text:number) => {
        setText(prev => (prev + 1 ) % info.length)
        if (info[text].value === 1){
            score < 10 ? setScore(score + 1) : setIsPassVisible(!isPassVisible);
        } else {
            setScore(score)
        }
    }

    const badButton = (text:number) => {
        setText(prev => (prev + 1 ) % info.length)
        if (info[text].value === 0){
            score < 10 ? setScore(score + 1) : setIsPassVisible(!isPassVisible);
        } else {
            setScore(score)
        }
    }

    const hoursMinSecs = {hours: 0, minutes: 0, seconds: 10}

    const handleOk = () => {
        nextStage()
        setIsPassVisible(!isPassVisible)
    };
    const handleLoseOk = () => {
        setScore(0)
        setIsLose(!isLose)
    };

    return (
       <>
        <ConfirmModal title="Won" visible={isPassVisible} onOk={handleOk} >
        <p>You Pass</p>
        </ConfirmModal>
        <ConfirmModal title="lose" visible={isLose} onOk={handleLoseOk} >
            <p>You fail please try again</p>
        </ConfirmModal>

       <p>Speed game</p>
       <CountDownTimer  hoursMinSecs={hoursMinSecs}/>
        <div><h1>{info[text].text}</h1></div>
       <Row>
           <Col><button onClick={()=>badButton(text)}>BAD</button></Col> 
           <Col><button onClick={()=>goodButton(text)}>GOOD</button></Col>
        </Row>
        
        <h4>Point : <Progress strokeLinecap="square" percent={score * 10} /> </h4>
       </>
    );
}

export default  GameStage2;