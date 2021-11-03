import Container from 'components/container/container'
import { useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';

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
       <Container header={{ title: 'Stage 1', left: 'back' }}>
           <div>This is Game stage 1</div>
           <h2>Stage : {stage}</h2>
           <button onClick={nextStage}>next</button>
       </Container>
    );
}

export default GameContent;