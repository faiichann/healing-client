import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Image } from 'antd';
import { useEffect, useState } from 'react';
import { Box } from 'theme/components';
import Logo  from 'assets/animation/logo.gif';
import Healing  from 'assets/animation/healing.gif';
import { Shadow } from './styles/home.styles';

function Landing() {
    const history = useHistory();
    const [isLoading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        setTimeout( () => {
            sessionStorage.setItem('token','true')
            history.push('/')
        }, 4000);
        console.log(isLoading)
    };
    useEffect(() => {
        fetchData()
    })
    return (
       <Container header={null}>
            <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 200px)'}}>
            <Image
            width={100}
            src={Logo}
            style={{margin: '20px 0'}}
            />
            <Shadow />
            <Image
            width={180}
            src={Healing}
            />
            </Box>
            
       </Container>
    );
}

export default Landing;