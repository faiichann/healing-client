import Container from "components/container/container";
import { Image, Spin, Row, Typography, Col } from 'antd';
import { useEffect, useState } from "react";
import { useAppContext } from "context/appContext";
import formatNumber from "utils/formatNumber";
import { CardContainer, ImageContainer, HeaderCard, RateStyle, GoalCircle, TextName, QuoteBox } from "pages/result/result.styles";
import { Box } from "theme/components";
import formatGoal from "utils/formatGoal";
import formatMonster from "utils/formatMonster";
import  logo  from 'assets/tests/healing_logo.png'
const { Text, Title} = Typography;

function Gallery() {
  const [isLoading, setIsLoading] = useState(true)
  const { cardInfo } = useAppContext();
  const [currentYear, setCurrentYear] = useState('');
  const [ data ] = useState(cardInfo);

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
          <Spin size="large" />
        :
          <Box justify='center' align='center' direction='column' >
            <Title level={3} style={{marginTop: '5px', color: '#737373'}}>All ({data.length}) </Title>
          {data.map((item: any, index: any) => {
 return(
  <CardContainer key={index} rank={item.nft_card.bg_color} style={{marginTop: '10px !important'}}>
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
</CardContainer>
)
          }
         )}
          </Box>
        }
       </Container>
     </>
    )
}

export default Gallery;