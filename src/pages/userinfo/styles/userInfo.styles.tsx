import { Input, Carousel } from "antd";
import styled from "styled-components";

export const InputName = styled(Input)`
    border-bottom: 2px solid var(--Green-300);
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    outline: 0;
    background-color: transparent;
    color: #5B944D;
    font-size: 18px;
`
export const InputStyle = styled(Input.Group)`
    display: flex !important;
    justify-content: center !important;
    align-content: center !important;
    margin-bottom: 10px;
    width: 60%;
    text-align: center;
`
export const BoxSlide = styled.div`
    display: block;
    width: 100%;
  `;

export const CarouselStyle = styled(Carousel)`
& .slick-dots-bottom{
    position: relative;
    margin-top: 40px;
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
export const ContentAvatar = styled.div`
    max-height: 250px;
    text-align: center;
    background: transparent;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-fit: cover;
  `;
  export const ImageSlide = styled.div`
    width: 230px;
    height: 230px;
    background: transparent;
    border-radius: var(--Radius-12);
    margin: 40px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
`;
export const Shadow = styled.div`
    height: 40px;
    width: 215px;
    background-color: #93968e;
    opacity: 30%;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    transform: translateY(105px);
    z-index: -1;
`