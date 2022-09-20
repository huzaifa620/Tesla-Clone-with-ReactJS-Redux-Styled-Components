import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)

  return (
    <Container>
        <img src='/images/logo.svg' alt='' />
        <Menu>

          {cars && cars.map((car, index) => (
            <p key={index}> {car} </p>
          ))}

        </Menu>
        <RightMenu>

          <p>Shop</p>
          <p>Tesla Account</p>
          <CustomMenu onClick={ () => setBurgerStatus(true) }/>

        </RightMenu>

        <BurgerNav show={burgerStatus}>

          <CloseWrapper>
            <CustomClose onClick={ () => setBurgerStatus(false) }/>
          </CloseWrapper>

          {cars && cars.map((car, index) => (
            <li key={index}> <button>  {car} </button> </li>
          ))}
          <li> <button>  Existing Inventory </button> </li>
          <li> <button>  Used Inventory </button> </li>
          <li> <button>  Trade-In </button> </li>
          <li> <button>  Cybertruck </button> </li>
          <li> <button>  Roadster </button> </li>
          <li> <button>  Roller </button> </li>
        </BurgerNav>

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
  z-index: 1;
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

const BurgerNav = styled.div`
  position: fixed;
  top:0;
  bottom:0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    button {
      font-weight: 600;
      border: none;
      background: none;
    }
  }

`

const CustomClose = styled(CloseIcon)`
  cursor pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`