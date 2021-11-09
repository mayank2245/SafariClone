import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { ListingImg } from '..'
import {Pancakewsaplogo } from '../../images'

const ListingSection = ({ t }) => {
    return (
        <div className="listing py-4">
            <Container>
                <Row className="justify-content-center align-items-center g-0">
                    <Col sm="6" xs="12">
                        <h5 className="text-end pe-1 listing_heading">{t('home.listing_on')} :</h5>
                    </Col>
                    <Col sm="6" xs="12">
                        <div className="listing_img text-start ps-2">
                            <ListingImg atlName="pancakeswap" imgUrl={Pancakewsaplogo} /> <h5>{t('home.pancakeswap')}</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ListingSection