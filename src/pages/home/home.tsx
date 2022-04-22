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
import axios from 'axios';
import Landing from './landing';

const { Title, Text } = Typography;

function Home() {
    const history = useHistory();
    const [visible, setVisibleModal] = useState(false)
    const [isAnimate, setIsAnimate] = useState(false)
    const { cardNum, setCardNum, setCardInfo } = useAppContext();
    const cardLeft = (200 - cardNum).toString();
    const revealRefs = useRef([]);
    const [starRate, setStarRate] = useState(0)
    const rateAudio = new Audio(SoundRate)
    revealRefs.current = [];

    const [isLoading, setLoading] = useState(true);
    const [windowDimenion, detectHW] = useState({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  
    const detectSize = () => {
      detectHW({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      })
    }
  
    useEffect(() => {
      window.addEventListener('resize', detectSize)
  
      return () => {
        window.removeEventListener('resize', detectSize)
      }
    }, [windowDimenion])

    const formatCardNumber = async(response : any) => {
        const number = await response.result.length
        let formatNum = number.toString();
        while (formatNum.length < 3) formatNum = "0" + formatNum;
        await setCardNum(formatNum)
        console.log('Card Amount ------>', formatNum)
    }

    const fetchData = async () => {
        try {
            const {data: response} = await axios.get('https://healing-project.herokuapp.com/results');
            await formatCardNumber(response);
            await setCardInfo(response.result)
          } catch (error) {
            console.error(error);
          }
          sessionStorage.setItem('token','true')
          setTimeout( () => { setLoading(false)},3000)
    };

    useEffect(() => {
        fetchData()
    },[cardNum, setCardNum, setCardInfo])

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
          setIsAnimate(true)
        }, 500);
    }, [])
    const flexStyle = {
        justifyContent: 'center',
        alignItem:'center',
        display: 'flex'
    }
    const sections = [
        {
          title: 'มาตั้งเป้าหมายในชีวิตกันเถอะ', 
          subtitle: 'ใช้ชีวิตอย่างสนุกโดย เริ่มต้นตั้งเป้าหมายที่อยากทำวันละเรื่องแล้วทำให้สำเร็จกันเถอะ ',
          img: Desc1
        },
        {
          title: 'เพลิดเพลินกับการตอบคำถามในรูปแบบใหม่', 
          subtitle: 'เราจะช่วยให้การค้นหาเป้าหมายของคุณตื่นเต้น และท้าทายมากขึ้นด้วยกลไกเกมมิฟิเคชัน',
          img: Desc2
        },
        {
          title: 'เก็บเป้าหมายในรูปแบบ Digital Asset', 
          subtitle: 'แปลงเป้าหมายของคุณสะสมเก็บไว้ในรูปแบบ Digital Asset เพื่อเตือนตัวเองเสมอให้ทำให้สำเร็จ',
          img: Desc3
        }
      ];
    const handleChangeRate = ( value:number) =>{
        rateAudio.play();
        rateAudio.volume = 0.8
        setStarRate(value)
    }
    const goToNFT = () => {
      sessionStorage.removeItem('token')
      window.location.href = 'https://www.figma.com/proto/8pMn3HEBtFPdjWnMlUKKDX/UI-Project?page-id=1775%3A4714&node-id=1775%3A4717&viewport=241%2C48%2C0.1&scaling=scale-down&starting-point-node-id=1775%3A4717&show-proto-sidebar=1'
    }
    const goToTurtorial = () => {
      sessionStorage.removeItem('token')
      window.location.href = 'https://www.figma.com/proto/8pMn3HEBtFPdjWnMlUKKDX/UI-Project?page-id=1790%3A7088&node-id=1808%3A5072&viewport=241%2C48%2C0.03&scaling=min-zoom&starting-point-node-id=1808%3A5072'
    }
    const goToForm = () => {
      sessionStorage.removeItem('token')
      window.location.href = 'https://forms.gle/KHey59mC6QmCxpbc8'
    }

    const RowStyle ={
      rowGap: "5px",
      margin: "20px 15px",
    }
    const ColStyle ={
      justifyContent: "center",
      display: "flex",
      alignItems: "center"
    }
    return (
       isLoading ? <Landing/> :
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
          <TextLink onClick={goToNFT}>ช่องทางขาย NFT</TextLink>
          <TextLink href="#about-us">เกี่ยวกับเรา</TextLink>
          <TextLink href="#rate-web">ให้คะแนนเว็บ</TextLink>
          <TextLink onClick={goToTurtorial}>คู่มือการใช้งานเว็บ</TextLink>
          </Box>
        </HomeDrawer>
           <ContainerHome>
           <Box justify='flex-end' align='center' direction='row' onClick={handleButton}
            style={{ padding: '30px 16px',position: 'absolute', zIndex: '999' }}> 
                <MenuIcon/>
            </Box>
            {/* ----Section1---- */}
           <SectionFirst id='home'>
            <Box justify='center' align='center' direction='column'
            style={{margin: '80px 0 95px 0',position: 'absolute', zIndex: '1'}}>
              {isAnimate && 
              <Animation type='bounceUp' duration={1000} delay={200}>
              <Image
              width={100}
              src={logo}
              preview={false}
          />
              </Animation>
             
              }
                   {isAnimate && 
                <Animation type='slideFromBottom' duration={1000} delay={200} style={flexStyle}>
                <Image
                    width={120}
                    src={healingText}
                    preview={false}
                />
                </Animation>
                    }
                  {/* <Title level={2}>Healing</Title> */}
                  <Text type="secondary" style={{fontWeight: '800' , textAlign: 'center'}}>Digital Assets Create simulator with Gamification</Text>
                  <ButtonStyle  
                  typebutton='Medium' 
                  backgroundbutton={'#F9A186'} 
                  sizebutton={50} 
                  style={{margin: '90px 0px'}}
                  onClick={() => history.push('/intro')}>สร้างการ์ด</ButtonStyle>
            </Box>
           <ImgContainer>
           <ImgSection  className="cloud"  width={730} src={cloud} preview={false} />
           <div style={{position: 'fixed'}}>
           <ImgSection  className="mountain"  width={windowDimenion.winWidth < 500 ? windowDimenion.winWidth : 500} src={mountain} preview={false}/>
           <ImgSection  className="Green_mountain"  width={windowDimenion.winWidth < 500 ? windowDimenion.winWidth : 500} src={greenMountain} preview={false}/>
           </div>
           <ImgSection  className="forest"  src={forest} preview={false}/>           
           </ImgContainer>

           </SectionFirst>
            {/* ----Section2---- */}
            <ContentSection id='about-us'>
            <Box justify='center' align='center' direction='column' style={{margin: '30px'}}>
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
                })} <Text style={{color: '#73A253',margin: '0', fontSize: '18px'}}></Text>
                 </Box>
                <Box justify='center' align='center' direction='row' style={{marginTop: '10px'}}>
                  <div style={{backgroundColor: '#AED1A7', padding: '0px 20px', fontSize: '18px', borderRadius: '20px'}}>
                  <Text style={{color: 'white',margin: '0', fontSize: '18px'}}>เหลือการ์ด {cardLeft} ใบ</Text>
                  </div>
                 </Box>
            </Box>
            <CarouselHome/>
            {windowDimenion.winWidth < 370 ? 
             <div style={{marginTop: '60px'}}>
             <Row style={RowStyle}>
             <Box justify='center' align='center' direction='column'>
               <BoxThird >
               <Image
                     width={130}
                     src={sections[0].img}
                     preview={false}
                 />
             </BoxThird>
               <Col  style={{justifyContent: "center",display: "flex",alignItems: "center",flexDirection: "column"}}>
               <h3 style={{ color: "#75a456",fontWeight: "700"}}>{sections[0].title}</h3>
               <span style={{fontSize: "12px",justifyContent: "center",display: "flex",textAlign: "center"}}>{sections[0].subtitle}</span>
               </Col>
               </Box>
             </Row> 

            <Row style={RowStyle}>
            <Box justify='center' align='center' direction='column'>
            <BoxThird >
            <Image
                  width={130}
                  src={sections[1].img}
                  preview={false}
              />
          </BoxThird>
            <Col style={{justifyContent: "center",display: "flex",alignItems: "center",flexDirection: "column"}}>
            <h3 style={{ color: "#75a456",fontWeight: "700"}}>{sections[1].title}</h3>
            <span style={{fontSize: "12px",justifyContent: "center",display: "flex",textAlign: "center"}}>{sections[1].subtitle}</span>
            </Col>
          </Box>
          </Row>
          <Row style={RowStyle}>
          <Box justify='center' align='center' direction='column'>
               <BoxThird >
               <Image
                     width={130}
                     src={sections[2].img}
                     preview={false}
                 />
             </BoxThird>
               <Col style={{justifyContent: "center",display: "flex",alignItems: "center",flexDirection: "column"}}>
               <h3 style={{ color: "#75a456",fontWeight: "700"}}>{sections[2].title}</h3>
               <span style={{fontSize: "12px",justifyContent: "center",display: "flex",textAlign: "center"}}>{sections[2].subtitle}</span>
               </Col>
               </Box>
             </Row>
             </div>
            : 
             <div style={{marginTop: '60px'}}>
             <Row style={RowStyle}>
               <Col span={10} style={ColStyle}> 
               <BoxThird >
               <Image
                     width={130}
                     src={sections[0].img}
                     preview={false}
                 />
             </BoxThird>
             </Col>
               <Col span={14}  style={{justifyContent: "center",display: "flex",alignItems: "center",flexDirection: "column"}}>
               <h3 style={{ color: "#75a456",fontWeight: "700"}}>{sections[0].title}</h3>
               <span style={{fontSize: "12px"}}>{sections[0].subtitle}</span>
               </Col>
             </Row> 
            <Row style={RowStyle}>
            <Col span={14}  style={{justifyContent: "center",display: "flex",alignItems: "center",flexDirection: "column"}}>
            <h3 style={{ color: "#75a456",fontWeight: "700"}}>{sections[1].title}</h3>
            <span style={{fontSize: "12px"}}>{sections[1].subtitle}</span>
            </Col>
            <Col span={10}  style={ColStyle}> 
            <BoxThird >
            <Image
                  width={130}
                  src={sections[1].img}
                  preview={false}
              />
          </BoxThird>
          </Col>
          </Row>
          <Row style={RowStyle}>
               <Col span={10}  style={ColStyle}> 
               <BoxThird >
               <Image
                     width={130}
                     src={sections[2].img}
                     preview={false}
                 />
             </BoxThird>
             </Col>
               <Col span={14}  style={{justifyContent: "center",display: "flex",alignItems: "center",flexDirection: "column"}}>
               <h3 style={{ color: "#75a456",fontWeight: "700"}}>{sections[2].title}</h3>
               <span style={{fontSize: "12px"}}>{sections[2].subtitle}</span></Col>
             </Row>
             </div>
            }
           
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
                  onClick={goToForm}>ประเมินเพิ่มเติมทีนี่</ButtonStyle>
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