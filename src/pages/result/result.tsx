import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';

function Result() {
    const history = useHistory();
    return (
       <Container header={{ title: 'Result', left: 'back' , right: 'menu' }}>
           <div>This is Your result</div>
           <button onClick={() => history.push('/')}>Save</button>
       </Container>
    );
}

export default Result;