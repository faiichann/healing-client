import Container from 'components/container/container'
import { useAppContext } from 'context/appContext';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Rate, Card, message, Image, Row, Col, Typography } from 'antd';
import { DivProgress, ProgressBar } from 'pages/gamecontent/styles/stage.styles';
import { HomeFilled } from '@ant-design/icons';
import { Box, ButtonStyle } from 'theme/components';
import Logo  from 'assets/animation/logo.gif';
import CloseBox from 'assets/animation/Box.gif'
import OpenBox from 'assets/animation/BoxOpen.gif'
import { CardContainer, ImageContainer } from './result.styles';
import  logo  from 'assets/tests/healing_logo.png'
import { ApiGetCardData } from 'api/ApiCard/card.api';

const { Text } = Typography;
function Result() {
    const history = useHistory();
    const { stage, setStage, isName, isGoalType, isGoalMsg, isEmoji, isMsgBot, isColorBg, isRateStar } = useAppContext();
    const [isLoading, setLoading] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState();
    const [currentYear, setCurrentYear] = useState('');
    const [author, setAuthor] = useState();
    const [data, setData] = useState<any>();
    const [dataCard, setDataCard] = useState<any>();
    const key = 'updatable';

    const saveResult = () =>{
        setStage(0)
        message.loading({ content: 'Loading...', key });
        setTimeout(() => {
          message.success({ content: 'Loaded!', key, duration: 2 });
        }, 1000);
    }

    const goHome = () => {
        setStage(0)
        history.push('/')
    }

    const getResult = async() =>{
        try {
            await axios.get('https://type.fit/api/quotes').then((response) => {
                setData(response.data);
                console.log(response.data)
              });
              
        } catch (err) {
            console.error(err);
        }
    }
    const getYear = () => {
        var d = new Date(); 
        var year = d.getFullYear();
        setCurrentYear(year.toString()) 
    }
    useEffect(() => {
        getResult()
        getYear()
    }, []);
    
    // const card = ApiGetCardData()

    const openBox = async() =>{
            setIsOpen(true)
        try {
            await axios.get('http://localhost:5000/results/1').then(async (response) => {
                const card = await response.data;
                setDataCard(card)
              });
        } catch (error) {
            console.log(error);
            return error;
        }
       
        // setTimeout( () => {
           
        // }, 1000);
       if(data) {
        console.log('------------Data----------', data)
           let random = Math.floor(Math.random() * data.length)
           setText(data[random].text);
           setAuthor(data[random].author);
           
        //    setTimeout( () => {
           
        // }, 3000);
       }else{
            console.error('fetch error');
       }
    }
    useEffect(() => {
        if(dataCard){
            setTimeout( () => {
                setIsClick(true)   
        }, 1000);
        setTimeout( () => {
                setLoading(true)     
        }, 2000);
        }
    }, [dataCard]);

    return (
       <Container header={{ title: 'Result', left: 'back' , right: (<HomeFilled onClick={goHome} />) }}>
          {isLoading ? 
          <>
          <Box justify='center' align='center' direction='column' >
           <CardContainer>
           <Row>
                <Col flex="60%">{dataCard?.goal} 
                <Row>
                    <Rate disabled defaultValue={dataCard?.rating} />
                </Row>
            </Col>
                <Col flex="auto">{dataCard?.type}</Col>
            </Row>
            <Row>
            <Box justify='center' align='center' direction='column' >
                    <ImageContainer> EMOji: {dataCard?.nft_card.emoji}, MSG: {dataCard?.nft_card.caption}, COLOR: {dataCard?.nft_card.bg_color} 
                    <Image
                    width={50}
                    src={dataCard?.qoutes.img}
                    preview={false}
                />
                    </ImageContainer>
                </Box>
            </Row>
            <Row>
                <Col flex="auto">{dataCard?.username}</Col>
                <Col flex="auto">#0000{dataCard?.id}</Col>
            </Row>
            <Box justify='center' align='center' direction='column' >
                <Text type="secondary" style={{height: '50px', overflow: 'hidden'}} >{text}</Text>
                <Text strong>{author}</Text>
                <Image
                    width={30}
                    src={logo}
                    preview={false}
                />
             <Text italic style={{fontSize: '10px'}}>&copy; Copyright {currentYear} Healing.com All Rights Reserved </Text>
            </Box>
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
            width={isOpen && isClick ? 100 : 150}
            src={isOpen && isClick ? Logo : OpenBox}
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