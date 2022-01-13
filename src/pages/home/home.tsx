import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Box, ButtonStyle } from 'theme/components';

function Home() {
    const history = useHistory();
    return (
       <Container header={{ title: 'Healing', right: 'menu' }}>
           <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 200px)'}}>
           <div>This is home page</div>
           <ButtonStyle  typebutton='Medium'  sizebutton={30} onClick={() => history.push('/intro')}>PLAY</ButtonStyle>
           </Box>
       </Container>
    );
}

export default Home;