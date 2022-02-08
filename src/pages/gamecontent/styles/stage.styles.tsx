import { Col, Input, Modal, Progress, Row } from 'antd';
import styled ,{ css, keyframes } from 'styled-components';

//----------------------Game Content----------------------//

export const ProgressBar = styled(Progress)`
    /* width: 90%; */
`;
export const DivProgress = styled.div`
    width: 90%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NotiModal = styled(Modal)`
    display: flex;
    justify-content: center;
.ant-modal-header{
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.ant-modal-content{
        width: 90%;
        border-radius: 20px;
    }

.ant-modal-body {
    padding: 5px;
    font-size: 16px;
}
`
export const TextHeadModal = styled.span`
`

//----------------------Stage 1----------------------//
export const VsContainer = styled.div`
    background-color: var(--White);
    width: 120px;
    height: 120px;
    max-width: 170px;
    max-height: 170px;
    border-radius: 50%;
    box-shadow: 0px 7px 30px 10px rgba(249, 161, 134, 0.2);
    display: flex;
    justify-content: center;
    padding: 5px;
    align-items: center;
    text-align: center;
    &:hover {
        background-color: #FDE3DB;
      }
`
export const VsText = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px;
    align-items: center;
    text-align: center;
    color: #8FB486;
    font-size: 18px;
`
export const GoalText = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px 0 0 0;
    align-items: center;
    text-align: center;
    color: #A6CD9C;
    font-size: 36px;
    font-weight: 700;
`
export const StarGoalText = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px 0 0 0;
    align-items: center;
    text-align: center;
    color: #A6CD9C;
    font-size: 24px;
    font-weight: 700;
`
export const RowVsgame = styled(Row)`
    margin-left: 0 !important;
    margin-right: 0 !important;
    row-gap: 0px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const WaterAnimation = keyframes`
0% {  border-bottom-left-radius: 60px; 
        border-bottom-right-radius: 50px;
        border-top-left-radius: 60px;
        border-top-right-radius: 80px;}
25% { border-bottom-left-radius: 40px;
        border-bottom-right-radius: 90px;  
        border-top-left-radius: 40px;
        border-top-right-radius: 50px;}
50% { border-bottom-left-radius: 70px;
        border-bottom-right-radius: 90px;  
        border-top-left-radius: 70px;
        border-top-right-radius: 50px;}
100% { border-bottom-left-radius: 60px; 
        border-bottom-right-radius: 50px;
        border-top-left-radius: 60px;
        border-top-right-radius: 80px;}
`
export const GoalContainer = styled.div`
    background-color: var(--White);
    width: 130px;
    height: 130px;
    max-width: 170px;
    max-height: 170px;
    border-radius: 45%;
    box-shadow: 0px 7px 30px #9fca8a;
    display: flex;
    justify-content: center;
    padding: 5px;
    align-items: center;
    text-align: center;
    margin: 50px;
    border: 5px solid #C3DEB5;
    animation: ${WaterAnimation} 5s;
    animation-iteration-count: infinite;
    
`
export const InputGoal = styled(Input)`
    border-bottom: 2px solid var(--Green-300);
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    outline: 0;
    background-color: transparent;
    color: #5B944D;
    font-size: 14px;
`
export const InputGoalStyle = styled(Input.Group)`
    display: flex !important;
    justify-content: center !important;
    align-content: center !important;
    margin: 20px;
    width: 80%;
    text-align: center;
`
export const StarCard = styled.div`
    width: 70%;
    height: 350px;
    border-radius: 20px;
    padding: 10px;
    margin: 16px 16px 40px 16px;
    box-shadow: 0px 0px 83px -23px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: white;
`
//----------------------Stage 2----------------------//
export const TextRandom = styled.div`
    min-width: 35%;
    width: fit-content;
    height: 65px;
    background-color: var(--White);
    color: var(--Green-300);
    padding: 15px 30px;
    font-size: var(--font-48);
    font-weight: 600;
    border-radius: var(--Radius-56);
    align-items: center;
    display: flex;
    justify-content: center;
`
type TypeModal = "fail" | "pass";
interface ModalProps {
    type?: TypeModal
  }

export const ConfirmModal = styled(Modal)<ModalProps>`
    display: flex;
    justify-content: center;
    z-index: 99;
    & .ant-modal-content {
        width: 75%;
        height: 280px;
        border-radius: 15px;
        margin-top: 20%;
    }
    & .ant-modal-header {
        height: 160px;
        ${( props: ModalProps ) =>  {
         if ( props.type === "fail"){
        return css`
         background-color: #FDE3DB;
        ` }
        else{
        return css`
         background-color: #C5E1B4;
        `
        }
    }}
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px 15px 0 0;
    }
    & .ant-modal-body {
        height: 80px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        flex-direction: column;
    }
    & .ant-modal-footer {
        height: 130px;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
`;
export const RowSpeedgame = styled(Row)`
    margin-left: 0 !important;
    margin-right: 0 !important;
    row-gap: 0px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const ColSpeedgame = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
type Typebutton = "bad" | "good";

interface ButtonProps {
    type?: Typebutton
  }
export const ButtonFace = styled.div<ButtonProps>`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${( props: ButtonProps ) =>  {
         if ( props.type === "bad"){
        return css`
         background-color: #8FB486;
        ` }
        else{
        return css`
         background-color: var(--White);
        `
        }
    }}
     &:hover {
        border: 5px solid #eeb5a3;
        box-shadow: 0px 7px 30px #F9A186;
      }
`
 export const PointDiv = styled.div`
 width: 70%t;
 margin: 10px 25px;
 border-radius: 25px;
 height: 50px;
 background-color: var(--White);
 display: flex;
justify-content: center;
align-items: center;
text-align: center;
 `
 export const ProgressStyle = styled(Progress)`
     &.ant-progress-inner {
        background-color: #FDE3DB !important;
        border-radius: 80px !important;
        height: 13px !important;
     }

     &.ant-progress-bg {
        background-color: #F9A186 !important;
     }
 `
 export const TimeText = styled.div`
     color: #F9A186;
     font-size: 18px;
 `
//----------------------Stage 3----------------------//
export const RandomContainer = styled.div`
    width: 90%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    background-color: var(--White);
    border-radius: 20px;
    margin: 10% 0px;
`
interface RandomProps {
    colorBg?: string
  }
export const ItemContainer = styled.div<RandomProps>`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    background-color: ${(props: RandomProps) => props.colorBg? props.colorBg  : '#A6CD9C'};
    border-radius: 10px;
`