import photographs from "../../PhotographPage.json";
import {IllustrationComponent} from "../../components/IllustrationComponent";
import {Col, Row} from "react-bootstrap";
import React from "react";

export const Photographs = () => {
    return (
        <>
            <Row className={'pt-5 pb-5'}>
                {photographs.illustrations.map((image) => {
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