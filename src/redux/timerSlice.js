import {DIGITAL_SOUND, LONG_BREAK, POMODORO, SHORT_BREAK} from "../constants";
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    mode: POMODORO,
    round: 1,
    autoBreaks: false,
    autoPomodoro: false,
    longBreakInterval: 4,
    alarmSound: DIGITAL_SOUND,
    alarmVolume: 100,
    modes: {
        [POMODORO]: {
            id: POMODORO,
            label: 'Pomodoro',
            time: 25,
        },
        [SHORT_BREAK]: {
            id: SHORT_BREAK,
            label: "Short Break",
            time: 5,
        },
        [LONG_BREAK]: {
            id: LONG_BREAK,
            label: "Long Break",
            time: 15,
        },

    }

}

export const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload;
        },
        incrementRound: (state) => {
            state.round += 1;
        },
        updateModeTime: (state, action) => {
            const {mode, time} = action.payload;
            state.modes[mode].time= time
        },
        toggleAutoPomodoro: (state) =>{
            state.autoPomodoro = !state.autoPomodoro;
        },
        setLongBreakInterval: (state, action) => {
            state.longBreakInterval =action.payload;
        },
        toggleAutoBreaks: (state) => {
            state.autoBreaks = !state.autoBreaks;
        },
        setAlarmVolume: (state, action) => {
            state.alarmVolume = action.payload;
        },


    }

})


export const {
    setMode,
    incrementRound,
    updateModeTime,
    toggleAutoBreaks,
    toggleAutoPomodoro,
    setLongBreakInterval,

} = timerSlice.actions;

export default timerSlice.reducer;