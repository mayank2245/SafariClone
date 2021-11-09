import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { Col, Container, Row } from "react-bootstrap";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import { Disclaimer } from '..'
import { Freelance1, Freelance2, Freelance5, Freelance4, Freelance3, Freelance6 } from '../../images'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay, Navigation]);

export default function Carousle({ t }) {
    return (
        <>
            <div className="carousel py-5">
                <Container>
                    <Fade bottom>
                        <h2 className=" pb-2 text-center big_font"></h2>
                        <h2 className="text-center pb-5 black_color ">{t('home.get_inspired')}</h2>
                    </Fade>
                    <Slide bottom>
                        <Swiper
                            breakpoints={{
                                "0": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 20,
                                    "margin": 15,
                                },
                                "640": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 20
                                },
                                "768": {
                                    "slidesPerView": 2,
                                    "spaceBetween": 30
                                },
                                "1024": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 30
                                },
                                "1200": {
                                    "slidesPerView": 4,
                                    "spaceBetween": 30
                                }
                            }}
                            spaceBetween={30} freeMode={true} pagination={{
                                "clickable": true
                            }} autoplay={{ "delay": 2500 }} navigation={true} className="mySwiper">
                            <SwiperSlide>
                                <div className="freelance_project">
                                    <div className="project_img">
                                        <Disclaimer atlName='Freelance1' imgUrl={Freelance1} />
                                    </div>
                                    <div className="project_footer p-3">
                                        <Row>
                                            <Col xs="2">
                                                <div className="footer_image">
                                                    <Disclaimer atlName='Freelance1' imgUrl={Freelance1} />
                                                </div>
                                            </Col>
                                            <Col xs="10">
                                                <Row className="freelance_topic">
                                                    <Col xs="12">
                                                        <h6 className="footer_heading">{t('home.lion')}</h6>
                                                    </Col>
                                                    <Col xs="12">
                                                        <p className="footer_span">
                                                            {t('home.comman')}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="freelance_project">
                                    <div className="project_img">
                                        <Disclaimer atlName='Freelance2' imgUrl={Freelance2} />
                                    </div>
                                    <div className="project_footer p-3">
                                        <Row>
                                            <Col xs="2">
                                                <div className="footer_image">
                                                    <Disclaimer atlName='Freelance2' imgUrl={Freelance2} />
                                                </div>
                                            </Col>
                                            <Col xs="10">
                                                <Row className="freelance_topic">
                                                    <Col xs="12">
                                                        <h6 className="footer_heading">{t('home.leopard')}</h6>
                                                    </Col>
                                                    <Col xs="12">
                                                        <p className="footer_span">
                                                            {t('home.comman')}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="freelance_project">
                                    <div className="project_img">
                                        <Disclaimer atlName='Freelance3' imgUrl={Freelance3} />
                                    </div>
                                    <div className="project_footer p-3">
                                        <Row>
                                            <Col xs="2">
                                                <div className="footer_image">
                                                    <Disclaimer atlName='Freelance3' imgUrl={Freelance3} />
                                                </div>
                                            </Col>
                                            <Col xs="10">
                                                <Row className="freelance_topic">
                                                    <Col xs="12">
                                                        <h6 className="footer_heading">{t('home.cheetah')}</h6>
                                                    </Col>
                                                    <Col xs="12">
                                                        <p className="footer_span">
                                                            {t('home.comman')}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="freelance_project">
                                    <div className="project_img">
                                        <Disclaimer atlName='Freelance4' imgUrl={Freelance4} />
                                    </div>
                                    <div className="project_footer p-3">
                                        <Row>
                                            <Col xs="2">
                                                <div className="footer_image">
                                                    <Disclaimer atlName='Freelance4' imgUrl={Freelance4} />
                                                </div>
                                            </Col>
                                            <Col xs="10">
                                                <Row className="freelance_topic">
                                                    <Col xs="12">
                                                        <h6 className="footer_heading">   {t('home.crocodile')}</h6>
                                                    </Col>
                                                    <Col xs="12">
                                                        <p className="footer_span">
                                                            {t('home.comman')}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="freelance_project">
                                    <div className="project_img">
                                        <Disclaimer atlName='Freelance5' imgUrl={Freelance5} />
                                    </div>
                                    <div className="project_footer p-3">
                                        <Row>
                                            <Col xs="2">
                                                <div className="footer_image">
                                                    <Disclaimer atlName='Freelance5' imgUrl={Freelance5} />
                                                </div>
                                            </Col>
                                            <Col xs="10">
                                                <Row className="freelance_topic">
                                                    <Col xs="12">
                                                        <h6 className="footer_heading">   {t('home.hyena')}</h6>
                                                    </Col>
                                                    <Col xs="12">
                                                        <p className="footer_span">
                                                            {t('home.comman')}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="freelance_project">
                                    <div className="project_img">
                                        <Disclaimer atlName='Freelance6' imgUrl={Freelance6} />
                                    </div>
                                    <div className="project_footer p-3">
                                        <Row>
                                            <Col xs="2">
                                                <div className="footer_image">
                                                    <Disclaimer atlName='Freelance6' imgUrl={Freelance6} />
                                                </div>
                                            </Col>
                                            <Col xs="10">
                                                <Row className="freelance_topic">
                                                    <Col xs="12">
                                                        <h6 className="footer_heading"> {t('home.early_liqudity')}</h6>
                                                    </Col>
                                                    <Col xs="12">
                                                        <p className="footer_span">
                                                            {t('home.special')}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Slide>
                </Container>
            </div>
        </>
    )
}