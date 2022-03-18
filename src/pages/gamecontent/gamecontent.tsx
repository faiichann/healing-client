import { Button, Col } from 'antd';
import Container from 'components/container/container'
import { useAppContext } from 'context/appContext';
import { useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Box, ButtonStyle } from 'theme/components';
import Cutscene from './cutScene';
import GameStage1 from './stage1';
import GameStage2 from './stage2';
import GameStage3 from './stage3';
import { DivProgress, ProgressBar, TextHeadModal, NotiModal } from './styles/stage.styles';
import { LeftOutlined } from '@ant-design/icons';
import soundBg from 'assets/sounds/soundBg2.mp3'

const ColHeader = styled(Col)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ButtonSound = styled(Button)`
    border-radius: 8px;
    border: none;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    display: block;
    padding: 5px 0px 0px 0px !important;
    width: 36px;
    height: 36px;
`;
function GameContent() {
    const history = useHistory();
    const { stage, setStage } = useAppContext();
    const [isShowNotification, setIsShowNotification] = useState(false);
    const [audio, setAudio] = useState(new Audio(soundBg));
    const [playing, setPlaying] = useState(true);

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
        setPlaying(false);
        audio.pause();
       }
    }, [history, stage])

    const StyleButtonSpecial = {
        boxShadow: 'none',
        margin: '10px 10px' 
      }
//------------Sound----------------
useEffect(() => {
    if(playing){
        audio.play();
        audio.volume = 0.6
        audio.loop = true;
    }else{
        audio.pause();
    }
    console.log(playing)
  },
  [audio, playing]
);
const toggle = () => {
    setPlaying(!playing);
};
    return (
        <>
       <Container header={{ title: 'Game Content', 
       left: ( 
       <ColHeader>
       <LeftOutlined onClick={showModal}/>
       </ColHeader>), right: (
  <div onClick={toggle}>
  <ButtonSound>
      {playing? (
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15.9069 14.8595V6.40947H15.9251V1.34987C15.9259 1.23944 15.9031 1.13011 15.8585 1.02911C15.8138 0.928114 
15.7481 0.837759 15.6659 0.764022C15.5837 0.690286 15.4868 0.634848 15.3815 0.601379C15.2763 0.56791 15.1651 0.557171 15.0554 0.569874L4.05223 1.84127C3.86104 1.86308 3.68466 1.95479 3.55699 2.09877C3.42933 2.24275 3.35939 2.42885 3.36063 2.62127V4.18907C3.36063 4.20727 3.35023 4.22417 3.35023 4.24367V13.7207C3.24431 
13.7039 3.13755 13.6931 3.03043 13.6882C2.46502 13.6853 1.91096 13.8467 1.43551 14.1527C0.960065 14.4587 0.583695 14.8962 0.352107 15.412C0.120519 15.9278 0.0436753 16.4998 0.130908 17.0584C0.218142 17.6171 0.465698 18.1384 0.843516 18.559C1.22133 18.9796 1.71316 19.2815 2.25926 19.428C2.80537 19.5745 3.38226 19.5593 
3.91988 19.3842C4.4575 19.2091 4.93272 18.8817 5.28784 18.4417C5.64295 18.0018 5.86267 17.4681 5.92033 16.9057C5.93353 16.8583 5.94352 16.8101 5.95023 16.7614V8.25677C5.94896 8.06455 6.01871 7.87862 6.14611 7.73467C6.27351 7.59072 6.44957 7.49888 6.64053 7.47677L12.4372 6.80727C12.5469 6.79457 12.6581 6.80531 12.7633 
6.83878C12.8686 6.87225 12.9655 6.92769 13.0477 7.00142C13.1299 7.07516 13.1956 7.16551 13.2403 7.26651C13.2849 7.36751 13.3077 7.47684 13.3069 7.58727V12.4142C13.2159 12.4064 13.1262 12.3869 13.0326 12.3869C12.5829 12.3874 12.1393 12.4915 11.7363 12.6913C11.3333 12.891 10.9818 13.181 10.709 13.5386C10.4363 13.8962 
10.2496 14.3119 10.1636 14.7534C10.0776 15.1948 10.0944 15.6502 10.2129 16.0841C10.3439 16.5731 10.6009 17.0191 10.9584 17.3776C11.316 17.736 11.7613 17.9942 12.25 18.1264C12.6839 18.2449 13.1393 18.2617 13.5807 18.1757C14.0222 18.0897 14.4379 17.903 14.7955 17.6303C15.1531 17.3575 15.4431 17.006 15.6428 16.603C15.8426 
16.2 15.9467 15.7564 15.9472 15.3067C15.9457 15.1568 15.9322 15.0072 15.9069 14.8595Z"
                  fill="#3A8CE4"
              />
          </svg>
      ) : (
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M18.9069 17.8595V9.40947H18.9251V4.34987C18.9258 4.23944 18.9031 4.13011 18.8584 4.02911C18.8137 3.92811 18.7481 
3.83776 18.6659 3.76402C18.5837 3.69029 18.4867 3.63485 18.3815 3.60138C18.2763 3.56791 18.1651 3.55717 18.0554 3.56987L7.0522 
4.84127C6.86101 4.86308 6.68462 4.95479 6.55696 5.09877C6.42929 5.24275 6.35936 5.42885 6.3606 5.62127V7.18907C6.3606 7.20727 
6.3502 7.22417 6.3502 7.24367V16.7207C6.24428 16.7039 6.13752 16.6931 6.0304 16.6882C5.46499 16.6853 4.91093 16.8467 4.43548 
17.1527C3.96003 17.4587 3.58366 17.8962 3.35208 18.412C3.12049 18.9278 3.04364 19.4998 3.13088 20.0584C3.21811 20.6171 3.46567 
21.1384 3.84349 21.559C4.2213 21.9796 4.71313 22.2815 5.25923 22.428C5.80534 22.5745 6.38223 22.5593 6.91985 22.3842C7.45747 
22.2091 7.93269 21.8817 8.2878 21.4417C8.64292 21.0018 8.86264 20.4681 8.9203 19.9057C8.9335 19.8583 8.94349 19.8101 8.9502 
19.7614V11.2568C8.94892 11.0645 9.01868 10.8786 9.14608 10.7347C9.27347 10.5907 9.44954 10.4989 9.6405 10.4768L15.4372 9.80727C15.5469
9.79457 15.6581 9.80531 15.7633 9.83878C15.8685 9.87225 15.9655 9.92769 16.0477 10.0014C16.1299 10.0752 16.1955 10.1655 16.2402 10.2665C16.2849 
10.3675 16.3076 10.4768 16.3069 10.5873V15.4142C16.2159 15.4064 16.1262 15.3869 16.0326 15.3869C15.5828 15.3874 15.1392 15.4915 14.7363 
15.6913C14.3333 15.891 13.9818 16.181 13.709 16.5386C13.4363 16.8962 13.2496 17.3119 13.1636 17.7534C13.0775 18.1948 13.0944 18.6502 13.2129 
19.0841C13.3438 19.5731 13.6009 20.0191 13.9584 20.3776C14.3159 20.736 14.7613 20.9942 15.25 21.1264C15.6839 21.2449 16.1392 21.2617 16.5807 
21.1757C17.0222 21.0897 17.4378 20.903 17.7955 20.6303C18.1531 20.3575 18.4431 20.006 18.6428 19.603C18.8425 19.2 18.9467 18.7564 18.9472 
18.3067C18.9457 18.1568 18.9322 18.0072 18.9069 17.8595Z"
                  fill="#BEC3CE"
              />
              <line x1="1.41409" y1="1.0186" x2="24.1993" y2="24.4112" stroke="#BEC3CE" strokeWidth="2" strokeLinecap="round" />
          </svg>
      )}
  </ButtonSound>
</div>
       ) }}>
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