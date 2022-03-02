import { Col, Row, Typography, Image, Rate } from "antd";
import { useAppContext } from "context/appContext";
import { useState } from "react";
import { Box, ButtonStyle } from "theme/components";
import { goalItem }from 'api/mocks/selcetItems'
import { MessageCutScene } from "./styles/cutScene.styles";
import Animation from 'theme/animations'
import NPC from 'assets/images/Avatars/monster.png'
import { GoalContainer, GoalText, InputGoal, InputGoalStyle, RowVsgame, StarCard, StarGoalText, VsContainer, VsText } from "./styles/stage.styles";

const { Title, Text } = Typography;

function GameStage1() {
    
    let items = goalItem
    const [select, setSelect] = useState(items)
    const [finish, setFinish] = useState(false)
    const [goal, setGoal] = useState<any>()
    const [userGoal, setUserGoal]= useState<String |null>(null);
    const { nextStage, goalInfo } = useAppContext();
    const [isSkip, setIsSkip] = useState(false)
    const [starRate, setStarRate] = useState(0)
    const [isRating, setRating] = useState(false)
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

    const submitWish = (typeGoal: string ,msgGoal: any, starRate: number) => {
        console.log('Data2--->', typeGoal,msgGoal,starRate)
        if(typeGoal && msgGoal)
        goalInfo({typeGoal, msgGoal, starRate})
        nextStage()
    }
    const handleChangeRate = ( value:number) =>{
        setStarRate(value)
    }
    const desc = ['ระดับ1', 'ระดับ2', 'ระดับ3', 'ระดับ4', 'ระดับ5'];
    const meaning = ['ทำก็ได้ไม่ทำก็ได้', 'มีแรงบันดาลใจอยากทำ', 'ตั้งใจจะทำให้สำเร็จ', 'เชื่อมั่นว่าต้องทำได้แน่นอน', 'ยากแค่ไหนก็ต้องทำให้ได้เลย'];

    return (
       <>
       {isSkip && 
       <>
        {finish ? 
           <Box justify='center' align='center' direction='column'  style={{marginTop: '10%'}}>
                {isRating?
                <>
                    <Text type="secondary" style={{margin: '10px 0 10px 0'}}>ให้คะแนนระดับการตั้งเป้าหมายของคุณกัน</Text>
                    <StarCard>
                    <Box justify='center' align='center' direction='column'>
                    <Image 
                        width={100}
                        preview={false}
                        src={goal.img} 
                        />
                    <StarGoalText> " {userGoal} " </StarGoalText>
                    <Rate defaultValue={starRate} tooltips={desc} onChange={handleChangeRate} value={starRate}
                    style={{fontSize: '30px',marginTop: '20px'}}/>
                      {starRate > 0 ? <span className="ant-rate-text">{meaning[starRate - 1]}</span> : 'How You Need it!'}
                    </Box>
                    </StarCard>
                <ButtonStyle typebutton='Large' sizebutton={50} onClick={() => submitWish(goal.goal, userGoal, starRate)}> CONFIRM </ButtonStyle>
                </>
                :
                <>
                <GoalText> {goal.goal}  </GoalText>
                <Text type="secondary">{goal.des}</Text>
                <GoalContainer>
                    <Image 
                        width={100}
                        preview={false}
                        src={goal.img} 
                        />
                    </GoalContainer>
                <InputGoalStyle>
                <InputGoal placeholder= {`พิมพ์สิ่งที่ปราถนาเกี่ยวกับเรื่อง ${goal.goal}`}
                 onChange={({ target: { value } }) => { setUserGoal(value) }} />
                </InputGoalStyle>
                <ButtonStyle typebutton='Large' sizebutton={50} onClick={() => setRating(true)}> ตั้งเป้าหมาย </ButtonStyle>
                </>
                }
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

export default  GameStage1;