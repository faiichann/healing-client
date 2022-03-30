import { Carousel, Input } from "antd";
import styled from "styled-components";

export const BoxGallery = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BoxCarousel = styled.div`
    display: block;
    width: 100%;
  `;

export const CarouselCard = styled(Carousel)`
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
export const ContentGallery = styled.div`
    height: max-content;
    text-align: center;
    background: transparent;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

export const SearchInput = styled(Input.Group)`
display: flex !important;
justify-content: center !important;
align-content: center !important;
margin-bottom: 10px;
width: 80%;
text-align: center;
color: #A6CD9C;
`
export const InputSearch = styled(Input)`
&.ant-input-affix-wrapper > input.ant-input{
    background: transparent;
}
    border-bottom: 2px solid var(--Green-300);
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    outline: 0;
    background-color: transparent;
    color: #5B944D;
    font-size: 18px;
`

type TypeCard = "Common" | "Rare" | "Epic" | "Legendary";
interface CardsProps {
    rank?: TypeCard
  }

export const CardGallery = styled.div<CardsProps>`
    width: 317px;
    height: 472px;
    /* border-radius: 20px; */
    box-sizing: border-box; 
    background-image: ${(props: CardsProps) => props.rank? `url(${process.env.PUBLIC_URL}'cards/${props.rank}.png')` : `url(${process.env.PUBLIC_URL + 'cards/Common.png'})`};
    /* background-color: #FFFFFF; */
    /* box-shadow: 0px 0px 83px -23px rgba(0, 0, 0, 0.25); */
    margin: 10px 16px 5px 16px;
    padding: 25px;
    display: block;
    justify-content: center;
    align-items: center ;
    text-align: center;
    flex-direction: column;
    position: relative;
`