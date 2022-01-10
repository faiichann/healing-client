import Container from 'components/container/container'
import { useAppContext } from 'context/appContext';
import { useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import GameStage1 from './stage1';
import GameStage2 from './stage2';
import GameStage3 from './stage3';


function GameContent() {
    const history = useHistory();
    const { stage} = useAppContext();

    useEffect(() => {
       if(stage === 4){
        history.push('/result')
       }
    }, [history, stage])

    return (
        <>
       <Container header={{ title: 'Game Content', left: 'back' }}>
           <h2>Stage : {stage}</h2>
           {stage === 1 && <GameStage1/>} 
           {stage === 2  && <GameStage2/>}
           {stage === 3 && <GameStage3/>}
       </Container>
       </>
    );
}

export default GameContent;