import React from "react";
import {NavItem} from "./NavItem";
export const Navbar = () => {
    return(
        <div className={"navbar"}>
                <NavItem url={''} text={'Home'}/>
                <NavItem url={'/about'} text={'About'}/>
                <NavItem url={'/illustrations'} text={'Illustrations'}/>
                <NavItem url={''} text={'Animations'}/>
                <NavItem url={''} text={'Boris'}/>
                <div className={'nav-name'}>Ruben tips</div>
        </div>
    )
}
