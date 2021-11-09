import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Tokenomics4, Tokenomics5, Tokenomics6 } from '../../images'
import { TokenomicsImg } from '..'
import { CharityDonationImg } from '..'
import Fade from 'react-reveal/Fade';

const WhySafariSwap = ({ t }) => {
    return (
        <div className='why_safari_swap py-5' id="why_safari">
            <Container>
                <Row>
                    <Col xl="12">
                        <Fade bottom >
                            <h2 className="mb-4">{t('home.why')} {t('home.safariSwap')}</h2>
                            <p>{t('home.the_cute')}</p>
                        </Fade>
                    </Col>
                    <Col xl="4" lg="4" md="12" sm="12" xs="12" className="my-3 px-4">
                        <Fade bottom >
                            <div className="why_safariswap pb-4" >
                                <div className="safariswap_img">
                                    <CharityDonationImg atlName='tokenomics5' imgUrl={Tokenomics5} />
                                </div>
                                <div className="safariswap_content p-4 ">
                                    <Fade bottom >
                                        <h4 className="mt-4 text-center">{t('home.community_driven')}</h4>
                                        <p className=" mt-3 mb-1 text-center">{t('home.safariswap_is_a')}</p>
                                    </Fade>
                                </div>
                            </div>
                        </Fade>
                    </Col>
                    <Col xl="4" lg="4" md="12" sm="12" xs="12" className="my-3 px-4">
                        <Fade bottom >
                            <div className="why_safariswap">
                                <div className="safariswap_img">
                                    <CharityDonationImg atlName='tokenomics6' imgUrl={Tokenomics6} />
                                </div>
                                <div className="safariswap_content p-4">
                                    <Fade bottom >
                                        <h4 className="mt-4 text-center">{t('home.automated_reward_staking')}</h4>
                                        <p className=" mt-3 mb-1 text-center">{t('home.hodlers_earn')} </p>
                                    </Fade>
                                </div>
                            </div>
                        </Fade>
                    </Col>
                    <Col xl="4" lg="4" md="12" sm="12" xs="12" className="my-3 px-4">
                        <Fade bottom >
                            <div className="why_safariswap pb-4">
                                <div className="safariswap_img">
                                    <CharityDonationImg atlName='tokenomics4' imgUrl={Tokenomics4} />
                                </div>
                                <div className="safariswap_content p-4 ">
                                    <Fade bottom >
                                        <h4 className="mt-4 text-center">{t('home.gamitication')}</h4>
                                        <p className=" mt-3 mb-1 text-center">{t('home.play')}</p>
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
export default WhySafariSwap