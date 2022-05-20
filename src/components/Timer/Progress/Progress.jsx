import React from 'react';
import styled from "styled-components";

const ProgressCss = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 0.0625rem;
  margin-bottom: 2.5rem;
  
  .progress {
    height: 0.1875rem;
    border-radius: 6.25rem;
    background-color: white;
    transform: translateY(-0.0625rem);
    width: 0;
  }
  

`


const Progress = ({percent}) => {
    return (
        <ProgressCss>
            <div className='progress' style={{ width: `${percent}%` }}>

            </div>
        </ProgressCss>
    );
};

export default Progress ;
