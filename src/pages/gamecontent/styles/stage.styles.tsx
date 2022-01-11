import { Modal, Progress } from 'antd';
import styled from 'styled-components';

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

export const ProgressBar = styled(Progress)`
    /* width: 90%; */
 & .ant-progress-steps-outer {
    width: 100% !important;
 }

 & .ant-progress {
    width: 100% !important;
 }
 & .ant-progress-steps-item{
    width: 100% !important;
 }
`
export const DivProgress = styled.div`
width: 90%;
position: relative;
display: flex;
`