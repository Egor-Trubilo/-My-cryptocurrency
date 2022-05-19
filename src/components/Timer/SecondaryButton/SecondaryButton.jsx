import React from 'react';
import clsx from "clsx";
import classes from "./SecondaryButton.module.css";

const SecondaryButton = ({children, active, onClick}) => {
    return (
        <li>
            <button
                onClick={onClick}
                className={clsx(
                    classes.secondaryButton,
                    active && classes.secondaryActive
                )}
            >
                {children}
            </button>
        </li>

    );
};

export default SecondaryButton;
