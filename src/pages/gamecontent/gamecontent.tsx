import Container from 'components/container/container'
import { useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import GameStage1 from './stage1';
import GameStage2 from './stage2';
import GameStage3 from './stage3';

function GameContent() {
    const history = useHistory();
    const [stage,setStage] = useState<number>(1)

    const nextStage = () =>{
        setStage(stage+1)
    }
    useEffect(() => {
       if(stage === 4){
        history.push('/result')
       }
    }, [history, stage])

    return (
       <Container header={{ title: 'Game Content', left: 'back' }}>
           <h2>Stage : {stage}</h2>
           {stage === 1 && <GameStage1/>} 
           {stage === 2  && <GameStage2/>}
           {stage === 3 && <GameStage3/>}
           <button onClick={nextStage}>next</button>
       </Container>
    );
}

export default GameContent;