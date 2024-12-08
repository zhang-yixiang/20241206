'use client'
import {useState} from "react";
import Logo from "@/app/components/nav-bar/logo";
import MenuButton from "@/app/components/nav-bar/menu-button";
import NavMenuDesktop from "@/app/components/nav-bar/nav-menu-desktop";
import NavMenuMobile from "@/app/components/nav-bar/nav-menu-mobile";

/**
 * 一个通用的导航栏
 * @returns {JSX.Element}
 * @constructor
 */
export default function CommonNavBar() {
  const [menuState, setMenuState] = useState(false);

  return (
    <nav className="nav-bar-container">
      <div className="nav-container">
        <div className="component-wrapper">
          <Logo/>
        </div>
        <div className="hide-mobile component-wrapper ">
          <NavMenuDesktop/>
        </div>
        <MenuButton className="hide-desktop" menuState={menuState} setMenuState={setMenuState}/>
        {menuState && (
          <div className="hide-desktop nav-mobile-menu-wrapper">
            <NavMenuMobile/>
          </div>)}
      </div>
    </nav>
  )
}