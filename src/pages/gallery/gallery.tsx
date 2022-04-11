import Container from "components/container/container";
import { Image, Spin, Row, Typography, Col } from 'antd';
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "context/appContext";
import formatNumber from "utils/formatNumber";
import { ImageContainer, HeaderCard, RateStyle, GoalCircle, TextName, QuoteBox } from "pages/result/result.styles";
import { Box } from "theme/components";
import formatGoal from "utils/formatGoal";
import formatMonster from "utils/formatMonster";
import  logo  from 'assets/tests/healing_logo.png'
import { BoxCarousel, BoxGallery, CardGallery, CarouselCard, ContentGallery, InputSearch, SearchInput } from "./style/gallery.styles";
import { SearchOutlined } from '@ant-design/icons';
const { Text, Title} = Typography;

function Gallery() {
  const [isLoading, setIsLoading] = useState(true)
  const { cardInfo } = useAppContext();
  const [currentYear, setCurrentYear] = useState('');
  const [ data ] = useState(cardInfo);
  const [slide, setSlide] = useState(0);
  const slider = useRef<any|undefined>();

  const suffix = (
    <SearchOutlined
    onClick={()=> slider.current.goTo(slide - 1)}
    style={{
        fontSize: 22,
        color: '#41653A',
      }}
    />
  );
  const getYear = () => {
    var d = new Date(); 
    var year = d.getFullYear();
    setCurrentYear(year.toString()) 
}
  useEffect(() => {
    getYear()
    console.log(data)
    if(cardInfo){
      setTimeout(()=> {
        setIsLoading(false)
      },1000)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return (
     <>
      <Container header={{ title: 'Gallery Cards', left: 'back' }}>
         {isLoading ?
            <Box justify='center' align='center' direction='row' >
            <Spin size="large"  style={{marginTop: '20%'}} />
            </Box>
        :
        <>
         <Box justify='center' align='center' direction='column' style={{ marginTop: '10px !important' }} >
         <SearchInput>
           <Row>
             <Col  style={{ color: '#41653A', paddingTop: '20px', justifyContent: 'center'}}>ค้นหาใบที่ </Col>
             <Col><InputSearch placeholder="1"
             min={0}
             max={3}
            suffix={suffix}
            //  value={slide}
             onChange={(e : any)=> {
               setSlide(parseInt(e.target.value));
             }}
             /></Col>
           </Row>
        </SearchInput>
        <Text style={{marginTop: '5px', color: '#5B944D', fontSize: '18px'}}>ผลิตการ์ดไปแล้ว  <b>{data.length}</b>  ใบ</Text>
           <BoxGallery>
             <BoxCarousel>
               <CarouselCard 
               slidesToShow={1}
               dots={false}
               ref={ref => {
                 slider.current = ref;
               }}
               >
               {data.map((item: any, index: any) => {
 return(
   <ContentGallery  key={index} >
  <CardGallery rank={item.nft_card.bg_color}>
<Row style={{justifyContent: 'center' }} >
<HeaderCard>
<Title level={5} style={{color: '#737373', marginBottom: '-0.5em'}} >"{item.goal}"</Title>
<RateStyle disabled defaultValue={item.rating} />
</HeaderCard>
</Row>
<Row>
<Box justify='center' align='center' direction='column' >
<ImageContainer>
   {item.nft_card.emoji}
   <Image
  height={110}
  preview={false}
  src={formatMonster(item.type)}
  />
</ImageContainer>
</Box>
</Row>
<Row>
<Col span={8} style={{padding: '50px 0 0 0 '}} >
<TextName>{item.username}</TextName>
</Col>
<Col span={8} style={{justifyContent: 'center', display: 'flex'}} >
<GoalCircle>
<Image
  width={60}
  preview={false}
  src={formatGoal(item.type)}
  />
</GoalCircle>
</Col>
<Col span={8} style={{padding: '50px 0 0 0 '}}>
<TextName>#{formatNumber(item.card_id)}</TextName>
</Col>
</Row>
<Row>
<Box justify='center' align='center' direction='column' >
<QuoteBox>
<Text type="secondary"  style={{ fontWeight: '600'}}>"{item.qoutes.qoute}"</Text>
</QuoteBox>
<Text strong style={{ marginBottom: '10px'}}>{item.qoutes.aurthur}</Text>
</Box>
</Row>
<Row>
<Col flex="80%" style={{justifyContent: 'center', padding: '0px 10px 0 40px' , lineHeight: '10px' }}>
<Text italic style={{fontSize: '8px', fontWeight: '400', color: '#989898'}}>&copy; Copyright {currentYear} Healing.com All Rights Reserved </Text>
</Col>
<Col style={{justifyContent: 'center' }}>
<Image
width={30}
src={logo}
preview={false}
/></Col>
</Row>
</CardGallery>
<Text style={{marginTop: '5px', color: '#A6CD9C', fontSize: '18px'}}>ใบที่ <b>{index+1}</b> </Text>
</ContentGallery>
)
          }
         )}
                 
               </CarouselCard>
             </BoxCarousel>
           </BoxGallery>
           </Box>
           </>
        }
       </Container>
     </>
    )
}

export default Gallery;