import React, {useEffect, useRef} from 'react';
import Settings from "../Settings";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  overflow-y: auto;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in 0s;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .modal {
    color: rgb(34, 34, 34);
    border-radius: 0.5rem;
    background-color: white;
    position: relative;
    max-width: 25rem;
    width: 95%;
    border-top: 0.0625rem solid var(--border-color);
    border-bottom: 00.0625rem solid var(--border-color);
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0.625rem 1.25rem,
    rgba(0, 0, 0, 0.1) 0 0.1875rem 0.375rem;
    overflow: hidden;
    display: block;
  }
  .closeButton {
    position: absolute;
    opacity: 0.3;
    right: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    :hover{
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`


const Modal = ({ children }) => {
    const modalRef = useRef(null);
    const history = useHistory();
    const back = (e) => {
        e.stopPropagation();
        history.goBack();
    };

   useEffect(()=>{
       const handleOutsideClick = (e) => {
         if(modalRef.current && !modalRef.current.contains(e.target)){
             history.goBack()
         }
       }
       document.addEventListener("mousedown", handleOutsideClick);

       return () => document.removeEventListener("mousedown", handleOutsideClick);
   }, [history])

    return (
       <ModalContainer>
           <div className='overlay'>
                <div className='modal' ref={modalRef}>
                    {children}
                </div>
               <button className='closeButton' onClick={back}>
                   <CloseIcon/>
               </button>
           </div>

       </ModalContainer>

    );
};

export default Modal;
