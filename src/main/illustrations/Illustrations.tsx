import React from "react";
import {IllustrationComponent} from "../../components/IllustrationComponent";
import {Col, Row} from "react-bootstrap";

export const Illustrations = () => {
    return (
        <>
            <Row className={'pt-2'}>
                <Col sm={2}/>
                <Col sm={4}>
                    <IllustrationComponent imageSrc={"../../../Illustrations/2cv.png"} imageTitle={'2-VC'}/>
                </Col>
                <Col sm={4}>
                    <IllustrationComponent imageSrc={"../../../Illustrations/beast_of_no_nation.png"} imageTitle={'Beast of no nation'}/>
                </Col>
                <Col sm={2}/>
            </Row>
        </>
    )
}