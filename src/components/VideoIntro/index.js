import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RewardsImg } from "../../images";
// import { ListingImg } from "..";
import Fade from "react-reveal/Fade";

const VideoIntro = ({ t, language }) => {
	console.log(language,'setLanguagennnnnnnnnnnnnnnn')
	return (
		<div className='video_section py-5'>
			<Container>
				<Row className='align-items-center justify-content-center'>
					<Col xl='12'>
						<Fade bottom>
							<h2 className='mb-4'>{t("home.video_intro")}</h2>
						</Fade>
					</Col>
					<div
						className='video_intro'
						style={{
							display: "flex",
							justifyContent: "center",
							alignContent: "center",
						}}
					>
						{language === "cn" ? (
							<iframe
								src='https://drive.google.com/file/d/1zw0-qAFpEssLQ7QkZeg7jR_Tm1VSBLcb/preview'
								allow='autoplay'
								controls
								style={{ width: "96%", height: "500px" }}
							/>
						) : (
							<iframe
								src='https://drive.google.com/file/d/1pfo8S-tcRRcSjK1B2B2aTazg4XR2FC3y/preview'
								allow='autoplay'
								controls
								style={{ width: "96%", height: "500px" }}
							/>
						)}
					</div>
				</Row>
			</Container>
		</div>
	);
};
export default VideoIntro;
