import { Alert } from "antd";
import { useAppContext } from "context/appContext";
import { useEffect, useState } from "react";
import { Box } from "theme/components";
import { TextCutScene } from "./styles/stage.styles";

function Cutscene() {
    
    const [isTab, setIsTab] = useState(false)
    const { nextStage } = useAppContext();
    const [index, setIndex] = useState(0);

    const message = [
        'HI USER001',
        'Welcome to Healing',
        'Let us make you happy', 
        'ARE YOU READY!', 
        'TAB and Let go'
        ] 
useEffect(() => {
    console.log('message -->', message.length)
    console.log('Index -->', index)
}, [index, message.length])
   

    const nextIndex = () =>{
        if (index + 1 <= message.length - 1){
            setIndex(index + 1 )
        }else{
            nextStage()
        }
      }
    return (
       <>
            {isTab && 
            <> 
             <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 300px)'}} onClick={nextIndex}>
                <Alert style={{ margin: '16px 0', width: '40%', justifyContent: 'center' }} message={message[index]}/>
            </Box>
            </>
            }
            {!isTab && 
            <>
             <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 200px)'}} onClick={()=>setIsTab(true)}>
                 <TextCutScene> Tab Screen to play ! </TextCutScene>
             </Box>
            </>}
       </>
    );
}

export default Cutscene;