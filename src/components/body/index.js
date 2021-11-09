import React from 'react'
import { Col, Row, Card, Container } from 'react-bootstrap'
import RewardsIcon from '../rewardsIcon'
import { Lootbox, Jackpot, High, Dex,Leave } from '../../images'
import { seenImages } from '..'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Disclaimer } from '..'

const Rewards = ({ t }) => {
    return (
        <>
            {/* <ul class="bg-bubbles">
                <li><Disclaimer atlName='Dex' imgUrl={Leave} /></li>
                <li><Disclaimer atlName='Dex' imgUrl={Leave} /></li>
                <li><Disclaimer atlName='Dex' imgUrl={Leave} /></li>
                <li><Disclaimer atlName='Dex' imgUrl={Leave} /></li>
                <li><Disclaimer atlName='Dex' imgUrl={Leave} /></li>
                <li><Disclaimer atlName='Dex' imgUrl={Leave} /></li>
                <li><Disclaimer atlName='Dex' imgUrl={Leave} /></li>
                <li><Disclaimer atlName='Dex' imgUrl={Leave} /></li>
                <li><Disclaimer atlName='Dex' imgUrl={Leave} /></li>
                <li><Disclaimer atlName='Dex' imgUrl={Leave} /></li>     
            </ul> */}
            <div className=" mb-5 rewards overflow">
                <Container>
                    <Row>
                        <Col xl="6" lg="12" className="pt-5 rewards_content">
                            <Fade bottom>
                                <h2 className="heading_color reward_head">{t('home.our')}<br />{t('home.ecosystem')} </h2>
                                <p className="text_justify">{t('home.as_a_nft')}</p>
                            </Fade>
                        </Col>
                        <Col xl="6" lg="12" className="pt-3">
                            <Fade bottom>
                                <Row>
                                    <Col lg="6" md="12" sm="12" className="my-3">
                                        <Card className="one_box my-3">
                                            <Fade bottom>
                                                <div className="rewards_responsive">
                                                    <RewardsIcon atlName='Dex' imgUrl={Dex} />
                                                </div>
                                                <Card.Body className="pt-1">
                                                    <Card.Title className="one_box_heading text-center">{t('home.dex')}</Card.Title>
                                                    <Card.Text className="text-center">
                                                        {t('home.decentralized')}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Fade>
                                        </Card>
                                    </Col>
                                    <Col lg="6" md="12" sm="12" className="my-3">
                                        <Card className="one_box my-3">
                                            <Fade bottom>
                                                <RewardsIcon atlName='lootbox' imgUrl={Lootbox} />
                                                <Card.Body className="pt-1">
                                                    <Card.Title className="one_box_heading text-center">{t('home.mystery')}</Card.Title>
                                                    <Card.Text className="text-center">{t('home.nft')}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Fade>
                                        </Card>
                                    </Col>
                                    <Col lg="6" md="12" sm="12" className="my-3">
                                        <Card className="one_box my-3">
                                            <Fade bottom>
                                                <div className="rewards_responsive">
                                                    <RewardsIcon atlName='jackpot' imgUrl={Jackpot} />
                                                </div>
                                                <Card.Body className="pt-1">
                                                    <Card.Title className="one_box_heading text-center">{t('home.jack')}</Card.Title>
                                                    <Card.Text className="text-center">{t('home.user_can')}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Fade>
                                        </Card>

                                    </Col>


                                    <Col lg="6" md="12" sm="12" className="my-3">
                                        <Card className="one_box my-3">
                                            <Fade bottom>
                                                <RewardsIcon atlName='high rewards' imgUrl={High} />
                                                <Card.Body className="pt-1">
                                                    <Card.Title className="one_box_heading text-center">{t('home.high_rewards')}</Card.Title>
                                                    <Card.Text className="text-center">{t('home.nft_holders')}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Fade>
                                        </Card>
                                    </Col>
                                </Row>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Rewards