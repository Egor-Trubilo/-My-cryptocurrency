import React from 'react';
import styled from "styled-components";


const ItemCss = styled.div`
  border-top: 0.0625rem solid rgba(182, 165, 166, 0.2);
  padding: 1.25rem 0;
  min-height: 1.875rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`


const Item = ({children}) => {
    return (
        <ItemCss>
            {children}
        </ItemCss>
    );
};

export default Item;
