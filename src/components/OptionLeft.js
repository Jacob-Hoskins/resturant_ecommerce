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
    background-color: #ED7966;
    margin: auto;
    margin-top: 20vh;
    width: 30rem;
    height: 21.2rem;
    border: solid black 3px;
    border-radius: 25px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 2px 15px 20px #000;

    @media (max-width: 500px){
        width: 15rem;
        height: 11.1rem;

        img{
            width: 15rem;
            height: 7.4rem;
        }
    }

    img{
        margin: 0;
        border-radius: 25px;
    }
    
`

