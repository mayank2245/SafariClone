import React, { useEffect, useState } from "react";
import { Col, Container, Fade, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { withTrans } from "../../i18n/withTrans";
import line1 from "../../images/starNfts/line1";
import line2 from '../../images/starNfts/line2'

const imageArray1 = line1.reverse();

const StarNFTs = ({ t }) => {
	return (
		<>
			<div
				className='contact mt-3 py-5 '
				id='contact'
				style={{ backgroundColor: "#1f2329" }}
			>
				<Container style={{ backgroundColor: "#1f2329" }}>
					<Row className='justify-content-center align-items-center'>
						<Col xl='12'>
							{/* <Fade bottom> */}
							<h2 style={{fontSize:'3.5rem', color:'#fff'}}  className='text-center starnft-heading'>
								{t("home.diff_NFT")}
							</h2>
							{/* </Fade> */}
						</Col>
					</Row>

					<div style={{ display: "flex" }}>
						<marquee scrollamount='6'>
							<div style={{ display: "flex" }}>
								{imageArray1.map((image) => {
									return (
										<div
											className='starnft-container'
											style={{ margin: "20px" }}
										>
											<div className='starnft-card'>
												<img
													src={image}
													alt='image'
													width='120'
													height='auto'
												/>
											</div>
										</div>
									);
								})}
							</div>
						</marquee>
					</div>
					<div style={{ display: "flex" }}>
						<marquee direction='right' scrollamount='6'>
							<div style={{ display: "flex" }}>
								{line2.map((image) => {
									return (
										<div
											className='starnft-container'
											style={{ margin: "20px" }}
										>
											<div className='starnft-card'>
												<img
													src={image}
													alt='image'
													width='120'
													height='auto'
												/>
											</div>
										</div>
									);
								})}
							</div>
						</marquee>
					</div>
				</Container>
			</div>
		</>
	);
};
export default withTrans(StarNFTs);
