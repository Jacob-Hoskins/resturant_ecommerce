import React from 'react';
import styled from 'styled-components';
import './App.css';
import OptionLeft from './components/OptionLeft';
// import OptionRight from './components/OptionRight';
import MenuBar from './components/MenuBar';
import NavBar from './components/NavBar';



function App() {
  return (
    <Container>
      <NavBar />
      {/* <MenuBar /> */}
      <OptionLeft title='Books' image='../Pictures/books.jpg' />
      <OptionLeft title='Outdoors' image='https://cdn.thecoolist.com/wp-content/uploads/2020/10/Used-Outdoor-Gear-and-Sporting-Goods-Stores.jpg' />
      <OptionLeft title='Deals' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDu7y_mDz5hcbNklb25cmj_kNGmLRecUiwA&usqp=CAU' />
      {/* <OptionRight title='Computers' image='https://thumbs.dreamstime.com/b/online-learning-course-concept-student-using-computer-laptop-white-blank-screen-training-online-writing-lecture-note-151486217.jpg'/> */}
      {/* <OptionRight title="Electronics" image='https://thumbs.dreamstime.com/b/pc-computer-hardware-components-electronics-collage-cpu-micro-processor-graphics-card-power-supply-ddr-ram-headset-vr-glasses-182047207.jpg' /> */}
      {/* <OptionRight title='About Us' image='https://st.depositphotos.com/1038076/4870/i/600/depositphotos_48701865-stock-photo-about-us.jpg' /> */}
    </Container>
  );
}

export default App;

const Container = styled.div`

`