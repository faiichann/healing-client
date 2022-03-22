import { useHistory } from 'react-router-dom';
import { Box, ButtonStyle } from 'theme/components';
import { Image, Typography } from 'antd';
import {  useRef, useEffect, useState } from 'react';
import  logo  from 'assets/tests/healing_logo.png'
import  healingText  from 'assets/images/healing.png'
import mountain from 'assets/images/bgHome/mountain.png'
import greenMountain from 'assets/images/bgHome/green_mountain.png'
import forest from 'assets/images/bgHome/forest.png'
import cloud from 'assets/images/bgHome/cloud.png'
import { ContainerHome, LayoutHome, SectionFirst, FooterHome, MenuIcon, ImgSection, ImgContainer, NumBox, HomeDrawer, TextLink, TextTitle,  BoxThird, ContentSection } from './styles/home.styles';
import CarouselHome from 'components/carousels/CarouselHome';
import Animation from 'theme/animations'
// import { useAppContext } from 'context/appContext';

const { Title, Text } = Typography;

function Home() {
    const history = useHistory();
    const [visible, setVisibleModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    // const { cardNum } = useAppContext();
    const revealRefs = useRef([]);
    revealRefs.current = [];

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
          title: 'Architecto aliquam', 
          subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.'
        },
        {
          title: 'Ceritatis placeat', 
          subtitle: 'Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?'
        },
        {
          title: 'Vitae voluptates', 
          subtitle: 'In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.'
        }
      ];
  
    return (
       <LayoutHome>
           <ContainerHome>
           <HomeDrawer
          title={<TextTitle>ข้อมูลเพิ่มเติม</TextTitle>}
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <p><TextLink href='https://www.figma.com/proto/8pMn3HEBtFPdjWnMlUKKDX/UI-Project?page-id=1503%3A4450&node-id=1503%3A4451&viewport=241%2C48%2C0.97&scaling=min-zoom'>-การขาย NFT</TextLink></p>
          <p><TextLink href='https://www.notion.so/Project-Info-850372c08f6a44a793028d1f7fe38905'>-ข้อมูลเพิ่มเติมของโปรเจค</TextLink></p>
          <p><TextLink href='https://forms.gle/x5FXUiT7BEdeqwVr9'>-แบบประเมินความพึงพอใจ</TextLink></p>
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
            <ContentSection>
            <Box justify='center' align='center' direction='column' style={{margin: '20px'}}>
                <Text style={{color: '#73A253',margin: '0', fontSize: '24px'}}>ผลิตการ์ดไปแล้ว</Text>
                {/* <Box justify='center' align='center' direction='row'>
                {cardNum.split("").map((text :string, i:number) => {
                return (
                   
                    <div key={i}>
                        <NumBox>
                        {text}
                        </NumBox>
                    </div>
                   
                    );
                })}
                 </Box> */}
                 <ButtonStyle  
                  typebutton='Medium'  
                  pattern='Text'
                  sizebutton={50} 
                  style={{margin: '10px 0px', cursor: 'pointer'}}
                  onClick={() => history.push('/gallery')}>สมุดภาพ</ButtonStyle>
            </Box>
            <CarouselHome/>
            {
          sections.map(({title, subtitle}) => (
            <BoxThird key={title}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </BoxThird>
          ))
        }
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