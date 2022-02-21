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
            const {data: response} = await axios.get('http://localhost:5000/results');
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
            await axios.get(`http://localhost:5000/results/${cardID}`).then((response) => {
                setDataCard(response.data)
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
                <Text type="secondary" style={{height: '50px', overflow: 'hidden'}} >{dataCard?.qoutes.qoute}</Text>
                <Text strong>{dataCard?.qoutes.aurthur}</Text>
                <Image
                    width={30}
                    src={dataCard?.qoutes.img}
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