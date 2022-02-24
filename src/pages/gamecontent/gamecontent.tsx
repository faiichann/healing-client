import { Col } from 'antd';
import Container from 'components/container/container'
import { useAppContext } from 'context/appContext';
import { useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Box, ButtonStyle } from 'theme/components';
import Cutscene from './cutScene';
import GameStage1 from './stage1';
import GameStage2 from './stage2';
import GameStage3 from './stage3';
import { DivProgress, ProgressBar, TextHeadModal, NotiModal } from './styles/stage.styles';
import { LeftOutlined } from '@ant-design/icons';

const ColHeader = styled(Col)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function GameContent() {
    const history = useHistory();
    const { stage, setStage } = useAppContext();
    const [isShowNotification, setIsShowNotification] = useState(false);
    const showModal = () => {
        setIsShowNotification(true);
    };
    const handleCancel = () => {
        setIsShowNotification(false);
    };
    const handleOk = () => {
        history.goBack();
        setStage(0)
        setIsShowNotification(false);
    };

    useEffect(() => {
       if(stage === 4){
        history.push('/result')
       }
    }, [history, stage])
    const StyleButtonSpecial = {
        boxShadow: 'none',
        margin: '10px 10px' 
      }
    return (
        <>
       <Container header={{ title: 'Game Content', 
       left: ( 
       <ColHeader>
       <LeftOutlined onClick={showModal}/>
       </ColHeader>), }}>
       <NotiModal
                visible={isShowNotification}
                onOk={handleOk}
                onCancel={handleCancel}
                title={<TextHeadModal>ออกจากหน้านี้?</TextHeadModal>}
                closable={false}
                footer={[
                    <Box justify='center' align='center' direction='row'>
                    <ButtonStyle key="back" typebutton='Medium' backgroundbutton={'#F9A186'} style={StyleButtonSpecial} sizebutton={40} onClick={handleOk}>
                        ออก
                    </ButtonStyle>,
                    <ButtonStyle key="submit" typebutton='Medium' backgroundbutton={'#A6CD9C'} style={StyleButtonSpecial} sizebutton={40} onClick={handleCancel}>
                        เล่นต่อ
                    </ButtonStyle>
                    </Box>
                ]}
            >
                <Box justify='center' align='center' direction='row'>
                <p>หากออกขณะเล่นระบบจะไม่บันทึกข้อมูล</p>
                </Box>
            </NotiModal>
       <DivProgress style={{width: '100%'}}><ProgressBar percent={stage * 25} showInfo={false} strokeWidth={10}/></DivProgress>
       <Box justify='center' align='center' direction='column'>
           {stage === 0 && <Cutscene/>}
           {stage === 1 && <GameStage1/>} 
           {stage === 2  && <GameStage2/>}
           {stage === 3 && <GameStage3/>}
       </Box>
       </Container>
       </>
    );
}

export default GameContent;