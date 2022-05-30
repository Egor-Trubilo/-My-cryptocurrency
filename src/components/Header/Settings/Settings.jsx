import React, {useRef} from 'react';
import Modal from "./Modal/Modal";
import {Switch, useHistory} from "react-router-dom";
import styled from "styled-components";
import Item from "./Item/Item";
import {useDispatch, useSelector} from "react-redux";
import Input from "./Input/Input";
import {toggleAutoPomodoro, updateModeTime} from "../../../redux/timerSlice";
import SwitchButton from "./Switch/SwitchButton";


const SettingsContainer = styled.div`


`


const Settings = () => {

    const {
        modes,
        autoBreaks,
        autoPomodoro,
        longBreakInterval,
        alarmSound,
        alarmVolume,
        alarmRepeat,
        tickingSound,
        tickingVolume,
    } = useSelector((state) => state.timer);
    const dispatch = useDispatch();


    return (
        <Modal>
            <SettingsContainer>
                    <div className="content">
                        <h2 className="title">Timer Settings</h2>
                        <div>
                            <Item col>
                                <label className="label">Time (minutes)</label>
                                <div className="inputRow">
                                    {Object.values(modes).map(({ id, label, time })=>(
                                        <Input
                                            className="smallInput"
                                            key={id}
                                            onChange={(e)=>{
                                                dispatch(
                                                   updateModeTime({mode: id, time: e.target.value })
                                                )
                                            }}
                                            min={1}
                                            label={label}
                                            type="number"
                                            value={time}
                                        />
                                    ))}
                                </div>
                            </Item>
                            <Item>
                                <label className="label">Auto start Breaks?</label>
                                <SwitchButton
                                    on={autoPomodoro}
                                    onClick={() => dispatch(toggleAutoPomodoro())}
                                />
                            </Item>
                        </div>
                    </div>
            </SettingsContainer>

        </Modal>
    );
};

export default Settings;
