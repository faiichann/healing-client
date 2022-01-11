import Container from 'components/container/container'
import { useAppContext } from 'context/appContext';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Avatar, Card } from 'antd';
import { DivProgress, ProgressBar } from 'pages/gamecontent/styles/stage.styles';

const { Meta } = Card;
function Result() {
    const history = useHistory();
    const { stage, setStage } = useAppContext();
    const [isLoading, setLoading] = useState(false);
    const [text, setText] = useState();
    const [author, setAuthor] = useState();
    const [data, setData] = useState<any>();

    const saveResult = () =>{
        setStage(1)
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
       <Container header={{ title: 'Result', left: 'back' , right: 'menu' }}>
          {isLoading ? 
          <>
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
           <button onClick={saveResult}>Save</button> 
          </>
         : 
         <>
         <DivProgress><ProgressBar percent={stage * 25} steps={4} /></DivProgress>
         <div onClick={openBox}>TAP TO OPEN BOX !!!</div>
         </>
          }
       </Container>
    );
}

export default Result;