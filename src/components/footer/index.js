import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GroupSocialIcon } from "..";
import { NewsLetter } from "..";
import ScrollButton from "../scrollbutton";

const Footer = ({ t }) => {
  return (
    <>
      <div className="footerContainer">
        <Container>
          <Row>
            {/* <Col lg="6" md="12" className='socialRow'>
              <GroupSocialIcon />
            </Col> */}
          </Row>
          <hr className="white_color mt-5" />
          <Row>
            <Col xl='6' lg="6" md="12">
              <p className="white_color copyright">{t('home.copyright')} </p>
            </Col>
            <Col xl='6' lg="6" md="12">
              <div className="privacy_policy">
                <a href="#" className="white_color"><p className="privacy_inline"> {t('home.privacy_policy')}  </p></a>
                <a href="#" className="white_color"><p className="privacy_inline">{t('home.terms_Condition')}</p></a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ScrollButton />
    </>
  );
}

export default Footer;