import { Row, Image, Col, Typography } from "antd";
import { useAppContext } from "context/appContext";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, ButtonStyle } from "theme/components";
import randomSlot from 'api/mocks/RandomSlot.json'
import { MessageCutScene } from "./styles/cutScene.styles";
import Animation from 'theme/animations'
import NPC from 'assets/images/Avatars/npc3.png'
import { ItemContainer, RandomContainer } from "./styles/stage.styles";
import axios from "axios";
const { Title, Text } = Typography;

function GameStage3() {
    const { nextStage, cardRandomInfo } = useAppContext();
    const history = useHistory();
    const items1 = randomSlot.Emoji
    const items2 = randomSlot.Caption
    const items3 = randomSlot.Rank

      const [item1, setItem1] = useState('❓');
      const [item2, setItem2] = useState('❓');
      const [item3, setItem3] = useState('❓');
      const [isSkip, setIsSkip] = useState(false)
      const [isRandom, setIsRandom] = useState(false)
      const [indexCut, setIndexCut] = useState(0);
      const [emoji, setEmoji] = useState('');
      const [caption, setCaption] = useState('');
      const [rank, setRank] = useState('');
      const [rankDes, setRankDes] = useState('');
      const { isName, isGoalType, isGoalMsg, isEmoji, isMsgBot, isColorBg, 
        isRateStar, setCardID, cardID, getQuotes, author, text, imgQuote } = useAppContext();

      const random = () => {
        let randomItem1 = Math.floor(Math.random() * items1.length);
        let randomItem2 = Math.floor(Math.random() * items2.length);
        let randomItem3 = Math.floor(Math.random() * items3.length);
        setItem1(items1[randomItem1].img)
        setItem2(items2[randomItem2].img)
        setItem3(items3[randomItem3].img)
        setEmoji(items1[randomItem1].name)
        setCaption(items2[randomItem2].name)
        setRank(items3[randomItem3].type)
        setRankDes(items3[randomItem3].name)
        setIsRandom(true)
      }

      const message = [
        `แตะ เพื่อทำนายดวงจากการสุ่ม` ,
        `${item1} ดูเหมือนว่าคุณ "${emoji}" คุณทำมันได้แน่นอนเพราะงั้น ${item2} "${caption}" เอาละช่วงนี้ ${item3} "${rankDes}"` ,
        'ขอบคุณที่ให้ความสนใจ คลิกเพื่อรับรางวัล!!',
      ]
      const [isCutScene, setIsCutScene] = useState(false)
      const [index, setIndex] = useState(0)

      const onConfirm = (emoji: string, msgbot: string, colorbg: string) =>{
        console.log('Data3--->', emoji,msgbot,colorbg)
        if(emoji && msgbot && colorbg)
        cardRandomInfo({emoji, msgbot, colorbg})
        setIsCutScene(true)
      }
      const fetchData = async () => {
        try {
            const {data: response} = await axios.get('https://healing-project.herokuapp.com/results');
            await setCardID(response.result.length + 1)
          } catch (error) {
            console.error(error);
          } 
    };
      useEffect(() => {
        fetchData()
        getQuotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

      const data = {
        card_id: cardID,
        username: isName,
        rating: isRateStar,
        type: isGoalType,
        goal: isGoalMsg,
        nft_card: {
            emoji: isEmoji,
            bg_color: isColorBg,
            caption: isMsgBot
        },
        qoutes: {
            aurthur: author,
            qoute: text,
            img: imgQuote
        }
      }
      const sentData = async () =>{
        try {
          await axios.post('https://healing-project.herokuapp.com/results',data,).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
        } catch (error) {
          console.error(error);
        } 
        nextStage()
      }

      const nextIndex = () =>{
        setIndex(index + 1 )
      }

      const messageCut = [
        'ผ่านแล้ว เก่งมากเลยยยย', 
        'เรามีคำถามาจะถามด้วยละ', 
        '',
        'เราลองมาทายชะตาเป้าหมายของคุณกัน',
        'ลองสุ่มดวงของคุณจนกว่าจะพอใจแล้วให้เราทำนายกันเถอะ', 
    ] 

    const goSpecial = () =>{
      history.push('/hangman-stage')
      }

    const nextIndexCut = () =>{
        if (indexCut + 1 <= messageCut.length - 1){
          setIndexCut(indexCut + 1 )
        }else{
            setIsSkip(true)
        }
      }
    
    const StyleButtonSpecial = {
        boxShadow: 'none',
        margin: '10px 0px' 
      }
    return (
       <>
        { isSkip &&
       <>
        {
         isCutScene ?
         <>
         {index === 2 ?
         <>
         <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 200px)'}} onClick={()=>sentData()}>
            <MessageCutScene>
                {message[index]}
            </MessageCutScene>
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
         :
         <>
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
         :
         <>
          <Box justify='center' align='center' direction='column' style={{marginTop: '20%' }}>
          <Title level={2} style={{fontSize: '36px', fontWeight: '700', color: 'var(--Green-300)' }}>Good Luck!</Title> 
          <Text style={{fontSize: '18px', fontWeight: '400', color: '#868686', marginBottom: '0'  }}>Random NPC power and problem.</Text>
          <RandomContainer onClick={random}>
          <Row gutter={[32, 16]} style={{width: '100%'}}>
            <Col span={8}> <ItemContainer > {item1} </ItemContainer> </Col>
            <Col span={8}> <ItemContainer colorBg={'#FBB19B'}> {item2} </ItemContainer> </Col>
            <Col span={8}> <ItemContainer colorBg={'#FFF1A7'} > {item3} </ItemContainer> </Col>
          </Row>
          </RandomContainer>
        
        <Box justify='center' align='center' direction='column' style={{marginBottom: '20px'}}>
        <Title level={2} style={{fontSize: '24px', fontWeight: '700', color: 'var(--Green-300)' }}> {isRandom ? 'Random again' : 'Tap Card to Random' } </Title>
        </Box>
        { isRandom && <Box justify='center' align='center' direction='column'>
            <ButtonStyle typebutton="Large" sizebutton={50}  onClick={()=> onConfirm(item1,caption,rank)}>CONFIRM</ButtonStyle>
        </Box>}
        </Box>
         </>
       }
       </>
       }
      

       { !isSkip &&
       <>
          { indexCut === 2 ?
            <>
            <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 200px)'}}>
            <MessageCutScene >
                   คุณเชื่อในเรื่องดวงชะตาหรือไม่ ตอบ Yes หรือ NO เพื่อไปต่อ
                </MessageCutScene>
                <Box justify='center' align='center' direction='row'  style={{margin: '40px 0 20px 0'}}>
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
              <ButtonStyle typebutton="Medium" backgroundbutton={'#A6CD9C'} style={StyleButtonSpecial} sizebutton={45} onClick={nextIndexCut}>YES</ButtonStyle>
              <ButtonStyle disabled typebutton="Medium" backgroundbutton={'#F9A186'} style={StyleButtonSpecial} sizebutton={45} onClick={goSpecial}>NO</ButtonStyle>
            </Box>
            </>
          :
          <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 200px)'}} onClick={nextIndexCut}>
            <Animation 
                onEnter="fadeIn" 
                key={indexCut} 
                duration={1000} 
                delay={200}
                style={{width: '100%', display: 'flex', justifyContent: 'center' }}
             >
                <MessageCutScene >
                    {messageCut[indexCut]}
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
          }
       </>
       }
       </>
    );
}

export default  GameStage3;