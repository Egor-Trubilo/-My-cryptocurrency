import React from 'react';
import styled from "styled-components";
import Icon from "../../UI/Icon";


const ButtonCss = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 0.75rem;
  min-width: 4.375rem;
  transition: transform 0.1s ease-in-out;
  gap: 0.25rem;

  :hover {
    opacity: 1;
  }

  :active {
    transform: translateY(0.125rem);
  }
  
`

const Button = ({children, onClick, icon}) => {
    return (
        <ButtonCss onClick={onClick}>

            <span className='label'>
              {children}
        </span>
        </ButtonCss>
    );
};

export default Button;
