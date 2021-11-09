import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Roadmap = ({ t, language }) => {
	console.log(language, '>>>>>>sdfs<<<<<<<<<');
	return (
		<div className='roadmaps py-5' id='roadmaps'>
			<Container>
				<Row className='justify-content-center align-items-center'>
					<Col xl='12'>
						<Fade bottom>
							{/* <h2 className="text-center big_font">{t('home.roadmap')}</h2> */}
							<h2 className='pb-4'>{t("home.our_roadmap")}</h2>
						</Fade>
					</Col>
					<Col xs='12'>
						<Fade bottom>
							<div className='roadmap p-4'>
								<iframe
									className='ptb_25 pr-5 pl-5'
									width='100%'
									height='500'
									src='https://miro.com/app/live-embed/o9J_l-EDexs=/?moveToViewport=-1124,-576,2991,1661'
									frameBorder='0'
									scrolling='no'
									allowFullScreen=''
								></iframe>
							</div>
						</Fade>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Roadmap;
