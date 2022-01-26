import { Col, Input, Row, Typography, Image } from "antd";
import { useAppContext } from "context/appContext";
import { useState } from "react";
import { Box, ButtonStyle } from "theme/components";
import { goalItem }from 'api/mocks/selcetItems'
import { MessageCutScene } from "./styles/cutScene.styles";
import Animation from 'theme/animations'
import NPC from 'assets/images/Avatars/npc3.png'
import { GoalContainer, GoalText, RowVsgame, VsContainer, VsText } from "./styles/stage.styles";

const { Title, Text } = Typography;

function GameStage1() {
    
    let items = goalItem
    const [select, setSelect] = useState(items)
    const [finish, setFinish] = useState(false)
    const [goal, setGoal] = useState<any>()
    const { nextStage } = useAppContext();
    const [isSkip, setIsSkip] = useState(false)
    const [index, setIndex] = useState(0);
    const [animation1, setAnimation1] = useState(0);
    const [animation2, setAnimation2] = useState(0);
    console.log('-----------item----------',items[items.length-1].goal)

    const selectItem1 = async() => {
        if (select.length <= 2 ){
            await setGoal( select[select.length - 1]);
            setFinish(true);
        } else {
            const newItem = select.filter((item) =>item !== select[select.length - 2]);
            setAnimation2(animation2+1)
            setSelect( newItem)
            console.log('-----------select1----------',select)
        }

    }

    const selectItem2 = async() => {
        if (select.length <= 2){
            await setGoal( select[select.length - 2]);
            setFinish(true);
        } else {
            const newitem = select.filter((item) => item !== select[select.length - 1]);
            setAnimation1(animation1+1)
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
        {finish ? 
           <Box justify='center' align='center' direction='column'  style={{height: 'calc(100vh - 400px)'}}>
               <GoalText> {goal.goal}  </GoalText>
               <Text type="secondary">เพื่อนที่ดี ไม่ยืมตังกันเย้</Text>
               <GoalContainer>
                    <Image 
                        width={100}
                        preview={false}
                        src={goal.img} 
                        />
                    </GoalContainer>
                {/* <Input placeholder="Basic usage" />
                <ButtonStyle typebutton='Medium' sizebutton={30} onClick={nextStage}> Submit </ButtonStyle> */}
            </Box>
        : 
        <>
        <Title level={4}  style={{margin: '50px', color: '#737373'}}>Round {9 - select.length}/7</Title>
        <Box justify='center' align='center' direction='column'  style={{height: 'calc(100vh - 40vh)'}}>
            <RowVsgame gutter={[40, 16]} justify="space-around">
                <Col span={10}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Animation 
                onEnter="fadeIn" 
                key={animation1} 
                duration={1000} 
                delay={200}
                style={{width: '100%', display: 'flex', justifyContent: 'center' }}
             >
                     <VsContainer onClick={selectItem1}> 
                     <Image 
                        width={90}
                        preview={false}
                        src={select[select.length - 1].img} 
                        />
                     </VsContainer> 
                </Animation>
                </Col>
                <Col span={10}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>  
                <Animation 
                onEnter="fadeIn" 
                key={animation2} 
                duration={1000} 
                delay={200}
                style={{width: '100%', display: 'flex', justifyContent: 'center' }}
             >
                    <VsContainer onClick={selectItem2}>
                    <Image 
                        width={90}
                        preview={false}
                        src={select[select.length - 2].img} 
                        />
                    </VsContainer>
                    </Animation>
                </Col>
                <Col span={10}><VsText> {select[select.length - 1].goal}  </VsText></Col>
                <Col span={10}><VsText> {select[select.length - 2].goal} </VsText></Col>
            </RowVsgame>
         </Box>
         </>
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