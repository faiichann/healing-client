import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { Box } from 'theme/components';

function Landing() {
    const history = useHistory();
    const [isLoading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        setTimeout( () => {
            sessionStorage.setItem('token','true')
            history.push('/')
        }, 3000);
        console.log(isLoading)
    };
    useEffect(() => {
        fetchData()
    })
    return (
       <Container header={null}>
            <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 200px)'}}>
            <Spin size='large'/>
            <h4>loading....</h4>
            </Box>
            
       </Container>
    );
}

export default Landing;