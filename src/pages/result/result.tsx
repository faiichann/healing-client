import Container from 'components/container/container'
import { useAppContext } from 'context/appContext';
import { useHistory } from 'react-router-dom';

function Result() {
    const history = useHistory();
    const { setStage } = useAppContext();
    const saveResult = () =>{
        setStage(1)
        history.push('/')
    }
    return (
       <Container header={{ title: 'Result', left: 'back' , right: 'menu' }}>
           <div>This is Your result</div>
           <button onClick={saveResult}>Save</button>
       </Container>
    );
}

export default Result;