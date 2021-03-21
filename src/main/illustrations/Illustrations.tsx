import React from "react";
import {IllustrationComponent} from "../../components/IllustrationComponent";
import {Col, Row} from "react-bootstrap";

export const Illustrations = () => {
    return (
        <>
            <Row className={'pt-5 pb-5'}>
                <Col sm={2}/>
                <Col sm={4}>
                    <IllustrationComponent imageSrc={"../../../Illustrations/2cv.png"} imageTitle={'2-VC'} imageBio={'Dit is een auto'}/>
                </Col>
                <Col sm={4}>
                    <IllustrationComponent imageSrc={"../../../Illustrations/beast_of_no_nation.png"} imageTitle={'Beast of no nation'} imageBio={'Dit is een werk dat ik gemaakt heb'}/>
                </Col>
                <Col sm={2}/>
            </Row>
            <Row className={'pt-5 pb-5'}>
                <Col sm={2}/>
                <Col sm={4}>
                    <IllustrationComponent imageSrc={"../../../Illustrations/2cv.png"} imageTitle={'2-VC'} imageBio={'Dit is een auto'}/>
                </Col>
                <Col sm={4}>
                    <IllustrationComponent imageSrc={"../../../Illustrations/beast_of_no_nation.png"} imageTitle={'Beast of no nation'} imageBio={'Dit is een werk dat ik gemaakt heb'}/>
                </Col>
                <Col sm={2}/>
            </Row>
        </>
    )
}