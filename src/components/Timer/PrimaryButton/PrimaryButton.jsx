import React from 'react';
import clsx from "clsx";
import classes from "./PrimaryButton.module.css"
import {START, STOP} from "../../../constants";

const PrimaryButton = ({active, onClick, color}) => {
    return (
        <button
            onClick={onClick}
               className={clsx(
                   classes.primaryButton,
                   active && classes.primaryActive,
                   color
               )}
        >
            {active? STOP : START }
        </button>
    );
};

export default PrimaryButton;
