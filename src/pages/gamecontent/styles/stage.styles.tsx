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
 &.ant-progress-steps {
    width: 25%;
    }
 &.ant-progress-steps-item {
    max-width: 25%;
 }
`
export const DivProgress = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextRandom = styled.div`
    min-width: 35%;
    background-color: var(--White);
    color: var(--Gray-600);
    padding: 5px 10px;
    font-size: var(--font-48);
    font-weight: 400;
    border-radius: var(--Radius-56);
    align-items: center;
    display: flex;
    justify-content: center;
`
