import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Image } from '..'
import {Bsc,Pancakewsap } from '../../images'
import Fade from 'react-reveal/Fade';

const FriendSection = ({ t }) => {
    return (
        <div className='charity_section_img mt-3 py-5'>
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col xl="12">
                        <h2 className="text-center big_font">{t('home.friends')}</h2>
                        <Fade bottom>
                            <h2 className="text-center pb-4">
                                {t('home.friends_of')} <span className="heading_color">{t('home.safariSwap')}</span></h2>
                        </Fade>
                    </Col>

                    <Col xl="2" lg="2" md="4" sm="4" xs="6" >
                        <Fade bottom>
                            <div className="my-2 p-2">
                                <Image atlName='bsc' imgUrl={Bsc} />
                            </div>
                        </Fade>
                    </Col>
                    <Col xl="2" lg="2" md="4" sm="4" xs="6" >
                        <Fade bottom>
                            <div className="my-2 p-2">
                                <Image atlName='pancakewsap' imgUrl={Pancakewsap} />
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default FriendSection