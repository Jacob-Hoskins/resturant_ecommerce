import React from 'react';
import styled from 'styled-components';
function MenuBar() {
  return (
      <Container>
          <li>Books</li>
          <li>Computers</li>
          <li>Electronics</li>
          <li>Outdoors</li>
          <li>Deals</li>
          <li>About us</li>
      </Container>
  );
}

export default MenuBar;

const Container = styled.nav`
    display: grid;
    margin-top: 5vw;
    text-align: center;
    grid-template-columns: 16vw 16vw 16vw 16vw 16vw 16vw;
    font-size: 1.3vw;
    padding: 10px;
    
    li{
        cursor: pointer;
        list-style-type: none;
        font-weight: bold;
       
        
    }
`