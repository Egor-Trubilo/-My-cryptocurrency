import React from 'react';
import styled from "styled-components";


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  .label{
    font-size: 0.87rem;
    font-weight: 600;
    color: rgb(187, 187, 187);
  }
  .input {
    border-radius: 0.25rem;
    background-color: rgb(239, 239, 239);
    font-size: 1rem;
    padding: 1rem;
    box-shadow: none;
    color: rgb(85, 85, 85);
    width: 100%;
    outline: none;
    border: 0.0625rem solid transparent;
    ::placeholder{
      color: rgb(189, 189, 189);
    }
    :focus{
      border-color: rgb(34, 34, 34);
    }
  }
  
`

const Input = ({
                   id,
                   label,
                   type,
                   name,
                   placeholder,
                   min,
                   value,
                   onChange,
                   onBlur,
               }) => {
    return (
        <InputContainer>
            {!!label && (
                <label htmlFor={id} className='label'>
                    {label}
                </label>
            )}
                <input
                    className='input'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    min={min}

                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                />
        </InputContainer>
    );
};

export default Input;
