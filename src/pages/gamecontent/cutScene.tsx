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

function Cutscene() {
    
    const [isTab, setIsTab] = useState(false)
    const { nextStage , isName, isAvatar } = useAppContext();
    const [index, setIndex] = useState(0);
    const [isUserAvatar, setUserAvatar] = useState<string>()

    
    const message = [
        `HI  ${isName}`,
        `you so cute  ${isAvatar}`,
        'Welcome to Healing',
        'Let us make you happy', 
        'ARE YOU READY!', 
        'TAB and Let go'
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
   

    const nextIndex = () =>{
        if (index + 1 <= message.length - 1){
            setIndex(index + 1 )
        }else{
            nextStage()
        }
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
             <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 10vh)'}} onClick={()=>setIsTab(true)}>
             <Image
            width={100}
            src={Logo}
            preview={false}
            style={{margin: '20px 0'}}
            />
            <Shadow />
                 <TextCutScene> Tab Screen to play ! </TextCutScene>
             </Box>
            </>}
       </>
    );
}

export default Cutscene;