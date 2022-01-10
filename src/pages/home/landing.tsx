import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';

function Landing() {
    const history = useHistory();
    const [isLoading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        setTimeout( () => {
            sessionStorage.setItem('token','true')
            history.push('/')
        }, 2000);
        console.log(isLoading)
    };
    useEffect(() => {
        fetchData()
    })
    return (
       <Container header={null}>
            <h1>loadingggggggggg</h1>
            <Spin/>
       </Container>
    );
}

export default Landing;