import React, {useCallback, useEffect} from 'react';
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton/SecondaryButton";
import {useDispatch, useSelector} from "react-redux";
import useCountDown from "../../Hooks/useCountDown";
import {formatTime, updateTitle} from "../../helpers";
import PrimaryButton from "./PrimaryButton/PrimaryButton";
import NextButton from "./NextButton/NextButton";
import {CONFIRM, LONG_BREAK, POMODORO, SHORT_BREAK} from "../../constants";
import {player} from "../../utils";
import Progress from "./Progress/Progress";
import {incrementRound, setMode} from "../../redux/timerSlice";
import alarm from '../../sounds/alarm-digital.mp3'
import classes from './Timer.module.css'

const TimerSection = styled.section`

  ul {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    text-align: center;
    @media (max-width: 600px) {
      height: 3rem;
    }
  }
  li:first-child{
    @media (max-width: 600px) {
      align-items: center;
    }
   
  }

  .container {
    width: 30rem;

    margin: auto;
    text-align: center;
    user-select: none;
    @media (max-width: 600px) {
      max-width: 25rem;
      width: 100%;
    }
  }

  .content {
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
    padding: 1.25rem 1rem 0;
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

  .time {
    font-size: 7.5rem;
    line-height: 8.6875rem;
    font-weight: 600;
    margin-top: 1.25rem;
    user-select: none;
    @media (max-width: 600px) {
      font-size: 6rem;
    }
  }
`

const buttonSound = player({
    asset: "sounds/button-press.wav",
    volume: 0.5,
});

const tickingAudio = player({
    loop: true,
});

const alarmAudio = player({
    asset: {alarm},
    volume: 0.5
});


const Timer = () => {
    const dispatch = useDispatch();
    const {
        mode,
        modes,
        tickingSound,
        alarmSound,
        alarmVolume,
        autoPomodoro,
        autoBreaks,
    } = useSelector((state) => state.timer)

    const {ticking, timeLeft, progress, stop, start, reset} = useCountDown({
        minutes: modes[mode].time,
        onStart: () => {
            if (mode === POMODORO) {
                tickingAudio.play();
            }
        },
        onStop: () => {
            if (mode === POMODORO) {
                tickingAudio.stop();
            }
        },
        onComplete: () => {
            next();
            if (mode === POMODORO) {
                tickingAudio.stop();
            }
            alarmAudio.play();
        },
    })

    useEffect(() => {
        updateTitle(timeLeft, mode)
    }, [mode, timeLeft])

    const jumpTo = useCallback((id) => {
        reset()
        // updateFavicon(id);
        dispatch(setMode(id))

    }, [dispatch, reset])

    useEffect(() => {
        tickingAudio.stop();
        tickingAudio.setAudio(tickingSound);
        if (ticking && mode === POMODORO) {
            tickingAudio.play();
        }
    }, [mode, ticking, tickingSound]);

    useEffect(() => {
        alarmAudio.setAudio(alarmSound);
    }, [alarmSound]);

    useEffect(() => {
        alarmAudio.setVolume(alarmVolume);
    }, [alarmVolume]);


    const next = useCallback(() => {
        switch (mode) {
            case  LONG_BREAK:
            case SHORT_BREAK:
                jumpTo(POMODORO);
                if (autoPomodoro) {
                    start();
                }
                break
            default:
                jumpTo(SHORT_BREAK);
                dispatch(incrementRound());
                if (autoBreaks) {
                    start();
                }
                break;


        }
    }, [dispatch, jumpTo, mode, autoPomodoro, autoBreaks, start])


    console.log(alarmAudio)
    const confirmAction = useCallback(
        (cb) => {
            let allowed = true;
            if (ticking) {
                stop();
                start();
            }

            if (allowed) {
                cb();
            }
        },
        [start, stop, ticking]
    );


    const confirmNext = useCallback(() => {
        confirmAction(next);
    }, [confirmAction, next]);

    const confirmJump = useCallback(
        (id) => {
            confirmAction(() => jumpTo(id));
        },
        [confirmAction, jumpTo]
    );

    const toggleTimer = useCallback(() => {
        buttonSound.play();
        if (ticking) {
            stop();
        } else {
            start()
        }
    }, [stop, start, ticking])

    return (
        <TimerSection>
            <Progress percent={progress}/>
            <div className='container'>
                <div className='content'>
                    <ul>

                        {Object.values(modes).map(({id, label}) => (
                            <SecondaryButton
                                key={id}
                                active={id === mode}
                                id={id}
                                onClick={() => confirmJump(id)}
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
                            <PrimaryButton
                                active={ticking}
                                onClick={toggleTimer}
                            />
                        </div>
                        <div className='right'>
                            <NextButton
                                className={ticking && classes.showNext}
                                onClick={confirmNext}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </TimerSection>
    );
};

export default Timer;
