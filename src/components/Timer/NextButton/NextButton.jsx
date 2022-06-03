import React from 'react';
import classes from './NextButton.module.css'
import clsx from "clsx";
import SkipNextIcon from '@mui/icons-material/SkipNext';

const NextButton = ({ onClick, className }) => {
    return (

            <button onClick={onClick} className={clsx(classes.nextButton, className)} >
               <span><SkipNextIcon /></span>
            </button>




    );
};

export default NextButton;
