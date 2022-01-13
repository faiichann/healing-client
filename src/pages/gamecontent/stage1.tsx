import { Alert, Input, Typography } from "antd";
import { useAppContext } from "context/appContext";
import { useState } from "react";
import { Box, ButtonStyle } from "theme/components";

const { Title } = Typography;

function GameStage1() {
    
    let items = ['การเงิน', 'การงาน', 'ครอบครัว', 'สังคม', 'ความรัก', 'อิสระ', 'ท่องเที่ยว', 'ความสุข'] 
    const [select, setSelect] = useState(items)
    const [finish, setFinish] = useState(false)
    const [goal, setGoal] = useState('')
    const { nextStage } = useAppContext();
    const [isSkip, setIsSkip] = useState(false)
    const [index, setIndex] = useState(0);
    
    console.log('-----------item----------',items[items.length-1])

    const selectItem1 = async() => {
        if (select.length <= 2 ){
            await setGoal( select[select.length - 1]);
            setFinish(true);
            // alert('Done'+ select[select.length - 1])
        } else {
            // const index = select.indexOf(select[select.length - 2]);
            // if (index > -1) {
            //     const newItem = select.splice(index,1)
            //     await setSelect( newItem)
            // }
            const newItem = select.filter((item) =>item !== select[select.length - 2]);
            setSelect( newItem)
           
            console.log('-----------select1----------',select)
        }

    }

    const selectItem2 = async() => {
        if (select.length <= 2){
            await setGoal( select[select.length - 2]);
            setFinish(true);
            // alert('Done'+ select[select.length -2])
        } else {
            // const index = select.indexOf(select[select.length - 1]);
            // if (index > -1) {
            //     const newItem = select.splice(index,1)
            //     await setSelect( newItem)
            // }
            const newitem = select.filter((item) => item !== select[select.length - 1]);
            setSelect( newitem)
            
            console.log('-----------select2----------',select)
        }
    }

    const message = [
        'เอาละในขั้นแรกคุณจำเป็นต้องมีเป้าหมายที่ชัดเจนก่อน', 
        'กถ้ายังไม่แน่ใจเรามีตัวช่วยให้คุณ', 
        'เลือกสิ่งที่คุณชอบมากที่สุดจากไอเทมที่ปรากฎ', 
        'มีโอกาสเลือกครั้งเดียวนะ',
        'ถ้าพร้อมแล้วไปเริ่มกันเลย'
    ] 

    const onSkip = () =>{
        setIsSkip(true)
    }
    const nextIndex = () =>{
        if (index + 1 <= message.length - 1){
            setIndex(index + 1 )
        }else{
            setIsSkip(true)
        }
      }

    return (
       <>
       {isSkip && 
       <>
        <div>Versus Game</div>
        {finish ? 
           <Box justify='center' align='center' direction='column'  style={{height: 'calc(100vh - 400px)'}}>
                <h1>{goal}</h1>
                <p>พิมพ์เป้าหมายของคุณที่นี่!!!</p>
                <Input placeholder="Basic usage" />
                <ButtonStyle typebutton='Medium' sizebutton={30} onClick={nextStage}> Submit </ButtonStyle>
            </Box>
        : 
        <Box justify='center' align='center' direction='row'  style={{height: 'calc(100vh - 400px)'}}>
            <div onClick={selectItem1}> {select[select.length - 1]} </div> 
            <h1> VS </h1> 
            <div onClick={selectItem2}>{select[select.length - 2]}  </div>
         </Box>
        }
       </>
       }

        {!isSkip && 
       <>
       <Box justify='flex-end' align='center' direction='row' onClick={onSkip}>
            <Title level={5}> Skip </Title>
       </Box>
        <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 400px)'}} onClick={nextIndex}>
            <Alert style={{ margin: '16px 0', width: '50%', justifyContent: 'center' }} message={message[index]} />
        </Box>
       </>
        }
       </>
    );
}

export default  GameStage1;