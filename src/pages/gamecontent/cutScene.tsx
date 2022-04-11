import { Col, Image, Row } from "antd";
import { useAppContext } from "context/appContext";
import { useEffect, useState } from "react";
import { Box } from "theme/components";
import { MessageCutScene, TextCutScene } from "./styles/cutScene.styles";
import { Avatar } from 'api/mocks/Avatars'
import { Shadow } from "pages/home/styles/home.styles";
import Logo  from 'assets/animation/logo.gif';
import NPC from 'assets/images/Avatars/monster.png'
import Animation from 'theme/animations'
import SoundClick from 'assets/sounds/read.mp3'
import SoundStart from 'assets/sounds/start.mp3'

function Cutscene() {
    
    const [isTab, setIsTab] = useState(false)
    const { nextStage , isName, isAvatar } = useAppContext();
    const [index, setIndex] = useState(0);
    const [isUserAvatar, setUserAvatar] = useState<string>();
    const clickAudio = new Audio(SoundClick)
    const startAudio = new Audio(SoundStart)

    const message = [
        `สวัสดีครับ คุณ"${isName}"`,
        `ผมชื่อบอทเขียวครับ`,
        'ยินดีต้อนรับเข้าสู่ Healing World',
        'บอทเขียวจะพาคุณไปหาแรงบันดาลใจให้เป้าหมายของคุณ', 
        'คุณพร้อมหรือยัง!', 
        'แตะหน้าจอเพื่อเริ่มกันเลย'
        ] 
useEffect(() => {
    console.log('message -->', message.length)
    console.log('Index -->', index)
    async function fetchMyAPI(){
        let userAvatar = Avatar.find(({ value }) => value === isAvatar)
        setUserAvatar(userAvatar?.img)
    }
    fetchMyAPI()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [index, message.length])
   

    const nextIndex = () => {
        clickAudio.play();
        clickAudio.volume = 0.8
        if (index + 1 <= message.length - 1){
            setIndex(index + 1 )
        }else{
            nextStage()
        }
      }

    const tabStart = () => {
        startAudio.play();
        startAudio.volume = 0.8
        setIsTab(true)
    }
    return (
       <>
            {isTab && 
            <> 
             <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 100px)'}} onClick={nextIndex}>
             <Animation 
                onEnter="fadeIn" 
                key={index} 
                duration={1000} 
                delay={200}
                style={{width: '100%', display: 'flex', justifyContent: 'center' }}
             >
                 <Row style={{height: '110px', width: '100%', display: 'flex', justifyContent: 'center'}}>
                <MessageCutScene >
                    {message[index]}
                </MessageCutScene>
                </Row>
            </Animation>
            <Box justify='center' align='center' direction='row'  style={{marginTop: '40px'}}>
              <Row style={{alignItems: 'flex-end', width: '100%', justifyContent: 'space-around', margin: '0 60px'}}>
                  <Col span={8}>
                  <Image 
                width={120}
                preview={false}
                src={NPC}
                />
                  </Col>
                  {isUserAvatar && 
                  <Col span={8} offset={6}>
                  <Image 
                width={100}
                preview={false}
                src={isUserAvatar}
                style={{transform: 'scaleX(-1)'}}
                />
                  </Col>
                   }
              </Row>
              </Box>
            </Box>
            </>
            }
            {!isTab && 
            <>
             <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 10vh)'}} onClick={tabStart}>
             <Image
            width={100}
            src={Logo}
            preview={false}
            style={{margin: '20px 0'}}
            />
            <Shadow />
                 <TextCutScene> แตะ หน้าจอเริ่มเลย! </TextCutScene>
             </Box>
            </>}
       </>
    );
}

export default Cutscene;