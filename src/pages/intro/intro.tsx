import { Carousel } from 'antd';
import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Box, ButtonStyle } from 'theme/components';
import { ContentStyle } from './styles/intro.styles';

function Intro() {
    const history = useHistory();
    
    return (
        <Container header={{ title: 'Game Intro', left: 'back' }}>
           <Box justify='center' align='center' direction='row'>
            This is Game intro
            </Box>
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
        <Box justify='center' align='center' direction='row'>
           <ButtonStyle typebutton='Medium' pattern='Light' sizebutton={30} onClick={() => history.push('/userinfo')}> NEXT </ButtonStyle>
           </Box>
        </Container>
    );
}

export default Intro;