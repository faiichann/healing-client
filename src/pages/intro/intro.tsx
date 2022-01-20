import { Typography } from 'antd';
import Container from 'components/container/container'
import { useHistory } from 'react-router-dom';
import { Box, ButtonStyle } from 'theme/components';
import { BoxSlide, BoxText, CarouselStyle, ContentStyle, ImageSlide, BoxContent } from './styles/intro.styles';
const { Title, Text } = Typography;

function Intro() {
    const history = useHistory();
    const data = [ 
        {title: 'แนะนำเว็บ' , des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, ', img: '1'} ,
        {title: 'วิธีเล่น' , des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, ', img: '2'} , 
        {title: 'Gamification' , des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, ', img: '3'} 
    ];
    return (
        <Container header={{ title: 'Introduction', left: 'back' }}>
            <BoxContent>
            <BoxSlide>
                <CarouselStyle>
            {data.map((item,index) => {
        return (
                <ContentStyle key={index}>
                    <ImageSlide>
                        {item.img}
                    </ImageSlide>
                    <BoxText>
                    <Title level={5}>{item.title}</Title>
                    <Text type="secondary">{item.des}</Text>
                    </BoxText>
                </ContentStyle>
        );
            })}
            </CarouselStyle>
            </BoxSlide>
            </BoxContent>
        <Box justify='center' align='center' direction='row'>
           <ButtonStyle typebutton='Medium' pattern='Light' sizebutton={40} onClick={() => history.push('/userinfo')}> NEXT </ButtonStyle>
           </Box>
        </Container>
    );
}

export default Intro;