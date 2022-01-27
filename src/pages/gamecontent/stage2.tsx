import { Row, Col, Typography, Image} from "antd";
import { useAppContext } from "context/appContext";
import { useState } from "react";
import { Box } from "theme/components";
import CountDownTimer from "utils/countdownTimer";
import { ButtonFace, ColSpeedgame, ConfirmModal, PointDiv, ProgressStyle, RowSpeedgame, TextRandom } from "./styles/stage.styles";
import randomWord from 'api/mocks/RandomWord.json'
import { MessageCutScene } from "./styles/cutScene.styles";
import Animation from 'theme/animations'
import NPC from 'assets/images/Avatars/npc3.png'
import Mad from 'assets/images/stage/Mad.png'
import Smile from 'assets/images/stage/Smile.png'
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
            score < 10 ? setScore(score + 1) : score === 10? setIsPassVisible(!isPassVisible) : setScore(10);
        } else {
            setScore(score)
        }
    }

    const badButton = (text:number) => {
        setText(prev => (prev + 1 ) % info.length)
        if (info[text].value === 0){
            score < 10 ? setScore(score + 1) : score === 10? setIsPassVisible(!isPassVisible) : setScore(10);
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
        <ConfirmModal title="lose" visible={isPassVisible?  false : isLose} onOk={handleLoseOk} >
            <p>You fail please try again</p>
        </ConfirmModal>

        {isSkip && 
        <Box justify='center' align='center' direction='column' style={{marginTop: '10%'}}>
            <Box justify='center' align='center' direction='row' style={{width: '100%', display: 'inline-block'}}>
                <PointDiv>
                <Col span={18}>
                    <ProgressStyle 
                    strokeColor={score * 10 ===100 ? '#A6CD9C' : "#F9A186" }
                    trailColor={"#FDE3DB"}
                    strokeLinecap="square" 
                    percent={score * 10} />
                </Col> 
                </PointDiv>
            </Box>
            <Box justify='center' align='center' direction='row' style={{width: '100%'}}>
            <CountDownTimer  hoursMinSecs={hoursMinSecs}/>
            </Box>
       <Box justify='center' align='center' direction='row' style={{margin: '60px 16px 100px 16px'}}>
       <Animation 
                onEnter="fadeIn" 
                key={text} 
                duration={1000} 
                delay={200}
                style={{width: '100%', display: 'flex', justifyContent: 'center' }}
             >
           <TextRandom>{info[text].text.toUpperCase()}</TextRandom>
        </Animation>
        </Box>
       <Box justify='center' align='center' direction='row'>
        <RowSpeedgame gutter={[24, 8]} justify="space-around">
            <ColSpeedgame span={12} > 
            <ButtonFace  type='bad' onClick={()=>badButton(text)}>
            <Image 
                width={75}
                preview={false}
                src={Mad}
                />
            </ButtonFace>
            </ColSpeedgame> 
            <ColSpeedgame span={12} >
            <ButtonFace type='good' onClick={()=>goodButton(text)}>
            <Image 
                width={75}
                preview={false}
                src={Smile}
                />
            </ButtonFace>
            </ColSpeedgame> 
        </RowSpeedgame>
        </Box>
        </Box>
        }

        {!isSkip && 
       <>
       <Box justify='flex-end' align='center' direction='row' onClick={onSkip}>
            <Title level={5} style={{color: 'var(--Green-100)', margin: '20px'}}> Skip </Title>
       </Box>
        <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 200px)'}} onClick={nextIndex}>
            <Animation 
                onEnter="fadeIn" 
                key={index} 
                duration={1000} 
                delay={200}
                style={{width: '100%', display: 'flex', justifyContent: 'center' }}
             >
                <MessageCutScene >
                    {message[index]}
                </MessageCutScene>
            </Animation>
            <Box justify='center' align='center' direction='row'  style={{marginTop: '40px'}}>
              <Row>
                  <Col span={8}>
                  <Image 
                width={75}
                preview={false}
                src={NPC}
                />
                  </Col>
              </Row>
              </Box>
        </Box>
       </>
        }
       </>
    );
}

export default  GameStage2;