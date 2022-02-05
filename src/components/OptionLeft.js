import React from 'react';
import styled from 'styled-components';


function FoodOption(props) {
  return (
      <Container>
          <h3>{props.title}</h3>
          <img src={props.image} width='480vw' height='278vh' alt='stock pix'/>
      </Container>
  );
}

export default FoodOption;

const Container = styled.article`
    background-color: #ED7966;
    margin-left: 15vw;
    margin-top: 20vh;
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
    }
    
`

