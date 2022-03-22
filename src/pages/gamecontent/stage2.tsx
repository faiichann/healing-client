import { Row, Col, Typography, Image } from "antd";
import { useAppContext } from "context/appContext";
import { useEffect, useState } from "react";
import { Box, ButtonStyle } from "theme/components";
import CountDownTimer from "utils/countdownTimer";
import { ButtonFace, ColSpeedgame, ConfirmModal, PointDiv, ProgressStyle, RowSpeedgame, TextRandom } from "./styles/stage.styles";
import randomWord from 'api/mocks/RandomWord.json'
import { MessageCutScene } from "./styles/cutScene.styles";
import Animation from 'theme/animations'
import NPC from 'assets/images/Avatars/monster.png'
import Mad from 'assets/images/stage/Mad.png'
import Smile from 'assets/images/stage/Smile.png'
import SoundWrong from 'assets/sounds/wrongAns.mp3'
import SoundRight from 'assets/sounds/rightAns.mp3'
import SoundClick from 'assets/sounds/read.mp3'

const { Title } = Typography;

function GameStage2() {
    let info = randomWord
    let random = Math.floor(Math.random() * info.length);
    const [text, setText] = useState(info[random].text)
    const [score, setScore] = useState(0)
    const { nextStage, isLose, setIsLose, isReset, setIsReset } = useAppContext()
    const [isPassVisible, setIsPassVisible] = useState(false);
    const [isSkip, setIsSkip] = useState(false)
    const [index, setIndex] = useState(0);
    const wrongAudio = new Audio(SoundWrong)
    const rightAudio = new Audio(SoundRight)
    const clickAudio = new Audio(SoundClick)

    const goodButton = (value:number) => {
        setText(info[random].text)
        if (value === 1){
            if(score < 10){
                rightAudio.play();
                rightAudio.volume = 0.8
                setScore(score + 1)
            }
        } else {
            wrongAudio.play();
            wrongAudio.volume = 0.8
            setScore(score)
        }
    }

    const badButton = (value:number) => {
        setText(info[random].text)
        if (value === 0){
            if(score < 10){
                rightAudio.play();
                rightAudio.volume = 0.8
                setScore(score + 1)
            }
        } else {
            wrongAudio.play();
            wrongAudio.volume = 0.8
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
        setIsReset(!isReset)
    };

    const message = [
        'เป้าหมายคุณยอดเยี่ยมมากเลย', 
        'ต่อไปเราจะช่วยให้คุณใกล้ชิดเป้าหมายมากขึ้น..', 
        'โดยคุณต้องทำคะแนนให้ถึงก่อนหมดเวลา',
        'จากการเลือก Feeling ของคำที่ปรากฎให้ถูกต้องภายใน 10 วินาที',
        'ตั้งสติแล้วเลือกตามความรู้สึกแรกของคำที่เข้ามาในหัวเลยนะ', 
        'ถ้าพร้อมแล้วไปเริ่มกันเลย!!'
    ] 

    const onSkip = () =>{
        setIsSkip(true)
    }
    const nextIndex = () =>{
        clickAudio.play();
        clickAudio.volume = 0.8
        if (index + 1 <= message.length - 1){
            setIndex(index + 1 )
        }else{
            setIsSkip(true)
        }
      }
      
    useEffect(() => {
        console.log('Score',score)
        if (score === 10){
            setIsPassVisible(true) 
        }
    },[isPassVisible, score])
    return (
       <>
        <ConfirmModal title={<>
            <div style={{zIndex: '100',display: 'flex'}}>
            <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="42" cy="42" r="42" fill="white"/>
            <path d="M36.608 23.2643L36.608 33.1163L26.852 33.1163L26.852 23.2643L36.608 23.2643ZM56.3601 23.2643L56.3601 33.1163L46.5081 33.1163L46.5081 23.2643L56.3601 23.2643ZM66.116 43.3967L56.3601 43.3967L56.3601 63.0046L26.7559 63.0046L26.7559 43.3967L17 43.3967L17 53.2487L66.116 53.2487L66.116 43.3967Z" fill="#8FB486"/>
            </svg>
            </div>
        </>} 
        type="pass"
        visible={isPassVisible} 
        onOk={handleOk} 
        closable={false}
        footer={[
            <ButtonStyle typebutton='Large' sizebutton={75} 
            backgroundbutton={'var(--Green-300)'} 
            style={{fontWeight: '400', fontSize: '18px'}}
            onClick={handleOk}> ตกลง </ButtonStyle>
          ]}>
               <Title level={3} style={{color: '#333333', margin: '5px'}}> ชนะแล้ว !</Title>
                <p>ยินดีด้วยคุณผ่านแล้วไปด่านต่อไปได้เลย</p>
        </ConfirmModal>
        <ConfirmModal title={<>
            <div style={{zIndex: '100',display: 'flex'}}>
            <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="42" cy="42" r="42" fill="white"/>
            <path d="M36.608 23.4007L36.608 33.2527L26.852 33.2527L26.852 23.4007L36.608 23.4007ZM56.3601 23.4007L56.3601 33.2527L46.5081 33.2527L46.5081 23.4007L56.3601 23.4007ZM56.4562 43.533L56.4562 63.141L66.2121 63.141L66.2121 53.3851L17.0961 53.3851L17.0961 63.141L26.852 63.141L26.852 43.533L56.4562 43.533Z" fill="#F9A186"/>
            </svg>
            </div>
        </>}
        type="fail"
        visible={isPassVisible?  false : isLose} 
        onOk={handleLoseOk} 
        closable={false}
        footer={[
            <ButtonStyle typebutton='Large' 
            sizebutton={75} 
            onClick={handleLoseOk} 
            style={{fontWeight: '400', fontSize: '18px'}}> เล่นอีกครั้ง </ButtonStyle>
          ]}>
            <Title level={3} style={{color: '#333333', margin: '5px'}}> แพ้แล้ว !</Title>
            <p>ไม่เป็นไรนะพยายามเข้าอีกนิดจนกว่าจะผ่านกันเถอะ</p>
        </ConfirmModal>

        {isSkip && 
        <Box justify='center' align='center' direction='column' style={{marginTop: '10%'}}>
            <Box justify='center' align='center' direction='row' style={{width: '100%', display: 'inline-block'}}>
                <PointDiv>
                <Col span={18}>
                    <ProgressStyle 
                    strokeColor={score * 10 === 100 ? '#A6CD9C' : "#F9A186" }
                    trailColor={"#FDE3DB"}
                    strokeLinecap="square" 
                    percent={score * 10} />
                </Col> 
                </PointDiv>
            </Box>
            <Box justify='center' align='center' direction='row' style={{width: '100%'}}>
            <CountDownTimer  hoursMinSecs={hoursMinSecs} />
            </Box>
       <Box justify='center' align='center' direction='row' style={{margin: '60px 16px 100px 16px'}}>
       <Animation 
                onEnter="fadeIn" 
                key={text} 
                duration={1000} 
                delay={200}
                style={{width: '100%', display: 'flex', justifyContent: 'center' }}
             >
           <TextRandom>{info[random].text.toUpperCase()}</TextRandom>
        </Animation>
        </Box>
       <Box justify='center' align='center' direction='row'>
        <RowSpeedgame gutter={[24, 8]} justify="space-around">
            <ColSpeedgame span={12} > 
            <ButtonFace  type='bad' onClick={()=>badButton(info[random].value)}>
            <Image 
                width={75}
                preview={false}
                src={Mad}
                />
            </ButtonFace>
            </ColSpeedgame> 
            <ColSpeedgame span={12} >
            <ButtonFace type='good' onClick={()=>goodButton(info[random].value)}>
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
                width={120}
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