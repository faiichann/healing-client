import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();
    return (
       <Container header={{ title: 'Healing', right: 'menu' }}>
           <div>This is home page</div>
           <button onClick={() => history.push('/intro')}>PLAY</button>
       </Container>
    );
}

export default Home;