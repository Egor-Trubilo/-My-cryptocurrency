import React from 'react';
import clsx from "clsx";
import classes from "./SecondaryButton.module.css";

const SecondaryButton = ({children, active, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                classes.secondaryButton,
                active && classes.secondaryActive
            )}
        >
            {children}
        </button>
    );
};

export default SecondaryButton;
