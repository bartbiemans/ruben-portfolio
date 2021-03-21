import Image from "react-bootstrap/Image";
import React from "react";

interface Props {
    imageSrc: string;
    imageTitle: string;
    ImageBio?: string
}

export const IllustrationComponent = (props: Props) => {
return (
    <div className={'d-flex justify-content-start flex-column'}>
    <Image src={props.imageSrc} fluid/>
    <span>{props.imageTitle}</span>
    </div>
)
}