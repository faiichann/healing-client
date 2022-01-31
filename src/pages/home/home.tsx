import { useHistory } from 'react-router-dom';
import { Box, ButtonStyle } from 'theme/components';
import { Image, Typography } from 'antd';
import  logo  from 'assets/tests/healing_logo.png'
import  healingText  from 'assets/images/healing.png'
import mountain from 'assets/images/bgHome/mountain.png'
import greenMountain from 'assets/images/bgHome/green_mountain.png'
import forest from 'assets/images/bgHome/forest.png'
import cloud from 'assets/images/bgHome/cloud.png'
import { ContainerHome, LayoutHome, SectionFirst, SectionSecond, FooterHome, MenuIcon, ImgSection, ImgContainer } from './styles/home.styles';
import CarouselHome from 'components/carousels/CarouselHome';
const { Title, Text } = Typography;

function Home() {
    const history = useHistory();
    return (
       <LayoutHome>
           <ContainerHome>

            {/* ----Section1---- */}
           <SectionFirst>
            <Box justify='flex-end' align='center' direction='row' 
            style={{ padding: '16px',position: 'absolute', zIndex: '1' }}> 
                <MenuIcon/>
            </Box>
            <Box justify='center' align='center' direction='column'
            style={{margin: '80px 0 95px 0',position: 'absolute', zIndex: '1'}}>
                <Image
                    width={100}
                    src={logo}
                    preview={false}
                />
                <Image
                    width={120}
                    src={healingText}
                    preview={false}
                />
                  {/* <Title level={2}>Healing</Title> */}
                  <Text type="secondary" style={{fontWeight: '700'}}>Gamification Inspiration</Text>
                  <ButtonStyle  
                  typebutton='Medium'  
                  sizebutton={50} 
                  style={{margin: '90px 0px'}}
                  onClick={() => history.push('/intro')}>PLAY</ButtonStyle>
            </Box>
           <ImgContainer>
           <ImgSection  className="cloud"  width={730} src={cloud}/>
           <ImgSection  className="mountain"  src={mountain}/>
           <ImgSection  className="Green_mountain" src={greenMountain}/>
           <ImgSection  className="forest"  src={forest}/>           
           </ImgContainer>

           </SectionFirst>

           {/* ----Section2---- */}
           <SectionSecond>
            <CarouselHome/>
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