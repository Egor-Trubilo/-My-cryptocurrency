import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";


dayjs.extend(duration)

export const formatTime = (time)=> {
    return dayjs.duration(time, 'seconds').format('mm:ss');

}

function getFaviconEl() {
    return document.getElementById("favicon");
}