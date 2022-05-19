import React from 'react';
import styled from "styled-components";


const ButtonCss = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  min-width: 4.375rem;
  transition: transform 0.1s ease-in-out;
  gap: 0.25rem;
  

  :hover {
    opacity: 1;
  }

  :active {
    transform: translateY(0.125rem);
  }
  .buttonDesc{
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
  }
  
`

const Button = ({children, onClick}) => {
    return (
        <ButtonCss onClick={onClick}>

            <span className='buttonDesc'>
              {children}
        </span>
        </ButtonCss>
    );
};

export default Button;
