import React from 'react';
import styled from "styled-components";

const IconCss = styled.span`


`

const Icon = ({name, size=15}) => {
    return (
        <span>
          {name}
        </span>
    );
};

export default Icon;
