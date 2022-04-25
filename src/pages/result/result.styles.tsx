import { Rate, Tabs } from 'antd';
import styled from 'styled-components'
// import Common from 'assets/images/cards/Common.png'
// import Rare from 'assets/images/cards/Rare.png'
// import Epic from 'assets/images/cards/Epic.png'
// import Legendary from 'assets/images/cards/Legendary.png'

type TypeCard = "Common" | "Rare" | "Epic" | "Legendary";
interface CardsProps {
    rank?: TypeCard
  }
export const CardContainer = styled.div<CardsProps>`
    width: 317px;
    height: 472px;
    /* border-radius: 20px; */
    box-sizing: border-box; 
    background-image: ${(props: CardsProps) => props.rank? `url(${process.env.PUBLIC_URL}'cards/${props.rank}.png')` : `url(${process.env.PUBLIC_URL + 'cards/Common.png'})`};
    /* background-color: #FFFFFF; */
    /* box-shadow: 0px 0px 83px -23px rgba(0, 0, 0, 0.25); */
    margin: 10px 16px 24px 16px;
    padding: 25px;
    display: block;
    justify-content: center;
    align-items: center ;
    text-align: center;
    flex-direction: column;
    position: relative;
`
export const ImageContainer = styled.div`
    width: 80%;
    height: 120px;
    border-radius: 15px;
    background: transparent;
    margin: 12px 20px;
    padding: 10px;
    display: block;
    position: relative;
    font-size: 25px ;
`
export const HeaderCard = styled.div`
    font-size: 14px;
    width: fit-content;
    max-width: 90%;
    min-width: 70%;
    height: 40px;
    border-radius: 15px;
    background: var(--White);
    display: flex;
    justify-content: center;
    align-items: center ;
    text-align: center;
    flex-direction: column;
    padding: 0 5px;
`
export const RateStyle = styled(Rate)`
    font-size: 15px;
`
export const GoalCircle = styled.div`
    background: var(--White);
    width: 85px;
    height: 85px;
    border-radius: 50px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TextName = styled.div`
    font-size: 14px;
    color: #5B5B5B;
    font-weight: 600;
`
export const QuoteBox = styled.div`
    height: 80px;
    overflow: hidden;
    margin: 0 5px 5px 5px;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
`
export const TabsStyle = styled(Tabs)`
    & .ant-tabs-nav .ant-tabs-nav-wrap{
        justify-content: center;
}
`