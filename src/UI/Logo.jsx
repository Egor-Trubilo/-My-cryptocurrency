import React from 'react';
import styled from "styled-components";
import logo from "../assets/logo.png"
import {Link} from "react-router-dom";

const LogoText = styled.h1`
  padding: 0.625rem;
  font-size: 1.25rem;
  vertical-align: middle;

  .link {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }

  .logo {
    width: 1.25rem;
    height: 1.25rem;
  }

`


const Logo = () => {
    return (
        <LogoText>
            <Link to='/' className='link'>
                <img src={logo} alt="pomodo-logo" className='logo'/>
                Pomodo
            </Link>
        </LogoText>
    );
};

export default Logo;
