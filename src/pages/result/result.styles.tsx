import styled, { css } from 'styled-components'
// import Common from 'assets/images/cards/Common.png'
// import Rare from 'assets/images/cards/Rare.png'
// import Epic from 'assets/images/cards/Epic.png'
// import Legendary from 'assets/images/cards/Legendary.png'

type TypeCard = "Common" | "Rare" | "Epic" | "Legendary";
interface CardsProps {
    rank?: TypeCard
  }
export const CardContainer = styled.div<CardsProps>`
    width: 285px;
    height: 440px;
    /* border-radius: 20px; */
    box-sizing: border-box; 
    background-image: ${(props: CardsProps) => props.rank? `url(${process.env.PUBLIC_URL}'cards/${props.rank}.png')` : `url(${process.env.PUBLIC_URL + 'cards/Common.png'})`};
    /* background-color: #FFFFFF; */
    /* box-shadow: 0px 0px 83px -23px rgba(0, 0, 0, 0.25); */
    margin: 40px 16px 50px 16px;
    padding: 25px;
    display: block;
    position: relative;
`
export const ImageContainer = styled.div`
    width: 80%;
    height: 150px;
    border-radius: 15px;
    background: transparent;
    margin: 20px;
    padding: 10px;
    display: block;
    position: relative;
`