import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NatureImg } from '../../images'
import { ListingImg } from '..'
import Fade from 'react-reveal/Fade';

const NatureSection =({t})=>{
    return(
        <div className="nature_section py-4">
        <Container>
            <Row className="align-items-center justify-content-center">
                <Col lg="6" md="12">
                <div className="nature_img">
                        <Fade bottom>
                            <ListingImg atlName='nature' imgUrl={NatureImg} />
                        </Fade>
                    </div>
                </Col>
                <Col lg="6" md="12">
                <div className="nature_heading mt-3">
                        <Fade bottom >
                            <h2 className="">{t('home.nature_credit')} </h2>
                            <p>{t('home.use_nature')}</p>
                        </Fade>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default NatureSection