import React from 'react';
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton/SecondaryButton";
import {useDispatch, useSelector} from "react-redux";
import useCountDown from "../../Hooks/useCountDown";
import {formatTime} from "../../helpers";
import PrimaryButton from "./PrimaryButton/PrimaryButton";
import NextButton from "./NextButton/NextButton";
import {POMODORO} from "../../constants";
import {player} from "../../utils";

const TimerSection = styled.section`
 
  ul{
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
  }
  .container {
    width: 30rem;
    
    margin: auto;
    text-align: center;
    user-select: none;
  }
.content{
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1.25rem 0 1.875rem;
  border-radius: 0.375rem;
  margin-bottom: 1.25rem;
  width: 100%;
}
  .actionButtons {
    display: flex;
    flex-grow: 1;
    align-items: center;
    margin: 1.25rem 0 0;
  }
  .left {
       display: flex;
       flex-grow: 1;
       width: 100%;
     }
  .right {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .time{
    font-size: 7.5rem;
    line-height: 8.6875rem;
    font-weight: 600;
    margin-top: 1.25rem;
    user-select: none;
  }
`


const Timer = () => {
    const dispatch = useDispatch();
    const {
        mode,
        round,
        modes,
        tickingSound,
        tickingVolume,
        alarmSound,
        alarmVolume,
        autoPomodoro,
        autoBreaks,
    } = useSelector((state) => state.timer)

const {ticking, timeLeft, progress} = useCountDown({
    minutes: modes[mode].time,
    onStart: ()=> {
        if (mode === POMODORO) {
            player.play();
        }
    },
    onStop: ()=> {
        if (mode === POMODORO) {
            player.stop();
        }
    },
})

    return (
        <TimerSection>
            <div className='container'>
                <div className='content'>
                    <ul>

                        {Object.values(modes).map(({ id, label }) => (
                            <SecondaryButton
                                key={id}
                                active={id === mode}
                                id={id}

                            >
                                {label}
                            </SecondaryButton>
                        ))}


                    </ul>
                    <div className='time'>
                        {formatTime(timeLeft)}
                    </div>
                    <div className='actionButtons'>
                        <div className='left'>
                            <PrimaryButton/>
                        </div>
                        <div className='right'>
                            <NextButton/>
                        </div>
                    </div>
                </div>

            </div>

        </TimerSection>
    );
};

export default Timer;
