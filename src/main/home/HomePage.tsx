import React from "react";
import Image from "react-bootstrap/Image";

export const HomePage = () => {
    return (
        <>
            <div className={'d-flex justify-content-center pt-5 pl-4'}>
                <Image className={"banner-image"} fluid src={"../../../HomePageBanner.jpg"}/>
            </div>
            <div className={'d-flex justify-content-center pt-5'}>Welcome to my web page!</div>
        </>
    )
}