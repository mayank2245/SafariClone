import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { DocumentImg } from '..'
import { Disclaimer } from '..'
import { Babydogfast, Audit, Documents, Paper, Whitepaper } from '../../images'
import Fade from 'react-reveal/Fade';

const DocumentSection = ({ t, language }) => {
    return (
			<>
				<div className='documents py-5' id='documents'>
					<Container>
						<Row className='justify-content-center align-items-center'>
							<Col xl='12'>
								<Fade bottom>
									{/* <h2 className="text-center big_font">{t('home.documents')}</h2> */}
									<h2 className='text-center document_heading'>
										{t("home.our")} <span>{t("home.documents")}</span>
									</h2>
									{/* <p className="text-center">{t('home.the_packaging')}</p> */}
								</Fade>
							</Col>
							<Col xl='6' lg='6' className='mt-1 mb-4'>
								<Fade bottom>
									<div className='documents_img'>
										<div className=''>
											<Disclaimer atlName='whitepaper' imgUrl={Documents} />
											<div className='img1'>
												<Disclaimer atlName='Grass' imgUrl={Paper} />
											</div>
											<div className='img2'>
												<Disclaimer atlName='Grass' imgUrl={Paper} />
											</div>
											<div className='img3'>
												<Disclaimer atlName='Grass' imgUrl={Paper} />
											</div>
										</div>
									</div>
								</Fade>
							</Col>
							<Col xl='6' lg='6'>
								<Fade bottom>
									<Row>
										<Col md='6' xs='12' className='my-3 doucment_size'>
											<div className='document_box p-3 my-3'>
												<Row className='justify-content-center align-items-center'>
													<Col xs='12'>
														<div className='documents_left_img mt-3'>
															<DocumentImg
																atlName='whitepaper'
																imgUrl={Whitepaper}
															/>
														</div>
													</Col>
													<Col xs='12'>
														<div className='ms-3 mt-3'>
															<h4>{t("home.white_paper")}</h4>
															{language === "cn" ? (
																<a href='https://drive.google.com/file/d/1e9rAMejhU4Rpg-Ihwl7sPLSwgwOdxBck/view?usp=sharing'>
																	{t("home.click_here")}
																</a>
															) : (
																<a href='https://drive.google.com/file/d/1_MNrM-tpPm1Vd-BuDzC8vkVkbqhAf9Q6/view?usp=sharing'>
																	{t("home.click_here")}
																</a>
															)}
														</div>
													</Col>
												</Row>
											</div>
										</Col>
										<Col md='6' xs='12' className='my-3 doucment_size'>
											<div className='document_box p-3 my-3'>
												<Row className='justify-content-center align-items-center'>
													<Col xs='12'>
														<div className='documents_left_img audit_img mt-3'>
															<DocumentImg atlName='woofpaper' imgUrl={Audit} />
														</div>
													</Col>
													<Col xs='12'>
														<div className='ms-3 mt-3'>
															<h4>{t("home.audit")}</h4>
															<a href='#'>{t("home.coming_soon")}</a>
														</div>
													</Col>
												</Row>
											</div>
										</Col>
									</Row>
								</Fade>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
}
export default DocumentSection