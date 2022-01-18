import { Alert, Button, Input, Radio } from "antd";
import { useAppContext } from "context/appContext";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, ButtonStyle } from "theme/components";
import randomSlot from 'api/mocks/RandomSlot.json'

function GameStage3() {
    const { nextStage } = useAppContext();
    const history = useHistory();
    const items1 = randomSlot.avatar
    const items2 = randomSlot.problem
    const items3 = randomSlot.power

      const [item1, setItem1] = useState('❓');
      const [item2, setItem2] = useState('❓');
      const [item3, setItem3] = useState('❓');
      const [isSkip, setIsSkip] = useState(false)
      const [indexCut, setIndexCut] = useState(0);
      const [name, setName] = useState('');
      const [problem, setProblem] = useState('');
      const [power, setPower] = useState('');

      const random = () => {
        let randomItem1 = Math.floor(Math.random() * items1.length);
        let randomItem2 = Math.floor(Math.random() * items2.length);
        let randomItem3 = Math.floor(Math.random() * items3.length);
        setItem1(items1[randomItem1].img)
        setItem2(items2[randomItem2].img)
        setItem3(items3[randomItem3].img)
        setName(items1[randomItem1].name)
        setProblem(items2[randomItem2].name)
        setPower(items3[randomItem3].name)
      }

      const message = [
        `${item1} Hi my name is "${name}" ` ,
        `${item2} My problem is "${problem}" ` ,
        `${item3} I give you a "${power}" power`,
        'please help me',
        'wonderful! Thank you I give you a gift'
      ]
      const [isCutScene, setIsCutScene] = useState(false)
      const [index, setIndex] = useState(0)
      const nextIndex = () =>{
        setIndex(index + 1 )
      }

      const messageCut = [
        'คุณเก่งมากเลย', 
        'งั้นคุณช่วยเราหน่อยได้ไหม', 
        '',
        'ขอบคุณนะคุณใจดีจริงๆ',
        'เอาละไปช่วยเหลือคนที่เดือดร้อนกันเถอะ', 
    ] 

    const goSpecial = () =>{
      history.push('/hangman-stage')
      }

    const nextIndexCut = () =>{
        if (indexCut + 1 <= messageCut.length - 1){
          setIndexCut(indexCut + 1 )
        }else{
            setIsSkip(true)
        }
      }
    return (
       <>
        { isSkip &&
       <>
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
         <Box justify='center' align='center' direction='column' onClick={nextIndex}>
          <Alert style={{ margin: '16px 0' }} message={message[index]} />
          </Box>
         }
         </>
         :
         <>
          <Box justify='center' align='center' direction='column'>
          <div>This is Game stage 3</div>
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
       }
      

       { !isSkip &&
       <>
          { indexCut === 2 ?
            <>
            <Box justify='center' align='center' direction='row'>
              <Button type="primary" onClick={nextIndexCut}>Yes I'll lhelp </Button>
              <Button danger onClick={goSpecial}>No I'm not </Button>
            </Box>
            </>
          :
          <Box justify='center' align='center' direction='column' style={{height: 'calc(100vh - 400px)'}} onClick={nextIndexCut}>
            <Alert style={{ margin: '16px 0', width: '50%', justifyContent: 'center' }} message={messageCut[indexCut]} />
          </Box>
          }
       </>
       }
       </>
    );
}

export default  GameStage3;