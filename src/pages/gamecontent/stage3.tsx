import { useAppContext } from "context/appContext";

function GameStage3() {
    const { nextStage } = useAppContext();
    return (
       <>
       <div>This is Game stage 3</div>
       <button onClick={nextStage}>ส่ง</button>
       </>
    );
}

export default  GameStage3;