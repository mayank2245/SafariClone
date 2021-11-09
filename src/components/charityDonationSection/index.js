import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Charityhands, Transfur, Transfurpng } from '../../images'
import { CharityDonationImg } from '..'

const CharityDonationSection = ({ t }) => {
    return (
        <>
            <div className='charity_donation pt-4 pb-5' id="charity">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h2 className="text-center big_font">{t('home.charity_donations')}</h2>
                            <h2 className="text-center pb-5 black_color ">{t('home.charity')} <span className="heading_color">{t('home.donations')}</span></h2>
                        </Col>
                        <div className="background_white charity_donate p-5">
                            <div className="hands_img">
                                <CharityDonationImg atlName="transfurs" imgUrl={Charityhands} />
                            </div>
                            <Row className="align-items-center">
                                <Col className="text-center" md="6" sm="12">
                                    <CharityDonationImg atlName="transfurs" imgUrl={Transfurpng} />
                                </Col>
                                <Col md="6" sm="12">
                                    <h4 className="mt-4">{t('home.our')} <span className="heading_color">{t('home.first_donation')}</span></h4>
                                    <p>{t('home.pawsWithCause')}</p>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default CharityDonationSection