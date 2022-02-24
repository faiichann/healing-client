import Container from 'components/container/container'
import { useAppContext } from 'context/appContext';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { message, Image, Row, Col, Typography } from 'antd';
import { DivProgress, ProgressBar } from 'pages/gamecontent/styles/stage.styles';
import { HomeFilled } from '@ant-design/icons';
import { Box, ButtonStyle } from 'theme/components';
import CloseBox from 'assets/animation/Box.gif'
import OpenBox from 'assets/animation/BoxOpen.gif'
import { CardContainer, ImageContainer, HeaderCard, RateStyle, GoalCircle, TextName, QuoteBox } from './result.styles';
import  logo  from 'assets/tests/healing_logo.png'
import formatNumber from 'utils/formatNumber';
import formatGoal from 'utils/formatGoal';

const { Text, Title} = Typography;
function Result() {
    const history = useHistory();
    const { stage, setStage, setCardNum, cardID } = useAppContext();
    const [isLoading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currentYear, setCurrentYear] = useState('');
    const [dataCard, setDataCard] = useState<any>();
    const key = 'updatable';

    const saveResult = () =>{
        setStage(0)
        message.loading({ content: 'Loading...', key });
        setTimeout(() => {
          message.success({ content: 'Loaded!', key, duration: 2 });
        }, 1000);
    }

    const formatCardNumber = async(response : any) => {
        const number = await response.result.length
        let formatNum = number.toString();
        while (formatNum.length < 3) formatNum = "0" + formatNum;
        await setCardNum(formatNum)
        console.log('Card Amount ------>', formatNum)
    }

    const fetchData = async () => {
        try {
            const {data: response} = await axios.get('https://healing-project.herokuapp.com/results');
            await formatCardNumber(response);
            return response.result.length + 1
          } catch (error) {
            console.error(error);
          } 
    };
    const goHome = async() => {
        setStage(0)
        await fetchData()
        history.push('/')
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

    return (
       <Container header={{ title: 'Result', left: 'back' , right: (<HomeFilled onClick={goHome} />) }}>
          {isLoading ? 
          <>
          {/* {dataCard?.cardReult.goal}
          {dataCard?.cardReult.rating}
          {dataCard?.cardReult.type}
          {dataCard?.cardReult.nft_card.emoji}
          {dataCard?.cardReult.nft_card.caption}
          {dataCard?.cardReult.nft_card.bg_color}
          {dataCard?.cardReult.username} */}
          {/* {formatNumber(dataCard.cardReult.card_id)} */}
          {/* {dataCard?.cardReult.qoutes.qoute}
          {dataCard?.cardReult.qoutes.aurthur}
          {dataCard?.cardReult.qoutes.img} */}
          <Box justify='center' align='center' direction='column' >
           <CardContainer rank={dataCard?.cardReult.nft_card.bg_color}>
           <Row style={{justifyContent: 'center' }} >
                    <HeaderCard>
                    <Title level={5} style={{color: '#737373', marginBottom: '-0.5em'}} >"{dataCard?.cardReult.goal}"</Title>
                    <RateStyle disabled defaultValue={dataCard?.cardReult.rating} />
                    </HeaderCard>
            </Row>
            <Row>
            <Box justify='center' align='center' direction='column' >
                    <ImageContainer>
                         EMOji: {dataCard?.cardReult.nft_card.emoji}, MSG: {dataCard?.cardReult.nft_card.caption}
                         <Image 
                        width={90}
                        preview={false}
                        src={formatGoal(dataCard.cardReult.type)} 
                        />
                    {/* <Image
                    width={50}
                    src={dataCard?.cardReult.qoutes.img}
                    preview={false}
                /> */}
                    </ImageContainer>
                </Box>
            </Row>
            {/* ์ Name img CardNO */}
            <Row>
                <Col flex="auto" style={{padding: '50px 0 0 0 '}} >
                    <TextName>{dataCard?.cardReult.username}</TextName>
                </Col>
                <Col flex="auto" style={{justifyContent: 'center', display: 'flex'}} >  
                <GoalCircle>             
                <Image 
                        width={60}
                        preview={false}
                        src={formatGoal(dataCard.cardReult.type)} 
                        />
                </GoalCircle>    
                </Col>
                <Col flex="auto" style={{padding: '50px 0 0 0 '}}>
                    <TextName>#{formatNumber(dataCard.cardReult.card_id)}</TextName>
                </Col>
            </Row>
            {/* Quote */}
            <Row>
            <Box justify='center' align='center' direction='column' >
                <QuoteBox>
                <Text type="secondary"  style={{ fontWeight: '600'}}>"{dataCard?.cardReult.qoutes.qoute}"</Text>
                </QuoteBox>
                <Text strong style={{ marginBottom: '4px'}}>{dataCard?.cardReult.qoutes.aurthur}</Text>
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
        <Box justify='center' align='center' direction='row'>
        <ButtonStyle typebutton='Medium' sizebutton={30} onClick={saveResult}>
            Save
        </ButtonStyle>
        </Box>
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
                 <Text strong>TAP TO OPEN BOX !!!</Text>
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