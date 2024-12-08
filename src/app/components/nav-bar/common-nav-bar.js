'use client'
import {useState} from "react";
import Logo from "@/app/components/nav-bar/logo";
import MenuButton from "@/app/components/nav-bar/menu-button";
import NavMenuDesktop from "@/app/components/nav-bar/nav-menu-desktop";
import NavMenuMobile from "@/app/components/nav-bar/nav-menu-mobile";

import styled from "styled-components";


const OutsideContainer = styled.div`
  display: block;
  width: 100%;
  position: relative;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
`
const WrapperComponents = styled.div`
  * {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
`
const WrapperMobileMenu = styled.div`
  position: absolute;
  top: 70px;
  left: 0;  
  width: 100%;
  height: auto;
  background: rgb(255, 255, 255);
  border-top: 1px solid rgb(229, 227, 218);
  transition: 0.1s;
  opacity: 1;
  pointer-events: all;
`

/**
 * 一个通用的导航栏
 * @returns {JSX.Element}
 * @constructor
 */
export default function CommonNavBar() {
  const [menuState, setMenuState] = useState(false);

  return (
    <OutsideContainer>
      <Wrapper>
        <WrapperComponents>
          <Logo/>
        </WrapperComponents>
        <WrapperComponents className="hide-mobile">
          <NavMenuDesktop/>
        </WrapperComponents>
        <MenuButton className="hide-desktop" menuState={menuState} setMenuState={setMenuState}/>
        {menuState && (
          <WrapperMobileMenu className="hide-desktop">
            <NavMenuMobile/>
          </WrapperMobileMenu>)}
      </Wrapper>
    </OutsideContainer>
  )
}