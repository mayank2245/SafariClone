import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { CharityImages } from '..'
import { Furkids, Paws } from '../../images'

const CharitySection = ({ t }) => {
    return (
        <div className='charity_section_img pt-4 pb-5'>
            <Container>
                <Row className="align-items-center justify-content-center">
                    <div>
                        <h2 className="text-center big_font">{t('home.charity_partners')}</h2>
                        <h2 className="text-center pb-3">{t('home.charity')} <span className="heading_color">{t('home.partnerss')}</span></h2>
                    </div>
                    <Col md="2" xs="6">
                        <CharityImages atlName='paws' imgUrl={Paws} />
                    </Col>
                    <Col md="2" xs="6">
                        <CharityImages atlName='furkids' imgUrl={Furkids} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default CharitySection