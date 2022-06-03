import React from 'react';
import clsx from "clsx";
import classes from "./PrimaryButton.module.css"
import {START, STOP} from "../../../constants";

const PrimaryButton = ({active, onClick}) => {
    return (
        <button
            onClick={onClick}
               className={clsx(
                   classes.primaryButton,
                   active && classes.primaryActive,
               )}
        >
            {active? STOP : START }
        </button>
    );
};

export default PrimaryButton;
