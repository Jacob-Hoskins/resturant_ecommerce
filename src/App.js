import React from 'react';
import styled from 'styled-components';
import './App.css';
import OptionLeft from './components/OptionLeft';
import MenuBar from './components/MenuBar';
import NavBar from './components/NavBar';



function App() {
  return (
    <Container>
      <NavBar />
      <MenuBar />
      <OptionLeft title='Books' image='../Pictures/books.jpg' />
      <OptionLeft title='Outdoors' image='https://cdn.thecoolist.com/wp-content/uploads/2020/10/Used-Outdoor-Gear-and-Sporting-Goods-Stores.jpg' />
      <OptionLeft title='Deals' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDu7y_mDz5hcbNklb25cmj_kNGmLRecUiwA&usqp=CAU' />
      
    </Container>
  );
}

export default App;

const Container = styled.div`

`