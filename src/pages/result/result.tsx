import Container from 'components/container/container'
import { useAppContext } from 'context/appContext';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Image, Row, Col, Typography, Tabs } from 'antd';
import { DivProgress, ProgressBar } from 'pages/gamecontent/styles/stage.styles';
import { HomeFilled } from '@ant-design/icons';
import { Box, ButtonStyle } from 'theme/components';
import CloseBox from 'assets/animation/Box.gif'
import OpenBox from 'assets/animation/BoxOpen.gif'
import { CardContainer, ImageContainer, HeaderCard, RateStyle, GoalCircle, TextName, QuoteBox, TabsStyle } from './result.styles';
import  logo  from 'assets/tests/healing_logo.png'
import formatNumber from 'utils/formatNumber';
import formatGoal from 'utils/formatGoal';
import exportAsImage from 'utils/saveImage';
import formatMonster from 'utils/formatMonster';
import openSound from 'assets/sounds/open.mp3'

const { Text, Title} = Typography;
const { TabPane } = Tabs;

function Result() {
    const { stage, cardID} = useAppContext();
    const [isLoading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currentYear, setCurrentYear] = useState('');
    const [dataCard, setDataCard] = useState<any>();
    const exportRef = useRef<any>();
    const exportNFTRef = useRef<any>();
    const openAudio = new Audio(openSound)

    const saveResult = () =>{
        exportAsImage(exportRef.current, "healingCard")
    }
    const saveNFTResult = () =>{
        exportAsImage(exportNFTRef.current, "healingNFTCard")
    }

    const goHome = async() => {
        await sessionStorage.removeItem('token')
        window.location.href = './'
    }

    const getYear = () => {
        var d = new Date(); 
        var year = d.getFullYear();
        setCurrentYear(year.toString()) 
    }
    useEffect(() => {
        getYear()
    }, []);
    
    const openBox = async() =>{
        openAudio.play();
        openAudio.volume = 0.8
            setIsOpen(true)
        try {
            await axios.get(`https://healing-project.herokuapp.com/results/${cardID}`).then(async (response) => {
            // await axios.get(`http://localhost:5000/results/5`).then(async (response) => {
                const card = await response.data;
                console.log(card)
                setDataCard(card)
              });
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    
    useEffect(() => {
        if(dataCard){
        //     setTimeout( () => {
        //         setIsClick(true)   
        // }, 1000);
        setTimeout( () => {
                setLoading(true)     
        }, 1500);
        }
    }, [dataCard]);

    function callback(key: any) {
        console.log(key);
      }
    return (
       <Container header={{ title: 'Result', right: (<HomeFilled onClick={goHome} />) }}>
          {isLoading ? 
          <>
          <Box justify='center' align='center' direction='column' >
          <TabsStyle defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Healing Card" key="1">
    <CardContainer ref={exportRef} rank={dataCard?.cardReult.nft_card.bg_color}>
           <Row style={{justifyContent: 'center' }} >
                    <HeaderCard>
                    <Title level={5} style={{color: '#737373', marginBottom: '-0.5em'}} >"{dataCard?.cardReult.goal}"</Title>
                    <RateStyle disabled defaultValue={dataCard?.cardReult.rating} />
                    </HeaderCard>
            </Row>
            <Row>
            <Box justify='center' align='center' direction='column' >
                    <ImageContainer>
                         {dataCard?.cardReult.nft_card.emoji}
                         <Image 
                        height={110}
                        preview={false}
                        src={formatMonster(dataCard.cardReult.type)} 
                        />
                    </ImageContainer>
                </Box>
            </Row>
            {/* ์ Name img CardNO */}
            <Row>
                <Col span={8} style={{padding: '50px 0 0 0 '}} >
                    <TextName>{dataCard?.cardReult.username}</TextName>
                </Col>
                <Col span={8} style={{justifyContent: 'center', display: 'flex'}} >  
                <GoalCircle>             
                <Image 
                        width={60}
                        preview={false}
                        src={formatGoal(dataCard.cardReult.type)} 
                        />
                </GoalCircle>    
                </Col>
                <Col span={8} style={{padding: '50px 0 0 0 '}}>
                    <TextName>#{formatNumber(dataCard.cardReult.card_id)}</TextName>
                </Col>
            </Row>
            {/* Quote */}
            <Row>
            <Box justify='center' align='center' direction='column' >
                <QuoteBox>
                <Text type="secondary"  style={{ fontWeight: '600'}}>"{dataCard?.cardReult.qoutes.qoute}"</Text>
                </QuoteBox>
                <Text strong style={{ marginBottom: '10px'}}>{dataCard?.cardReult.qoutes.aurthur}</Text>
            </Box>
            </Row>
            <Row>
                <Col flex="80%" style={{justifyContent: 'center', padding: '0px 10px 0 40px' , lineHeight: '10px' }}> 
                <Text italic style={{fontSize: '8px', fontWeight: '400', color: '#989898'}}>&copy; Copyright {currentYear} Healing.com All Rights Reserved </Text>
                </Col>
                <Col style={{justifyContent: 'center' }}>
                <Image
                    width={30}
                    src={logo}
                    preview={false}
                /></Col>
            </Row>
           </CardContainer>
        <Box justify='center' align='center' direction='row'  style={{marginBottom: '30px'}}>
        <ButtonStyle typebutton='Medium' sizebutton={30} onClick={saveResult}>
            Save
        </ButtonStyle>
        </Box>
    </TabPane>
    <TabPane tab="Healing NFT Card" key="2">
    <CardContainer ref={exportNFTRef} rank={dataCard?.cardReult.nft_card.bg_color}>
           <Row style={{justifyContent: 'center' }} >
                    <HeaderCard>
                    <Title level={5} style={{color: '#737373', marginBottom: '-0.5em'}} >"{dataCard?.cardReult.goal}"</Title>
                    <RateStyle disabled defaultValue={dataCard?.cardReult.rating} />
                    </HeaderCard>
            </Row>
            <Row>
            <Box justify='center' align='center' direction='column' >
                    <ImageContainer>
                         {dataCard?.cardReult.nft_card.emoji}
                         <Image 
                        height={110}
                        preview={false}
                        src={formatMonster(dataCard.cardReult.type)} 
                        />
                    </ImageContainer>
                </Box>
            </Row>
            {/* ์ Name img CardNO */}
            <Row>
                <Col span={8} style={{padding: '50px 0 0 0 '}} >
                    <TextName>{dataCard?.cardReult.username}</TextName>
                </Col>
                <Col span={8} style={{justifyContent: 'center', display: 'flex'}} >  
                <GoalCircle>             
                <Image 
                        width={60}
                        preview={false}
                        src={formatGoal(dataCard.cardReult.type)} 
                        />
                </GoalCircle>    
                </Col>
                <Col span={8} style={{padding: '50px 0 0 0 '}}>
                    <TextName>#{formatNumber(dataCard.cardReult.card_id)}</TextName>
                </Col>
            </Row>
            {/* Quote */}
            <Row>
            <Box justify='center' align='center' direction='column' >
                <QuoteBox>
                <Text type="secondary"  style={{ fontWeight: '600'}}>"{dataCard?.cardReult.nft_card.caption}"</Text>
                </QuoteBox>
                <Text strong style={{ marginBottom: '10px'}}> Healing </Text>
            </Box>
            </Row>
            <Row>
                <Col flex="80%" style={{justifyContent: 'center', padding: '0px 10px 0 40px' , lineHeight: '10px' }}> 
                <Text italic style={{fontSize: '8px', fontWeight: '400', color: '#989898'}}>&copy; Copyright {currentYear} Healing.com All Rights Reserved </Text>
                </Col>
                <Col style={{justifyContent: 'center' }}>
                <Image
                    width={30}
                    src={logo}
                    preview={false}
                /></Col>
            </Row>
           </CardContainer>
        <Box justify='center' align='center' direction='row' style={{marginBottom: '30px'}}>
        <ButtonStyle typebutton='Medium' sizebutton={30} onClick={saveNFTResult} >
            Save As NFT
        </ButtonStyle>
        </Box>
    </TabPane>
  </TabsStyle>
         
        </Box>
          </>
         : 
         <>
         <Box justify='center' align='center' direction='column'>
         <DivProgress><ProgressBar percent={stage * 25} showInfo={true} strokeWidth={10}/></DivProgress>
         <Box justify='center' align='center' direction='column'onClick={openBox}
         style={{height: 'calc(100vh - 200px)', width: '100%'}}>
         {isOpen ?       
          <Image
            // width={isOpen && isClick ? 100 : 150}
            // src={isOpen && isClick ? Logo : OpenBox}
            width={150}
            src={OpenBox}
            preview={false}
            style={{margin: '20px 0'}}
            /> 
            : <>
                <Image
            width={150}
            src={CloseBox}
            preview={false}
            style={{margin: '20px 0'}}
            /> 
                 <Text strong>แตะ เพื่อเปิดกล่องรางวัล !!!</Text>
                </>
            }
         </Box>
         </Box>
         </>
          }
       </Container>
    );
}

export default Result;