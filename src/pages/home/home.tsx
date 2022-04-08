import { useHistory } from 'react-router-dom';
import { Box, ButtonStyle } from 'theme/components';
import { Col, Divider, Image, Rate, Row, Typography } from 'antd';
import {  useRef, useEffect, useState } from 'react';
import  logo  from 'assets/tests/healing_logo.png'
import  healingText  from 'assets/images/healing.png'
import mountain from 'assets/images/bgHome/mountain.png'
import greenMountain from 'assets/images/bgHome/green_mountain.png'
import forest from 'assets/images/bgHome/forest.png'
import cloud from 'assets/images/bgHome/cloud.png'
import { ContainerHome, LayoutHome, SectionFirst, FooterHome, MenuIcon, ImgSection, ImgContainer, NumBox, HomeDrawer, TextLink,  BoxThird, ContentSection, StarCardHome } from './styles/home.styles';
import CarouselHome from 'components/carousels/CarouselHome';
import Animation from 'theme/animations'
import { useAppContext } from 'context/appContext';
import SoundRate from 'assets/sounds/rate.mp3'
import Desc1 from 'assets/images/stage/Desc1.png'
import Desc2 from 'assets/images/stage/Desc2.png'
import Desc3 from 'assets/images/stage/Desc3.png'

const { Title, Text } = Typography;

function Home() {
    const history = useHistory();
    const [visible, setVisibleModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { cardNum } = useAppContext();
    const revealRefs = useRef([]);
    const [starRate, setStarRate] = useState(0)
    const rateAudio = new Audio(SoundRate)
    revealRefs.current = [];

    const desc = ['ระดับ 1', 'ระดับ 2', 'ระดับ 3', 'ระดับ 4', 'ระดับ 5'];
    const meaning = ['อืม รู้สึกยังไม่ชอบแหะ', 'อะ ไม่ได้รู้สึกอะไรนะเฉยๆ', 'ว้าว ก็พอใช้ได้อยู่นะเนี่ย', 'เริ่ด ค่อนข้างดีมากเลยแหะชอบๆ', 'สุดปัง ชอบมากเลยสนุกสุดๆ'];
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
    const sections = [
        {
          title: 'Waiting content1', 
          subtitle: 'Lorem, ipsum dolor',
          img: Desc1
        },
        {
          title: 'Waiting content2', 
          subtitle: 'Dignissimos placeat',
          img: Desc2
        },
        {
          title: 'Waiting content2', 
          subtitle: 'In ullam et nulla ',
          img: Desc3
        }
      ];
    const handleChangeRate = ( value:number) =>{
        rateAudio.play();
        rateAudio.volume = 0.8
        setStarRate(value)
    }
    return (
       <LayoutHome>
        <HomeDrawer
          closable={true}
          getContainer={false}
          maskClosable={true}
          size={'large'}
          style={{ position: 'absolute' }}
          placement="right"
          onClose={onClose}
          visible={visible}
        >
           <Box justify='flex-end' align='center' direction='column'  style={{margin: '10px 0' }}
           onClick={handleButton}>
            <Image
              width={100}
              src={logo}
              preview={false}
          />
           <Divider><TextLink style={{color: '#8FB486', fontSize: '30px'}}  href="#home">HEALING</TextLink></Divider>
          <TextLink onClick={() => history.push('/gallery')}>สมุดภาพ</TextLink>
          <TextLink href='https://www.figma.com/proto/8pMn3HEBtFPdjWnMlUKKDX/UI-Project?page-id=1503%3A4450&node-id=1503%3A4451&viewport=241%2C48%2C0.97&scaling=min-zoom'>ช่องทางขาย NFT</TextLink>
          <TextLink href="#about-us">เกี่ยวกับเรา</TextLink>
          <TextLink href="#rate-web">ให้คะแนนเว็บ</TextLink>
          <TextLink >คู่มือการใช้งานเว็บ</TextLink>
          </Box>
        </HomeDrawer>
           <ContainerHome>
           <Box justify='flex-end' align='center' direction='row' onClick={handleButton}
            style={{ padding: '16px',position: 'absolute', zIndex: '999' }}> 
                <MenuIcon/>
            </Box>
            {/* ----Section1---- */}
           <SectionFirst id='home'>
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
                  <Text type="secondary" style={{fontWeight: '700'}}>NFT Generation simulator with Gamification</Text>
                  <ButtonStyle  
                  typebutton='Medium'  
                  sizebutton={50} 
                  style={{margin: '90px 0px'}}
                  onClick={() => history.push('/intro')}>สร้างการ์ด</ButtonStyle>
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
            <ContentSection id='about-us'>
            <Box justify='center' align='center' direction='column' style={{margin: '20px'}}>
                <Text style={{color: '#73A253',margin: '0', fontSize: '24px'}}>ผลิตการ์ดไปแล้ว</Text>
                <Box justify='center' align='center' direction='row'>
                {cardNum.split("").map((text :string, i:number) => {
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
            <CarouselHome/>
            <div>
            <Row>
              <Col> 
              <BoxThird >
              <Image
                    width={130}
                    src={sections[0].img}
                    preview={false}
                />
            </BoxThird>
            </Col>
              <Col>
              <h2>{sections[0].title}</h2>
              <p>{sections[0].subtitle}</p></Col>
            </Row>
           <Row>
           <Col>
           <h2>{sections[1].title}</h2>
           <p>{sections[1].subtitle}</p></Col>
           <Col> 
           <BoxThird >
           <Image
                 width={130}
                 src={sections[1].img}
                 preview={false}
             />
         </BoxThird>
         </Col>
         </Row>
         <Row>
              <Col> 
              <BoxThird >
              <Image
                    width={130}
                    src={sections[2].img}
                    preview={false}
                />
            </BoxThird>
            </Col>
              <Col>
              <h2>{sections[2].title}</h2>
              <p>{sections[2].subtitle}</p></Col>
            </Row>
            </div>
         <div id='rate-web'>
         <Box justify='center' align='center' direction='column'>
         <Text style={{color: '#73A253',margin: '0', fontSize: '24px'}}>ให้คะแนนความพึงพอใจ</Text>
          <StarCardHome>
            <Rate defaultValue={starRate} tooltips={desc} onChange={handleChangeRate} value={starRate}
              style={{fontSize: '30px',marginTop: '20px'}}/>
              {starRate > 0 ? <span className="ant-rate-text">{meaning[starRate - 1]}</span> : 'ให้คะแนนกันเถอะ!'}
          </StarCardHome>    
              <Box justify='center' align='center' direction='row'>
              {starRate > 0 ?  
              <ButtonStyle  
                  typebutton='Medium'  
                  pattern='Light'
                  sizebutton={60} 
                  style={{margin: '10px 0px 20px 0px', cursor: 'pointer',position: 'absolute'}}
                  onClick={() => window.location.href ='https://forms.gle/x5FXUiT7BEdeqwVr9'}>ประเมินเพิ่มเพื่อลุ้นของรางวัล</ButtonStyle>
                   : null }
               </Box>
          </Box>
          </div>
        </ContentSection>
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