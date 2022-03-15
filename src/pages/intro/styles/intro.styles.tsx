import { Carousel } from "antd";
import styled from "styled-components";

export const ContentStyle = styled.div`
    height: max-content;
    text-align: center;
    background: transparent;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
export const ImageSlide = styled.div`
    width: 230px;
    height: 230px;
    background: var(--White);
    border-radius: var(--Radius-12);
    margin: 40px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BoxSlide = styled.div`
    display: block;
    width: 100%;
  `;

export const BoxContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BoxText = styled.div`
display: flex;
width: 70%;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const CarouselStyle = styled(Carousel)`
& .slick-dots-bottom{
    position: relative;
    margin-top: 30px;
}
& .slick-dots li.slick-active button {
    background: #A6CD9C;
    opacity: 1;
    width: 10px;
    height: 10px;
}
& .slick-dots li button {
    width: 7px;
    height: 7px;
    border-radius: 50% !important;
    opacity: 1;
}
& .slick-dots li{
  width: 15px;
}
& .slick-dots li.slick-active {
    width: 15px;
}
`