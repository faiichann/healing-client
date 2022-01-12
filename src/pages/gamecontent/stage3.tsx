import { Alert, Button, Input, Radio } from "antd";
import { useAppContext } from "context/appContext";
import { useState } from "react";
import { Box, ButtonStyle } from "theme/components";

function GameStage3() {
    const { nextStage } = useAppContext();
    const items = [
        "🍭",
        "❌",
        "⛄️",
        "🦄",
        "🍌",
        "💩",
        "👻",
        "😻",
        "💵",
        "🤡",
        "🦖",
        "🍎"
      ];
      const [item1, setItem1] = useState('❓');
      const [item2, setItem2] = useState('❓');
      const [item3, setItem3] = useState('❓');

      const random = () => {
        let randomItem1 = Math.floor(Math.random() * items.length);
        let randomItem2 = Math.floor(Math.random() * items.length);
        let randomItem3 = Math.floor(Math.random() * items.length);
        setItem1(items[randomItem1])
        setItem2(items[randomItem2])
        setItem3(items[randomItem3])
      }

      const message = [
        `Hi my name is ${item1}` ,
        `My problem is ${item2}` ,
        `I give you a ${item3} power`,
        'please help me',
        'wonderful! Thank you I give you a gift'
      ]
      const [isCutScene, setIsCutScene] = useState(false)
      const [index, setIndex] = useState(0)
      const nextIndex = () =>{
        setIndex(index + 1 )
      }
    return (
       <>
       <div>This is Game stage 3</div>
       {
         isCutScene ?
         <>
         {index === 3 ?
         <>
         <Box justify='center' align='center' direction='column'>
         <Alert style={{ margin: '16px 0' }} message={message[index]} />
         <Input.Group compact>
         <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="type here!!" />
         <Button type="primary" onClick={nextIndex} >help</Button>
          </Input.Group>
          </Box>
          </>
         : index === 4 ?
         <>
         <Box justify='center' align='center' direction='column'>
         <Alert style={{ margin: '16px 0' }} message={message[index]} />
         <button onClick={nextStage}>รับของขวัญ</button>
         </Box>
         </>
         :
         <Box justify='center' align='center' direction='row'>
          <Alert style={{ margin: '16px 0' }} message={message[index]} onClick={nextIndex}/>
          </Box>
         }
         </>
         :
         <>
          <Box justify='center' align='center' direction='column'>
        <Radio.Group>
        <Radio.Button value="large">{item1}</Radio.Button>
        <Radio.Button value="default">{item2}</Radio.Button>
        <Radio.Button value="small">{item3}</Radio.Button>
        </Radio.Group>
        <Box justify='center' align='center' direction='column' style={{marginBottom: '20px'}}>
          <ButtonStyle typebutton="Medium" sizebutton={30} onClick={random}> Random </ButtonStyle>
        </Box>
        <Box justify='center' align='center' direction='column'>
        <ButtonStyle typebutton="Medium" sizebutton={30} pattern="Light" onClick={()=> setIsCutScene(true)}>เลือก</ButtonStyle>
        </Box>
        </Box>
         </>
       }
       </>
    );
}

export default  GameStage3;