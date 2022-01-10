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
      const [item, setItem] = useState('❓');

      const random = () => {
        let randomItem = Math.floor(Math.random() * items.length);
        setItem(items[randomItem])
      }

    return (
       <>
       <div>This is Game stage 3</div>
        <div >{item}</div> 
  <div>
    <button onClick={random}>Random</button>
  </div>
  
       <button onClick={nextStage}>ส่ง</button>
       </>
    );
}

export default  GameStage3;