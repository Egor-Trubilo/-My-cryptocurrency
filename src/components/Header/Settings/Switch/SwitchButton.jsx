import React from 'react';
import clsx from "clsx";
import classes from "./SwitchButton.module.css";


const SwitchButton = ({onClick, on}) => {
    return (
        <button onClick={onClick}
             className={clsx(classes.button, on ? classes.on : classes.off)}
        >

            <div className={classes.knob}></div>

        </button>
    );
};

export default SwitchButton;
