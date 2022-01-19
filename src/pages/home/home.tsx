import { useHistory } from 'react-router-dom';
import { Box, ButtonStyle } from 'theme/components';
import { Image, Typography } from 'antd';
import  logo  from 'assets/tests/healing_logo.png'
import { ContainerHome, ImageContent, LayoutHome, SectionFirst, SectionSecond, FooterHome, MenuIcon } from './styles/home.styles';
import CarouselHome from 'components/carousels/CarouselHome';
const { Title, Text } = Typography;

function Home() {
    const history = useHistory();
    return (
       <LayoutHome>
           <ContainerHome>

            {/* ----Section1---- */}
           <SectionFirst>
            <Box justify='flex-end' align='center' direction='row'> 
                <MenuIcon/>
            </Box>
            <Box justify='center' align='center' direction='column'
            style={{margin: '50px 0 95px 0'}}>
                <Image
                    width={100}
                    src={logo}
                />
                  <Title level={2}>Healing</Title>
                  <Text type="secondary">Gamification Inspiration</Text>
            </Box>
           
           <ButtonStyle  typebutton='Medium'  sizebutton={50} onClick={() => history.push('/intro')}>PLAY</ButtonStyle>
           </SectionFirst>

           {/* ----Section2---- */}
           <SectionSecond>
            {/* <CarouselHome/> */}
            <ImageContent>
            <Image
            width={100}
            src={logo}
            />
            </ImageContent>
           </SectionSecond>

           {/* ----footer---- */}
           <FooterHome>
           <Title level={5}>Develop by</Title>
           <Text type="secondary">Nichkamon Promputta</Text>
           <Text type="secondary">Peerapat Kaewmanee</Text>
           </FooterHome>
           </ContainerHome>
       </LayoutHome>
    );
}

export default Home;