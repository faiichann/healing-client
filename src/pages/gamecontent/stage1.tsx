import { Input } from "antd";
import { useAppContext } from "context/appContext";
import { useState } from "react";

function GameStage1() {
    
    let items = ['การเงิน', 'การงาน', 'ครอบครัว', 'สังคม', 'ความรัก', 'อิสระ', 'ท่องเที่ยว', 'ความสุข'] 
    const [select, setSelect] = useState(items)
    const [finish, setFinish] = useState(false)
    const [goal, setGoal] = useState('')
    const { nextStage } = useAppContext();
    
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
    return (
       <>
       <div>Versus Game</div>
        {finish ? 
            <div>
                <h1>{goal}</h1>
                <p>พิมพ์เป้าหมายของคุณที่นี่!!!</p>
                <Input placeholder="Basic usage" />
                <button onClick={nextStage}>ส่ง</button>
            </div>
        : 
            <span>
            <div onClick={selectItem1}> {select[select.length - 1]} </div> 
            <h1> VS </h1> 
            <div onClick={selectItem2}>{select[select.length - 2]}  </div>
             </span>
        }

       </>
    );
}

export default  GameStage1;