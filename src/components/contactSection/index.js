import React from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { RightArrow, Email } from '../../images'
import { Disclaimer } from '..'
    const ContactSection = ({ t }) => {
    return (
        <>
            <div className='contact mt-3 py-5' id="contact" style={{backgroundColor: '#1f2329'}} >
                <Container  style={{backgroundColor: '#1f2329'}} >
                    <div className="contact-container">
                        <div className="contact-card" >
                            <p className="title" >Contact Us</p>
                            <p className="email" > <img src={Email} alt="mail" width="30" height="auto" /> <span className="email-text text" >business@safariswap.io</span> </p>
                            <Button variant='custom' className="email-button Btn" >Email Us <img className="button-image" src={RightArrow} alt="" width="20" height="auto" /> </Button>
                        </div> 
                    </div>
                    {/* <Row className="contact_box py-5">
                        <Col xl="12">
                            <h2 className="text-center big_font">{t('home.contact_us')}</h2>
                            <h2 className="text-center">{t('home.contact')} <span className="heading_color">{t('home.us')}</span></h2>
                        </Col>
                        <Col xl="5" lg="5">
                            <div className="px-4">
                                <Disclaimer atlName="contact" imgUrl={Contact} />
                            </div>
                        </Col>
                        <Col xl="7" lg="7">
                            <div className="contact_form px-4 pt-4">
                                <Form>
                                    <Form.Group className="mb-4" controlId="formBasicName">
                                        <Form.Label className="contact_label mb-2">{t('home.full_name')}</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Your Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formBasicEmail">
                                        <Form.Label className="contact_label mb-2">{t('home.email_address')}</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your Email" />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className="contact_label mb-2">{t('home.your_message')}</Form.Label>
                                        <Form.Control as="textarea" rows={1} placeholder="Type your message here...." />
                                    </Form.Group>
                                    <div className="text-end">
                                        <Button variant="custom" className="Btn" type="submit">{t('home.submit')}
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row> */}
                </Container>
            </div>
        </>
    )
}
export default ContactSection