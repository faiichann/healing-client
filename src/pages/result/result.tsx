import Container from 'components/container/container'
import { useAppContext } from 'context/appContext';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Avatar, Card, message } from 'antd';
import { DivProgress, ProgressBar } from 'pages/gamecontent/styles/stage.styles';
import { HomeFilled } from '@ant-design/icons';
import { Box, ButtonStyle } from 'theme/components';

const { Meta } = Card;
function Result() {
    const history = useHistory();
    const { stage, setStage } = useAppContext();
    const [isLoading, setLoading] = useState(false);
    const [text, setText] = useState();
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
    useEffect(() => {
        getResult()
    }, []);

    const openBox = async() =>{
       if(data) {
        console.log('------------Data----------', data)
           let random = Math.floor(Math.random() * data.length)
           setText(data[random].text);
           setAuthor(data[random].author);
           setLoading(true)
       }else{

       }
    }
    return (
       <Container header={{ title: 'Result', left: 'back' , right: (<HomeFilled onClick={()=> history.push('/')} />) }}>
          {isLoading ? 
          <>
          <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 400px)', marginTop: '80px' }}>
           <div>This is Your result</div>
           <Card
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
        </Card>
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
         style={{height: '40vh', width: '100%'}} >
         <div>TAP TO OPEN BOX !!!</div>
         </Box>
         </Box>
         </>
          }
       </Container>
    );
}

export default Result;