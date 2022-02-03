import Container from 'components/container/container'
import { useAppContext } from 'context/appContext';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Avatar, Card, message, Image, Row, Col, Typography } from 'antd';
import { DivProgress, ProgressBar } from 'pages/gamecontent/styles/stage.styles';
import { HomeFilled } from '@ant-design/icons';
import { Box, ButtonStyle } from 'theme/components';
import Logo  from 'assets/animation/logo.gif';
import { CardContainer, ImageContainer } from './result.styles';
import  logo  from 'assets/tests/healing_logo.png'

const { Text, Link } = Typography;
const { Meta } = Card;
function Result() {
    const history = useHistory();
    const { stage, setStage, isName, isGoalType, isGoalMsg, isEmoji, isMsgBot, isColorBg } = useAppContext();
    const [isLoading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState();
    const [currentYear, setCurrentYear] = useState('');
    const [author, setAuthor] = useState();
    const [data, setData] = useState<any>();
    const key = 'updatable';

    const saveResult = () =>{
        setStage(0)
        message.loading({ content: 'Loading...', key });
        setTimeout(() => {
          message.success({ content: 'Loaded!', key, duration: 2 });
        }, 1000);
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

    const openBox = async() =>{
        setIsOpen(true)
       if(data) {
        console.log('------------Data----------', data)
           let random = Math.floor(Math.random() * data.length)
           setText(data[random].text);
           setAuthor(data[random].author);
           setTimeout( () => {
            setLoading(true)
        }, 2000);
       }else{
            console.error('fetch error');
       }
    }

    return (
       <Container header={{ title: 'Result', left: 'back' , right: (<HomeFilled onClick={()=> history.push('/')} />) }}>
          {isLoading ? 
          <>
          <Box justify='center' align='center' direction='column' >
           <CardContainer>
           <Row>
                <Col flex="60%">{isGoalMsg}</Col>
                <Col flex="auto">{isGoalType}</Col>
            </Row>
            <Row>
            <Box justify='center' align='center' direction='column' >
                    <ImageContainer> EMOji: {isEmoji}, MSG: {isMsgBot}, COLOR: {isColorBg} </ImageContainer>
                </Box>
            </Row>
            <Row>
                <Col flex="auto">{isName}</Col>
                <Col flex="auto">#00001</Col>
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
           {/* <Card
            style={{ width: 300 }}
            cover={
            <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
            }
            >
            <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={author}
            description={text}
            />
        </Card> */}
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
         <DivProgress><ProgressBar percent={stage * 25} steps={4} /></DivProgress>
         <Box justify='center' align='center' direction='column'onClick={openBox}
         style={{height: 'calc(100vh - 200px)', width: '100%'}}>
         {isOpen ?       
          <Image
            width={100}
            src={Logo}
            style={{margin: '20px 0'}}
            /> 
            : <div>TAP TO OPEN BOX !!!</div>}
         </Box>
         </Box>
         </>
          }
       </Container>
    );
}

export default Result;