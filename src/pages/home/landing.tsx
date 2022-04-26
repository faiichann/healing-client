import Container from 'components/container/container'
import { Image } from 'antd';
import { Box } from 'theme/components';
import Logo  from 'assets/animation/logo.gif';
import Healing  from 'assets/animation/healing.gif';
import { Shadow } from './styles/home.styles';


function Landing() {
    return (
       <Container header={null}>
            <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 200px)'}}>
            <Image
            width={100}
            src={Logo}
            style={{margin: '20px 0'}}
            preview={false}
            />
            <Shadow />
            <Image
            width={180}
            src={Healing}
            preview={false}
            />
            </Box>
            
       </Container>
    );
}

export default Landing;