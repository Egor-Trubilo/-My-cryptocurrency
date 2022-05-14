import React from 'react';
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton/SecondaryButton";
import {useDispatch, useSelector} from "react-redux";

const TimerSection = styled.section`
  .container {

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



    return (
        <TimerSection>
            <div className='container'>
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
            </div>

        </TimerSection>
    );
};

export default Timer;
