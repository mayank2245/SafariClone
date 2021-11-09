import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Yahoo, Benzinga, Business, Marketwatch, Newsweek, Nyp } from '../../images'
import { Image } from '..'



const AsSeenSection = () => {
    return (
        <>
            <div className='seen_in pt-4 pb-5'>
                <Container>
                    <Row>
                        <Col lg="12">
                            <h2 className="text-center big_font">As Seen In</h2>
                            <h2 className="text-center pb-3">As <span className="heading_color">Seen In</span></h2>
                        </Col>
                        <Col lg="2" md="4" sm="4" xs="6">
                            <Image atlName="yahoo" imgUrl={Nyp} />
                        </Col>
                        <Col lg="2" md="4" sm="4" xs="6">
                            <Image atlName="yahoo" imgUrl={Business} />
                        </Col>
                        <Col lg="2" md="4" sm="4" xs="6">
                            <Image atlName="yahoo" imgUrl={Yahoo} />
                        </Col>
                        <Col lg="2" md="4" sm="4" xs="6">
                            <Image atlName="yahoo" imgUrl={Newsweek} />
                        </Col>
                        <Col lg="2" md="4" sm="4" xs="6">
                            <Image atlName="yahoo" imgUrl={Benzinga} />
                        </Col>
                        <Col lg="2" md="4" sm="4" xs="6">
                            <Image atlName="yahoo" imgUrl={Marketwatch} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default AsSeenSection