import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RewardsImg } from '../../images'
import { ListingImg } from '..'
import Fade from 'react-reveal/Fade';

const RewardsSection = ({ t }) => {
    return (
        <div className="reward_section py-5">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col lg="6" md="12">
                    <div className="reward_img">
                            <Fade bottom>
                                <ListingImg atlName='rewards' imgUrl={RewardsImg} />
                            </Fade>
                        </div>
                    </Col>
                    <Col lg="6" md="12">
                    <div className="reward_heading mt-3">
                            <Fade bottom >
                                <h2 className="">{t('home.rewards')}</h2>
                                <p>{t('home.earn_rewards')}</p>
                            </Fade>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default RewardsSection