import React from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Container>
        <img src='/images/logo.svg' alt='' />
        <Menu>

          <p>Model S</p>
          <p>Model Y</p>
          <p>Model X</p>
          <p>Model 3</p>

        </Menu>
        <RightMenu>

          <p>Shop</p>
          <p>Tesla Account</p>
          <CustomMenu />

        </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding 0 20px;
  top: 0;
  left: 0;
  right: 0;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;


  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px) {
    display: none;
  }

`

const RightMenu = styled.div`

  display: flex;
  align-items: center;
  p {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px
  }

`

const CustomMenu = styled(MenuIcon)`
  cusrsor: pointer;
`