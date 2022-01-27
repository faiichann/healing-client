import { useAppContext } from 'context/appContext';
import { TimeText } from 'pages/gamecontent/styles/stage.styles';
import React, { useEffect, useState } from 'react'

const CountDownTimer = ({hoursMinSecs} : any) => {
    const { setIsLose } = useAppContext();
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    


    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0) {
            setIsLose(true)
            reset()
        }
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <TimeText>
            {`${secs.toString().padStart(2, '0')} s`}
            {/* <p>{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>  */}
        </TimeText>
    );
}

export default CountDownTimer;