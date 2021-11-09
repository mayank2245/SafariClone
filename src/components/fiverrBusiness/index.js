import React from 'react'
import { Button, Col, Container, Row, Badge } from 'react-bootstrap'
import { ListingImg } from '..'
import { Rhino, Freelance6 } from '../../images'
import Fade from 'react-reveal/Fade';

const FiverrBusiness = ({ t }) => {
    return (
        <>
            <div className="fiverrbusiness ">
                <Container>
                    <Row>
                        <Col lg="6" md="12">
                            <Fade bottom big cascade>
                                <div className="fiver_section pt-5">
                                    <h2 className="fiver_firsthed">{t('home.community_presale')} <Badge className="fiver_badge  fiver_new">{t('home.new')}</Badge></h2>
                                    {/* <h2>Join us and be our Early Liquidity Provider!</h2> */}
                                    <p>{t('home.join_us')}</p>
                                    <ul>
                                        <li>{t('home.get_our')}</li>
                                        <li>{t('home.get_a')}</li>
                                        <li>{t('home.listing_price')}</li>
                                    </ul>
                                    <a href="https://elp.safariswap.io" className="Btn">{t('home.purchase_now')}</a>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg="6" md="12">
                            <div className="fiverr_img">
                                <Fade bottom>
                                    <ListingImg atlName='rhino' imgUrl={Rhino} />
                                </Fade>
                            </div>
                        </Col>
                    </Row>
                </Container>


            </div>
        </>
    )
}

export default FiverrBusiness