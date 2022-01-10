import { Modal } from 'antd';
import Container from 'components/container/container'
import { useAppContext } from 'context/appContext';
import { useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import GameStage1 from './stage1';
import GameStage2 from './stage2';
import GameStage3 from './stage3';

const ConfirmModal = styled(Modal)`
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

function GameContent() {
    const history = useHistory();
    const { stage, nextStage, visible, setVisible } = useAppContext();

    useEffect(() => {
       if(stage === 4){
        history.push('/result')
       }
    }, [history, stage])

    // const handleCancel = () => {
    //     setVisible(!visible)
    // };
    // const handleOk = () => {
    //     nextStage()
    //     setVisible(!visible)
    // };
    return (
        <>
        {/* <ConfirmModal
        title="Title"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>YOU PASS!!</p>
      </ConfirmModal>  */}

       <Container header={{ title: 'Game Content', left: 'back' }}>
           <h2>Stage : {stage}</h2>
           {stage === 1 && <GameStage1/>} 
           {stage === 2  && <GameStage2/>}
           {stage === 3 && <GameStage3/>}
       </Container>
       </>
    );
}

export default GameContent;