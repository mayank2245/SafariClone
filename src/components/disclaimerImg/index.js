import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Disclaimer } from '..'
import { Disclaimer1, Disclaimer2, Dogecoinicon, Tablejoin } from '../../images'



const DisclaimerImg = ({ t }) => {
    return (
        <div className='charity_section_img pt-4 pb-5'>
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col xl="12">
                        <h2 className="text-center big_font">{t('home.disclaimer')}</h2>
                        <h2 className="text-center">{t('home.information_is')}</h2>
                    </Col>
                    <Col xl="3">
                        <div className="disclaimer_box">
                            <div className="box_heading d-flex align-items-center py-3 px-4">
                                <Disclaimer atlName='paws' imgUrl={Disclaimer2} />
                                <h5>{t('home.bABYDOGE')}</h5>
                            </div>
                            <div className="box_content">
                                <div className="content_box"></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default DisclaimerImg