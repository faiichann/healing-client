import { useHistory } from 'react-router-dom';
import { Box, ButtonStyle } from 'theme/components';
import { Image, Typography } from 'antd';
import { useEffect, useState } from 'react';
import  logo  from 'assets/tests/healing_logo.png'
import  healingText  from 'assets/images/healing.png'
import mountain from 'assets/images/bgHome/mountain.png'
import greenMountain from 'assets/images/bgHome/green_mountain.png'
import forest from 'assets/images/bgHome/forest.png'
import cloud from 'assets/images/bgHome/cloud.png'
import { ContainerHome, LayoutHome, SectionFirst, SectionSecond, FooterHome, MenuIcon, ImgSection, ImgContainer, NumberDisplay, NumBox, HomeDrawer } from './styles/home.styles';
import CarouselHome from 'components/carousels/CarouselHome';
import Animation from 'theme/animations'

const { Title, Text } = Typography;

function Home() {
    const history = useHistory();
    let numShow = '001'
    const [visible, setVisibleModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleButton = () => {
     setVisibleModal(!visible)
    };
  
    const onClose = () => {
      setVisibleModal( false)
    };
    useEffect(() => {
        setTimeout( () => {
            setIsLoading(true)
        }, 500);
    }, [])
    const flexStyle = {
        justifyContent: 'center',
        alignItem:'center',
        display: 'flex'
    }
    return (
       <LayoutHome>
           <ContainerHome>
           <HomeDrawer
          title="-ข้อมูลเพิ่มเติม"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </HomeDrawer>
            {/* ----Section1---- */}
           <SectionFirst>
            <Box justify='flex-end' align='center' direction='row' onClick={handleButton}
            style={{ padding: '16px',position: 'absolute', zIndex: '1' }}> 
                <MenuIcon  />
            </Box>
            <Box justify='center' align='center' direction='column'
            style={{margin: '80px 0 95px 0',position: 'absolute', zIndex: '1'}}>
              {isLoading && 
              <Animation type='bounceUp' duration={1000} delay={200}>
              <Image
              width={100}
              src={logo}
              preview={false}
          />
              </Animation>
             
              }
                   {isLoading && 
                <Animation type='slideFromBottom' duration={1000} delay={200} style={flexStyle}>
                <Image
                    width={120}
                    src={healingText}
                    preview={false}
                />
                </Animation>
                    }
                  {/* <Title level={2}>Healing</Title> */}
                  <Text type="secondary" style={{fontWeight: '700'}}>Gamification Inspiration</Text>
                  <ButtonStyle  
                  typebutton='Medium'  
                  sizebutton={50} 
                  style={{margin: '90px 0px'}}
                  onClick={() => history.push('/intro')}>PLAY</ButtonStyle>
            </Box>
           <ImgContainer>
           <ImgSection  className="cloud"  width={730} src={cloud} preview={false} />
           <div style={{position: 'fixed'}}>
           <ImgSection  className="mountain"  src={mountain} preview={false}/>
           <ImgSection  className="Green_mountain" src={greenMountain} preview={false}/>
           </div>
           <ImgSection  className="forest"  src={forest} preview={false}/>           
           </ImgContainer>

           </SectionFirst>
            {/* ----Section2---- */}
            <NumberDisplay>
            <Box justify='center' align='center' direction='column' style={{margin: '20px'}}>
                <Text style={{color: '#73A253',margin: '0', fontSize: '24px'}}>ผลิตการ์ดไปแล้ว</Text>
                <Box justify='center' align='center' direction='row'>
                {numShow.split("").map((text :string, i:number) => {
                return (
                   
                    <div key={i}>
                        <NumBox>
                        {text}
                        </NumBox>
                    </div>
                   
                    );
                })}
                 </Box>
            </Box>
            </NumberDisplay>
           {/* ----Section3---- */}
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