import React from 'react';
import styled from 'styled-components';


function FoodOption(props) {
  return (
      <Container>
          <h3>{props.title}</h3>
          <img src={props.image} width='479.5rem' height='278rem' alt='stock pix'/>
      </Container>
  );
}

export default FoodOption;

const Container = styled.article`
    display: flex;
    background-color: #ED7966;
    width: 25vw;
    height: 35vh;
    border: solid black 3px;
    border-radius: 25px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;

    img{
        margin: 0;
        border-radius: 25px;
        margin-top: 3.8rem;
        
    }
    
`

