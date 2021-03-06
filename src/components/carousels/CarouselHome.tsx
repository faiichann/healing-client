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
const TitleStyle = styled(Title)`
&&&{
    color: #73a253;
    font-weight: 600 ;
}
`;
const CarouselStyle = styled(Carousel)`
    & .slick-dots-bottom{
    bottom: -30px !important;
}
`;
function CarouselHome() {
    const images = [ 
        {tile: 'Your Goal x NFT Cards' , img: Home1} ,
        {tile: 'Gamification Generator' , img: Home2} , 
        {tile: 'Finding your Goal!!' , img: Home3} ,
        {tile: 'Healing Project Theme Concept' , img: Home4} ,
    ];

    return (
        <BoxSlide>
       <CarouselStyle autoplay dots>
        {images.map((image,index) => {
        return (
        <ContentSlide  key={index}>
            <ImageContent> 
            <Image
            width={500}
            src={image.img}
            preview={false}
            />
            </ImageContent>
            <TitleStyle level={5}>{image.tile}</TitleStyle>
        </ContentSlide>
         );
        })}
        </CarouselStyle>
        </BoxSlide>
    )
}

export default CarouselHome
