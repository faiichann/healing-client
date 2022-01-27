import { Col, Input, Modal, Progress, Row } from 'antd';
import styled ,{ css, keyframes } from 'styled-components';

//----------------------Game Content----------------------//

export const ProgressBar = styled(Progress)`
    /* width: 90%; */
 &.ant-progress-steps {
    width: 25%;
    }
 &.ant-progress-steps-item {
    max-width: 25%;
 }
`;

export const DivProgress = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
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
export const ConfirmModal = styled(Modal)`
    display: flex;
    justify-content: center;
    z-index: 99;
    & .ant-modal-content {
        width: 343px;
        height: 249px;
        border-radius: 15px;
        margin-top: 100px;
    }
    & .ant-modal-header {
        height: 89px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
    }
    & .ant-modal-body {
        height: 30px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
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