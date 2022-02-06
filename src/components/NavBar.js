import React from "react";
import styled from "styled-components";
import { IoSearch, IoCart, IoPersonOutline } from "react-icons/io5";


function NavBar() {
  return (
    <Container>
        <h3 className='logo'>DevCentral</h3>
        <SearchBar>
            <IoSearch  className='icons'/>
            <input type='text'  placeholder="SEARCH" className='search'></input>
        </SearchBar>
        <SideIcons>
            <IoCart className='icons sideIcons'/>
            <IoPersonOutline className='icons sideIcons'/>
        </SideIcons>
        
    </Container>

  );
}

export default NavBar;

const Container = styled.nav`
    padding: 15px;
    font-size: 24px;
    background-color: rgba(20, 24, 80, 1);
    color: white;
    box-shadow: 2px 15px 20px #000;

    h3{
        float: left;
        cursor: pointer;
    }

    .icons{
        font-size: 50px;
        cursor: pointer;

    }

    @media (max-width: 500px){
        .logo{
            width: .3rem;
            height: 1rem;
        }
    }
`

const SearchBar = styled.div`
    display: flex;
    margin-left: 33vw;
    border-radius: 8px;

    p{
        margin: auto;
    }

    .search{
        width: 25vw;
        background-color: #DAD7D7;
        border-radius: 8px;
        text-align: center;
    }

    .icons{
    }

    
`

const SideIcons = styled.div`
    display: flex;
    margin-top: -5vh;
    width: 45vw;
`