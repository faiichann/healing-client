import { Modal, Progress } from 'antd';
import Container from 'components/container/container'
import { useAppContext } from 'context/appContext';
import { useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from 'theme/components';
import Cutscene from './cutScene';
import GameStage1 from './stage1';
import GameStage2 from './stage2';
import GameStage3 from './stage3';
import { DivProgress, ProgressBar } from './styles/stage.styles';



function GameContent() {
    const history = useHistory();
    const { stage } = useAppContext();

    useEffect(() => {
       if(stage === 4){
        history.push('/result')
       }
    }, [history, stage])

    return (
        <>
       <Container header={{ title: 'Game Content', left: 'back' }}>
       <DivProgress><ProgressBar percent={stage * 25} steps={4} showInfo={false} strokeWidth={10}/></DivProgress>
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