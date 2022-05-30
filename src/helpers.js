import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import {LONG_BREAK, POMODORO, SHORT_BREAK, TIME_FOR_A_BREAK, TIME_TO_FOCUS} from "./constants";



dayjs.extend(duration)

export const formatTime = (time) => {
    return dayjs.duration(time, 'seconds').format('mm:ss');

}


export const updateTitle = (time, mode) => {
    const message = mode === POMODORO ? TIME_TO_FOCUS : TIME_FOR_A_BREAK
    document.title = `${formatTime(time)} -${message}`;
}

