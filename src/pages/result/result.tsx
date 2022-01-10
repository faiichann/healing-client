import Container from 'components/container/container'
import { useAppContext } from 'context/appContext';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Result() {
    const history = useHistory();
    const { setStage } = useAppContext();
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
           <h3>Quote : {text}</h3>
           <h4>Author: {author}</h4>
           <button onClick={saveResult}>Save</button> 
          </>
         : 
         <>
         <div onClick={openBox}>TAP TO OPEN BOX !!!</div>
         </>
          }
       </Container>
    );
}

export default Result;