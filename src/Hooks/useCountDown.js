import {useCallback, useEffect, useRef, useState} from "react";
import {clear} from "@testing-library/user-event/dist/clear";


const useCountDown =({minutes, onComplete, onStart, onStop}) => {
    const time = minutes * 60;
    const[timeLeft,setTimeLeft] = useState(time)
    const[progress, setProgress] = useState(0)
    const[ticking, setTicking] = useState(false)
    const timerId = useRef(null)

    const clear = () => {
      clearInterval(timerId.current)
        timerId.current = null

    }

    const tick = useCallback(
        () => {
            if(timeLeft>0){
                setTimeLeft(timeLeft-1);
                setProgress((count)=> count + 1)
            }
            if (timeLeft <= 1) {
                setTimeLeft(timeLeft-1);
                setTicking(false);
                clear();
                onComplete?.()

            }
        },
        [onComplete, timeLeft]);

    useEffect(()=>{
        if(ticking) {
            timerId.current = setInterval(tick, 1000)
        } else {
            clear()
        }
        return clear
    },[tick, ticking])

    useEffect(()=>{
        setTimeLeft(time)
    },[time])

    const start = useCallback(() => {
      setTicking(true)
        onStart?.()
    },[onStart])

    const stop = useCallback(() => {
        setTicking(false)
        onStop?.()
    },[onStop])

    const reset = useCallback(() => {
        setTicking(false)
        setProgress(0)
        onStop?.()
    },[onStop])

    return {
        start,
        stop,
        reset,
        ticking,
        timeLeft,
        progress: (progress/time)*100,
    }

}



export default useCountDown