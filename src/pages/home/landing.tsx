import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Image } from 'antd';
import { useEffect, useState } from 'react';
import { Box } from 'theme/components';
import Logo  from 'assets/animation/logo.gif';
import Healing  from 'assets/animation/healing.gif';
import { Shadow } from './styles/home.styles';
import { useAppContext } from 'context/appContext';
import axios from 'axios';


function Landing() {
    const history = useHistory();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLoading, setLoading] = useState(false);
    const { setCardNum } = useAppContext();
 
    const formatCardNumber = async(response : any) => {
        const number = await response.result.length
        let formatNum = number.toString();
        while (formatNum.length < 3) formatNum = "0" + formatNum;
        await setCardNum(formatNum)
        console.log('Card Amount ------>', formatNum)
    }

    const fetchData = async () => {
        setLoading(true)
        try {
            const {data: response} = await axios.get('https://healing-project.herokuapp.com/results');
            await formatCardNumber(response);
          } catch (error) {
            console.error(error);
          }
          sessionStorage.setItem('token','true')
          setTimeout( () => { history.push('/')},3000)
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