import React from "react";
import {Col, Row} from "react-bootstrap";
import images from "../../IllustrationPage.json";
import {IllustrationComponent} from "../../components/IllustrationComponent";

export const Animations = () => {
    return (
        <>
            <Row className={'pt-5 pb-5'}>
                {images.illustrations.map((image) => {
                    return (
                        <>
                            <Col sm={1}/>
                            <Col sm={4}>
                                <IllustrationComponent imageSrc={image.imageSrc} imageTitle={image.imageText}
                                                       imageBio={image.imageText}/>
                            </Col>
                            <Col sm={1}/>
                        </>
                    )
                })}
            </Row>
        </>
    )
}