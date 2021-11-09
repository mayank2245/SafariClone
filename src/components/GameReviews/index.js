import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Tokenomics4, Tokenomics5, Tokenomics6 } from "../../images";
import { TokenomicsImg } from "..";
import { CharityDonationImg } from "..";
import Fade from "react-reveal/Fade";

const GameReviews = ({ t }) => {
	return (
		<div className='why_safari_swap py-5' id='why_safari'>
			<Container>
				<Row>
					<Col xl='12'>
						<Fade bottom>
							<h2 className='mb-4'>Game Reviews</h2>
						</Fade>
					</Col>
					<Col xl='4' lg='4' md='12' sm='12' xs='12' className='my-3 px-4'>
						<Fade bottom>
							<div className='game_review pb-4'>
								<video
									controls
									autoPlay
									src={
										"https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4"
									}
									style={{
										// borderRadius:'25px',
										height: "100%",
										width: "100%",
									}}
								/>
							</div>
						</Fade>
					</Col>
					<Col xl='4' lg='4' md='12' sm='12' xs='12' className='my-3 px-4'>
						<Fade bottom>
							<div className='game_review pb-4'>
								<video
									controls
									autoPlay
									src={
										"https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
									}
									style={{
										// borderRadius:'25px',
										height: "100%",
										width: "100%",
									}}
								/>
							</div>
						</Fade>
					</Col>
					<Col xl='4' lg='4' md='12' sm='12' xs='12' className='my-3 px-4'>
						<Fade bottom>
							<div className='game_review pb-4'>
								<video
									controls
									autoPlay
									src={
										"https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
									}
									style={{
										// borderRadius:'25px',
										height: "100%",
										width: "100%",
									}}
								/>
							</div>
						</Fade>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default GameReviews;
