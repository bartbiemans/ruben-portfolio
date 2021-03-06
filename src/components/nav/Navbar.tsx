import React from "react";
import {NavItem} from "./NavItem";
export const Navbar = () => {
    return(
        <div className={"navbar"}>
                <NavItem url={''} text={'Home'}/>
                <NavItem url={'/about'} text={'About'}/>
                <NavItem url={'/illustrations'} text={'Illustrations'}/>
                <NavItem url={'/animations'} text={'Animations'}/>
                <NavItem url={'/photoGraphs'} text={'Photographs'}/>
                <div className={'nav-name'}>Ruben tips</div>
        </div>
    )
}
