import { Col, Input, Row, Typography, Image } from "antd";
import { useAppContext } from "context/appContext";
import { useState } from "react";
import { Box, ButtonStyle } from "theme/components";
import goalItem from 'api/mocks/selcetItems.json'
import { MessageCutScene } from "./styles/cutScene.styles";
import Animation from 'theme/animations'
import NPC from 'assets/images/Avatars/npc3.png'

const { Title } = Typography;

function GameStage1() {
    
    let items = goalItem
    const [select, setSelect] = useState(items)
    const [finish, setFinish] = useState(false)
    const [goal, setGoal] = useState('')
    const { nextStage } = useAppContext();
    const [isSkip, setIsSkip] = useState(false)
    const [index, setIndex] = useState(0);
    
    console.log('-----------item----------',items[items.length-1].goal)

    const selectItem1 = async() => {
        if (select.length <= 2 ){
            await setGoal( select[select.length - 1].goal);
            setFinish(true);
        } else {
            const newItem = select.filter((item) =>item !== select[select.length - 2]);
            setSelect( newItem)
            console.log('-----------select1----------',select)
        }

    }

    const selectItem2 = async() => {
        if (select.length <= 2){
            await setGoal( select[select.length - 2].goal);
            setFinish(true);
        } else {
            const newitem = select.filter((item) => item !== select[select.length - 1]);
            setSelect( newitem)
            
            console.log('-----------select2----------',select)
        }
    }

    const message = [
        'เอาละในขั้นแรกคุณจำเป็นต้องมีเป้าหมายที่ชัดเจนก่อน', 
        'กถ้ายังไม่แน่ใจเรามีตัวช่วยให้คุณ', 
        'เลือกสิ่งที่คุณชอบมากที่สุดจากไอเทมที่ปรากฎ', 
        'มีโอกาสเลือกครั้งเดียวนะ',
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
       {isSkip && 
       <>
        <div>Versus Game</div>
        {finish ? 
           <Box justify='center' align='center' direction='column'  style={{height: 'calc(100vh - 400px)'}}>
                <h1>{goal}</h1>
                <p>พิมพ์เป้าหมายของคุณที่นี่!!!</p>
                <Input placeholder="Basic usage" />
                <ButtonStyle typebutton='Medium' sizebutton={30} onClick={nextStage}> Submit </ButtonStyle>
            </Box>
        : 
        <Box justify='center' align='center' direction='row'  style={{height: 'calc(100vh - 400px)'}}>
            <div onClick={selectItem1}> {select[select.length - 1].goal} </div> 
            <h1> VS </h1> 
            <div onClick={selectItem2}>{select[select.length - 2].goal}  </div>
         </Box>
        }
       </>
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

export default  GameStage1;