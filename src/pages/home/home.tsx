import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Box, ButtonStyle } from 'theme/components';
import { Image } from 'antd';
import  logo  from 'assets/tests/healing_logo.png'

function Home() {
    const history = useHistory();
    return (
       <Container header={{ title: 'Healing', right: 'menu' }} footer>
           <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 200px)'}}>
           <div>This is home page</div>
           <Image
            width={100}
            src={logo}
            />
           <ButtonStyle  typebutton='Medium'  sizebutton={30} onClick={() => history.push('/intro')}>PLAY</ButtonStyle>
           </Box>
       </Container>
    );
}

export default Home;