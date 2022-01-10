import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';

function Intro() {
    const history = useHistory();
    return (
        <Container header={{ title: 'Game Intro', left: 'back' }}>
        <div>
            This is Game intro
        </div>
       
        <button onClick={() => history.push('/userinfo')}>next</button>
        </Container>
    );
}

export default Intro;