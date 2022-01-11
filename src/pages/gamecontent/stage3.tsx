import { Button, Radio } from "antd";
import { useAppContext } from "context/appContext";
import { useState } from "react";

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

    return (
       <>
       <div>This is Game stage 3</div>
        <Radio.Group>
        <Radio.Button value="large">{item1}</Radio.Button>
        <Radio.Button value="default">{item2}</Radio.Button>
        <Radio.Button value="small">{item3}</Radio.Button>
      </Radio.Group>
  <div>
    <Button onClick={random}>Random</Button>
  </div>
  
       <button onClick={nextStage}>ส่ง</button>
       </>
    );
}

export default  GameStage3;