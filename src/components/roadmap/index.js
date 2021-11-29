import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { ClockLoader } from "react-spinners";

const Roadmap = ({ t, language }) => {
	console.log(language, '>>>>>>sdfs<<<<<<<<<');
	return (
		<div className='roadmaps py-5' id='roadmaps'>
			<Container>
				<Row className='justify-content-center align-items-center'>
					<Col xl='12'>
						<Fade bottom>
							{/* <h2 className="text-center big_font">{t('home.roadmap')}</h2> */}
							{/* <h2 className='pb-4'>{t("home.our_roadmap")}</h2> */}
						</Fade>
					</Col>
					<Col xs='12'>
						<Fade bottom>
							<div className='roadmap p-4'>
								<div>
									<h6
										style={{
											display: "flex",
											justifyContent: "center",
											// lineHeight: "5px",
											fontSize: "0.9rem",
											color: "darkred",
										}}
									>
										ROADMAP
									</h6>
									<h2
										style={{
											display: "flex",
											justifyContent: "center",
											lineHeight: "80px",
										}}
									>
										Exciting Times Ahead
									</h2>
								</div>
								<p style={{ display: "flex", justifyContent: "center" }}>
									One of the most common questions we receive from the community
									is about the Polychain Monsters Roadmap. At a high level, our
									vision is to create a collectibles and gaming ecosystem with
									mainstream appeal. We are confident that our team’s extensive
									background in Product- and App Development will enable us to
									establish a Polychain Monsters Universe that is accessible and
									enjoyable for people of all backgrounds.
								</p>
								<div style={{ display: "flex", justifyContent: "center" }}>
									<button
										style={{
											backgroundColor: "#4f1728",
											borderRadius: "5px",
											color: "white",
										}}
									>
										Find Out More
									</button>
								</div>
							</div>
						</Fade>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Roadmap;
