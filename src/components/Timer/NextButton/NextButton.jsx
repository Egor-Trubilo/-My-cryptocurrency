import React from 'react';
import classes from './NextButton.module.css'
import clsx from "clsx";
import SkipNextIcon from '@mui/icons-material/SkipNext';

const NextButton = ({ onClick }) => {
    return (
        <div>

            <button onClick={onClick} className={clsx(classes.nextButton, classes.nextButtonActive)} >
               <span><SkipNextIcon size={48}/></span>
            </button>



        </div>
    );
};

export default NextButton;
