import { Carousel } from 'antd';
import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { ContentStyle } from './styles/intro.styles';

function Intro() {
    const history = useHistory();
    
    return (
        <Container header={{ title: 'Game Intro', left: 'back' }}>
        <div>
            This is Game intro
        </div>
        <Carousel>
    <div>
    <ContentStyle>1</ContentStyle>
    </div>
    <div>
    <ContentStyle>2</ContentStyle>
    </div>
    <div>
    <ContentStyle>3</ContentStyle>
    </div>
  </Carousel>
        <button onClick={() => history.push('/userinfo')}>next</button>
        </Container>
    );
}

export default Intro;