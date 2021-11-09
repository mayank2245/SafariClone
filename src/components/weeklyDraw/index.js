import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { WeeklyImg } from '../../images'
import { ListingImg } from '..'
import Fade from 'react-reveal/Fade';

const WeeklyDraw = ({t}) => {
    return (
        <div className="weeklydraw py-5 ">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col lg="6" md="12">
                        <div className="weeklyheading py-5 mt-3">
                            <Fade left >
                                <h2 className="pb-2">{t('home.weekly')} <br />{t('home.draw_system')}</h2>
                                <p>{t('home.buy_treasure')}</p>
                            </Fade>
                        </div>
                    </Col>
                    <Col lg="6" md="12">
                        <div className="weeklyimg">
                            <Fade right>
                                <ListingImg atlName='weekly' imgUrl={WeeklyImg} />
                            </Fade>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default WeeklyDraw