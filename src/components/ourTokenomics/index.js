import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Tokenomics3, Tokenomics7 } from '../../images'
import { TokenomicsImg } from '..'
import Fade from 'react-reveal/Fade';

const OurTokenomics = ({ t }) => {
    return (

        <div className='tokenomics py-5' id="tokenomics">
            <Container>
                <Row className="justify-content-center">
                    <Col xl="12">
                        {/* <h2 className="text-center big_font mt-3">{t('home.tokenomics')}</h2> */}
                        <Fade bottom>
                            <h2 className="text-center pb-5 mb-2 black_color">{t('home.our_tokenomics')}</h2>
                        </Fade>
                    </Col>

                    <Col xl="4" lg="4" md="12" sm="12" xs="12" className="my-5 px-4" >
                        <Fade bottom>
                            <div className="tokenomics_box p-4">
                                <TokenomicsImg atlName='tokenomics3' imgUrl={Tokenomics3} />
                                <div className="tokenomics_content mt-5 pt-2">
                                    <Fade bottom  >
                                        <span>{t('home.burn')}</span>
                                        <span className="mt-4">{t('home.jackpot')}</span>
                                        <span className="mt-4">{t('home.holder')}</span>
                                        <span className="mt-4">{t('home.liquidity')}</span>
                                        <p className="mt-3">{t('home.transaction')}</p>
                                    </Fade>
                                </div>
                            </div>
                        </Fade>
                    </Col>
                    <Col xl="4" lg="4" md="12" sm="12" xs="12" className="my-5 px-4">
                        <Fade bottom>
                            <div className="tokenomics_box p-4">
                                <TokenomicsImg atlName='tokenomics7' imgUrl={Tokenomics7} />
                                <div className="tokenomics_content mt-5 pt-2">
                                    <Fade bottom >
                                        <span>{t('home.variable')}</span>
                                        <p className="mt-3">{t('home.tOTAL_sUPPLY')}</p>
                                    </Fade>
                                </div>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default OurTokenomics