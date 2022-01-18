import { Row, Col, Button, Progress, Typography, Alert} from "antd";
import { useAppContext } from "context/appContext";
import { useState } from "react";
import { Box } from "theme/components";
import CountDownTimer from "utils/countdownTimer";
import { ConfirmModal, TextRandom } from "./styles/stage.styles";
import randomWord from 'api/mocks/RandomWord.json'
const { Title } = Typography;

function GameStage2() {
    let info = randomWord
    const [text, setText] = useState(0)
    const [score, setScore] = useState(0)
    const { nextStage, isLose, setIsLose } = useAppContext()
    const [isPassVisible, setIsPassVisible] = useState(false);
    const [isSkip, setIsSkip] = useState(false)
    const [index, setIndex] = useState(0);

    const goodButton = (text:number) => {
        setText(prev => (prev + 1 ) % info.length)
        if (info[text].value === 1){
            score > 10 ? setIsPassVisible(!isPassVisible) : setScore(score + 1);
        } else {
            setScore(score)
        }
    }

    const badButton = (text:number) => {
        setText(prev => (prev + 1 ) % info.length)
        if (info[text].value === 0){
            score > 10 ? setIsPassVisible(!isPassVisible) : setScore(score + 1);
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

    const message = [
        'เป้าหมายคุณยอดเยี่ยมมาก', 
        'ต่อไปเราจะช่วยให้คุณใกล้ชิดเป้าหมายมากขึ้น..', 
        'โดยคุณต้องทำคะแนนถึงก่อนหมดเวลา',
        'จากเลือกฟีลลิ่งของคำที่ปรากฎให้ถูกต้องภายใน 10 วินาที',
        'ถ้าทำชาเลนจ์นี้ดูกันถ้าคุณทำได้แสดงว่าคุณพร้อมแล้วล่ะ', 
        'ถ้าพร้อมแล้วไปเริ่มกันเลย'
    ] 

    const onSkip = () =>{
        setIsSkip(true)
    }
    const nextIndex = () =>{
        if (index + 1 <= message.length - 1){
            setIndex(index + 1 )
        }else{
            setIsSkip(true)
        }
      }
      
    return (
       <>
        <ConfirmModal title="Won" visible={isPassVisible} onOk={handleOk} >
        <p>You Pass</p>
        </ConfirmModal>
        <ConfirmModal title="lose" visible={isLose} onOk={handleLoseOk} >
            <p>You fail please try again</p>
        </ConfirmModal>

        {isSkip && 
        <Box justify='center' align='center' direction='column'>
       <p>Speed game</p>
       <CountDownTimer  hoursMinSecs={hoursMinSecs}/>

       <Box justify='center' align='center' direction='row'>
           <TextRandom>{info[text].text}</TextRandom>
        </Box>
       <Box justify='center' align='center' direction='row'>
           <Col><Button onClick={()=>badButton(text)}>BAD</Button></Col> 
           <Col><Button onClick={()=>goodButton(text)}>GOOD</Button></Col>
        </Box>
        <Box justify='center' align='center' direction='row'>
            <Col span={4}> <h4>Point :  </h4> </Col>
            <Col span={20}>
            <Progress strokeLinecap="square" percent={score * 10} />
            </Col>
        </Box>
        </Box>
        }

        {!isSkip && 
       <>
       <Box justify='flex-end' align='center' direction='row' onClick={onSkip}>
            <Title level={5}> Skip </Title>
       </Box>
        <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 400px)'}} onClick={nextIndex}>
            <Alert style={{ margin: '16px 0', width: '50%', justifyContent: 'center' }} message={message[index]} />
        </Box>
       </>
        }
       </>
    );
}

export default  GameStage2;