import React from "react";
import {useHistory} from "react-router";

interface Props{
    url:string;
    text:string
}

export const NavItem = (props:Props) => {
    const history = useHistory();

    return(
        <div className={'nav-item'} onClick={() => history.push(props.url)}>
            {props.text}
        </div>
    )
}