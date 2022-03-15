import { ImageContent } from "pages/home/styles/home.styles";
import { Carousel } from "antd";
import { Image, Typography } from 'antd';
import Home1 from 'assets/images/stage/Home1.png'
import Home2 from 'assets/images/stage/Home2.png'
import Home3 from 'assets/images/stage/Home3.png'
import Home4 from 'assets/images/stage/Home4.png'
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
        {tile: 'Healing Project Theme Concept' , img: Home1} ,
        {tile: 'Finding your Goal!!' , img: Home2} , 
        {tile: 'Pixel Art Preview' , img: Home3} ,
        {tile: 'Your NFT Cards ' , img: Home4} ,
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
            width={500}
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
