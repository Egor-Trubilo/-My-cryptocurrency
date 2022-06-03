import React, {useRef} from 'react';
import Modal from "./Modal/Modal";
import {Switch, useHistory} from "react-router-dom";
import styled from "styled-components";
import Item from "./Item/Item";
import {useDispatch, useSelector} from "react-redux";
import Input from "./Input/Input";
import {setLongBreakInterval, toggleAutoBreaks, toggleAutoPomodoro, updateModeTime} from "../../../redux/timerSlice";
import SwitchButton from "./Switch/SwitchButton";
import Button from "../Button";


const SettingsContainer = styled.div`
  .content {
    padding: 1.25rem 1.25rem 0;
  }

  .title {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    color: rgb(187, 187, 187);
    margin-bottom: 1rem;
  }

  .inputRow {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.625rem;
    width: 100%;
    justify-content: space-between;
  }

  .label {
    color: rgb(85, 85, 85);
    font-weight: 600;
  }
  .footer {
    padding: 0.875rem 1.25rem;
    display: flex;
    justify-content: flex-end;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color: rgb(239, 239, 239);
  }
  .smallInput {
    width: 6.125rem;
  }

  .tinyInput {
    width: 4.375rem;
  }
`


const Settings = () => {

    const history = useHistory();
    const back = (e) => {
        e.stopPropagation();
        history.goBack();
    };


    const {
        modes,
        autoBreaks,
        autoPomodoro,
        longBreakInterval
    } = useSelector((state) => state.timer);
    const dispatch = useDispatch();


    return (
        <Modal>
            <SettingsContainer>
                <div className='content'>
                    <h2 className="title">Timer Settings</h2>
                    <div>
                        <Item col>
                            <label className="label">Time (minutes)</label>
                            <div className="inputRow">
                                {Object.values(modes).map(({id, label, time}) => (
                                    <Input
                                        className="smallInput"
                                        key={id}
                                        onChange={(e) => {
                                            dispatch(
                                                updateModeTime({mode: id, time: e.target.value})
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
                                on={autoBreaks}
                                onClick={() => dispatch(toggleAutoBreaks())}
                            />
                        </Item>
                        <Item>
                            <label className="label">Auto start Pomodoro?</label>
                            <SwitchButton
                                on={autoPomodoro}
                                onClick={() => dispatch(toggleAutoPomodoro())}
                            />
                        </Item>
                        <Item>
                            <label className="label">Long Break interval</label>
                            <Input
                                className="tinyInput"
                                min={1}
                                type="number"
                                value={longBreakInterval}
                                onChange={(e) => dispatch(setLongBreakInterval(e.target.value))}
                            />
                        </Item>
                    </div>
                </div>
                    <footer className="footer">
                        <div style={{
                            backgroundColor:'black',
                            border: '0.125rem solid black',
                            borderRadius: '0.25rem'}
                            }>
                            <Button  onClick={back}>
                                OK
                            </Button>
                        </div>
                    </footer>
            </SettingsContainer>

        </Modal>
    );
};

export default Settings;
