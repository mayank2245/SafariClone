import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Token_detail = ({t}) =>{
    return (
			<div
				className='token'
				style={{ backgroundColor: "#F2F3FA", padding: "1rem" }}
			>
				<Container>
					<Row className='align-items-center justify-content-center'>
						<Col xl='12'>
							<Fade bottom>
								<h2 className='mb-4'>{t("home.token_detail")}</h2>
							</Fade>
						</Col>
						<div className='details'>
							<p>
								{t("home.Address")} : 0x080cc6eb47dcae6a42fc5408ebd5cf2aa05eaec3{" "}
							</p>
							<p>
								{t("home.Name")} : {t("home.token_name")}{" "}
							</p>
							<p>
								{t("home.Symbol")} : {t("home.symbol_name")}{" "}
							</p>
							<p>{t("home.Decimal")} : 18 </p>
							<p>
								{t("home.Network")} : {t("home.network_name")}{" "}
							</p>
						</div>
					</Row>
				</Container>
			</div>
		);
}

export default Token_detail;