import Image from "react-bootstrap/Image";
import React from "react";
import {Col, Row} from "react-bootstrap";

export const AboutPage = () => {
    return (
        <Row className={'pt-5'}>
            <Col sm={2}/>
            <Col sm={5}>
                <div className={'about-picture'}>
                    <Image fluid src={"../../../aboutPicture.jpg"}/>
                </div>
            </Col>
            <Col sm={4} className={'d-flex justify-content-start flex-column'}>
                <div className={'about-title'}>Ruben</div>
                <span>Drawings, animations and photo's. All from my own hands and brains</span>
            </Col>
        </Row>
    )
}