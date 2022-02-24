import { ImageContent } from "pages/home/styles/home.styles";
import { Carousel } from "antd";
import { Image, Typography } from 'antd';
import  logo  from 'assets/tests/healing_logo.png'
import styled from "styled-components";
const { Title } = Typography;

const ContentSlide = styled.div`
    height: max-content;
    text-align: center;
    background: transparent;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

const BoxSlide = styled.div`
    display: block;
    width: 100%;
`;

const CarouselStyle = styled(Carousel)`
    & .slick-dots-bottom{
    bottom: -30px !important;
}
`;
function CarouselHome() {
    const images = [ 
        {tile: 'Content 1' , img: logo} ,
        {tile: 'Content 2' , img: logo} , 
        {tile: 'Content 3' , img: logo} 
    ];

    return (
        <BoxSlide>
       <CarouselStyle autoplay dots>
        {images.map((image,index) => {
        return (
        <ContentSlide  key={index}>
            <Title level={5}>{image.tile}</Title>
            <ImageContent> 
            <Image
            width={100}
            src={image.img}
            />
            </ImageContent>
        </ContentSlide>
         );
        })}
        </CarouselStyle>
        </BoxSlide>
    )
}

export default CarouselHome
