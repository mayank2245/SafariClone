import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { SocialIcon } from '..'
import { Disclaimer } from '..'
import {Telegram, Twitter, Instagram, MediumIcon, Reddit, Medium, Instalogo, Twitterlogo, Redditlogo, Telelogo } from '../../images'
import Fade from 'react-reveal/Fade';

const CommunitySection = ({ t }) => {
    return (
        <>
            <div className='community py-5' id="community">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <Fade bottom>
                                <div className="community_img">
                                    <div className="twitter_logo">
                                        <Disclaimer atlName='Twitter' imgUrl={Twitterlogo} />
                                    </div>
                                    <div className="medium_logo">
                                        <Disclaimer atlName='medium' imgUrl={Medium} />
                                    </div>
                                    <div className="instagram_logo">
                                        <Disclaimer atlName='Instagram' imgUrl={Instalogo} />
                                    </div>
                                    <div className="reddit_logo">
                                        <Disclaimer atlName='Reddit' imgUrl={Redditlogo} />
                                    </div>
                                    <div className="telegram_logo">
                                        <Disclaimer atlName='Telegram' imgUrl={Telelogo} />
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg="6" md="6">
                            <Fade bottom>
                                <div className="community_content pt-2">
                                    <h2 className="pb-4">{t('home.join_our')} <span>{t('home.community')}</span></h2>
                                    <h5><span className="heading_color">{t('home.follow')} </span>{t('home.us_share')}</h5>
                                    <div className="community_social_icon mt-4">
                                        <Row>
                                            <Col xl="2" lg="2" md="2" sm="2" xs="2" >
                                                <a href="https://t.me/safariswapofficial">
                                                    <SocialIcon atlName='telegram' imgUrl={Telegram} />
                                                </a>

                                            </Col>
                                            <Col xl="2" lg="2" md="2" sm="2" xs="2" >
                                                <a href="https://www.reddit.com/r/Safariswap/">
                                                    <SocialIcon atlName='Reddit' imgUrl={Reddit} />
                                                </a>

                                            </Col>
                                            <Col xl="2" lg="2" md="2" sm="2" xs="2" >
                                                <a href="https://twitter.com/SafariswapDex">
                                                    <SocialIcon atlName='Twitter' imgUrl={Twitter} />
                                                </a>

                                            </Col>
                                            <Col xl="2" lg="2" md="2" sm="2" xs="2" >
                                                <a href="Https://instagram.com/safariswap">
                                                    <SocialIcon atlName='Instagram' imgUrl={Instagram} />
                                                </a>
                                            </Col>
                                            <Col xl="2" lg="2" md="2" sm="2" xs="2" >
                                                <a href="https://medium.com/@safariswapdex">
                                                    <SocialIcon atlName='mediumicon' imgUrl={MediumIcon} />
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default CommunitySection