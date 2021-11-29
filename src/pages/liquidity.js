import React from "react";
import {
	Telegram,
	Twitter,
	MediumIcon,
	Reddit,
	Logo,
	Lion,
	Megaphone,
	NatureImg,
} from "../images";
import { navigate, Link } from "gatsby";
import {
	Navbar,
	Container,
	Nav,
	NavDropdown,
	Col,
	Row,
	Button,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Disclaimer } from "../components/index";
import useDocumentScrollThrottled from "../helper/useDocumentScrollThrottled";
import GroupSocialIcon from "../components/groupSocialIcon";

const Liquidity = () => {
	const { t, i18n } = useTranslation();

	useDocumentScrollThrottled((callbackData) => {
		const { currentScrollTop, previousScrollTop } = callbackData;
		if (currentScrollTop > 60) {
			document.getElementById("navbar").style.padding = "4px";
			document.getElementById("navbar").style.fontSize = "1rem";
			document.getElementById("navbar").style.backgroundColor = "white";
			// document.getElementById("nav-links").style.color = "black";
			// document.getElementById("nav-links2").style.color = "black";
			// document.getElementById("nav-lang").style.color = "black";
			document.getElementById("logo").style.color = "black";
			// document.getElementById("basic-nav-dropdown").style.color = "black";
			document.getElementById("navbar").style.boxShadow =
				"1px 1px 8px 1px rgba(102,102,102,.6)";
			document.getElementById("toggle").style.filter = "brightness(1)invert(0)";
			document.getElementById("navbar").style.transition = "0.6s";
		} else if (currentScrollTop > 0 || currentScrollTop <= 60) {
			document.getElementById("navbar").style.padding = "10px 10px";
			// document.getElementById("nav-lang").style.color = "black";
			document.getElementById("logo").style.color = "black";
			document.getElementById("navbar").style.transition = "0s";
			document.getElementById("navbar").style.backgroundColor = "transparent";
			document.getElementById("navbar").style.fontSize = "1.05rem";
			document.getElementById("navbar").style.boxShadow =
				"0px 0px 0px 0px rgba(0,0,0,0)";
			// document.getElementById("nav-links").style.color = "black";
			// document.getElementById("nav-links2").style.color = "black";
			// document.getElementById("basic-nav-dropdown").style.color = "black";
			document.getElementById("toggle").style.filter = "brightness(1)invert(0)";
		}
	});

	return (
		<div>
			<div style={{ display: "flex" }}>
				<Navbar
					className='navbar navbar-light'
					expand='lg'
					fixed='top'
					id='navbar'
					// style={{ marginTop: "50px" }}
				>
					<Container>
						<Navbar.Brand
							className='logo_img align-items-center justify-content-center'
							id='logo'
						>
							<a href='/'>
								<Disclaimer atlName='telegram' imgUrl={Logo} />
							</a>
							<div className='py-3 ps-3' style={{ color: "black" }}>
								{t("SafariSwap")}
							</div>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' id='toggle' />
						<Navbar.Collapse
							id='basic-navbar-nav'
							className='justify-content-end'
						>
							<Nav className='mobile_menu mobile_menu_open'>
								<div className='buylink' style={{ display: "flex" }}>
									<div style={{ display: "flex", alignItems: "center" }}>
										<a href='/buy'>
											<Button
												className='buybutton'
												type='submit'
												// onClick={() => {
												// 	navigate("/buy");
												// }}
											>
												Buy
												<img
													className='pancakeIcon'
													alt='pancakeswap'
													src='/static/pancakeswap-e1d4dec34dc4d1c7355331f9abd4f8dd.png'
													id='pancakeswap_icon'
												/>
											</Button>
										</a>
									</div>
									{/* 	
										</BrowserRouter>
									</a> */}
									<div style={{ display: "flex", alignItems: "center" }}>
										<a href='https://app.safariswap.io/'>
											<Button
												// variant='custom'
												className='launchbutton'
												type='submit'
											>
												Launch App
											</Button>
										</a>
									</div>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<a href='https://docs.safariswap.io/'>
											<Button
												// variant='custom'
												className='gitdocsbutton'
												type='submit'
											>
												Git Docs
											</Button>
										</a>
									</div>
								</div>

								<Nav.Link
									onClick={() => navigate("/liquidity")}
									id='nav-links'
									className='px-3 py-3'
									style={{ color: "black" }}
								>
									{t("Earn Credit")}
								</Nav.Link>
								<Nav.Link
									href='https://app.safariswap.io/lootbox'
									id='nav-links'
									className='px-3 py-3'
									style={{ color: "black" }}
								>
									{t("Open Tresaure Box")}
								</Nav.Link>

								<Nav.Link
									href='https://app.safariswap.io/inventory'
									id='nav-links'
									className='px-3 py-3'
									style={{ color: "black" }}
								>
									{t("My Inventory")}
								</Nav.Link>

								<Nav.Link
									href='#tokenomics'
									id='nav-links'
									className='px-3 py-3'
									style={{ color: "black" }}
								>
									{t("Game")}
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
			<div
				className='height-space-footer height-space-header'
				style={{ height: "5rem" }}
			></div>
			<div className='col-12'>
				<div className='section_title oflow-hd'>
					<div className='section_title_with_img oflow-hd'>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									marginRight: "0.5rem",
									marginTop: "0.7rem",
								}}
								className='liquitext'
							>
								<h2 style={{ fontSize: "40px", fontWeight: "500px" }}>
									Earn Credit
								</h2>
							</div>
							<img src={NatureImg} alt='img' width='40px' height='40px' />{" "}
						</div>
					</div>
				</div>
			</div>
			<div
				className='height-space-footer height-space-header'
				style={{ height: "3rem" }}
			></div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					// marginTop: "3rem",
				}}
			>
				<iframe
					className='video'
					src='https://pancakeswap.finance/add/0x080cC6eb47DCae6a42fc5408eBd5CF2AA05eAEc3/0x55d398326f99059fF775485246999027B3197955'
					style={{ width: "55%", height: "80vh", borderRadius: "10px" }}
					// style={{border:'0', margin:'0 auto', borderRadius:'10px', maxWidth:'100%'}}
					id='myId'
				></iframe>
			</div>
			<div
				className='height-space-footer height-space-header'
				style={{ height: "5rem" }}
			></div>
			<div className='footerContainer'>
				<Container>
					<Row>
						<Col lg='6' md='12' className='footerstyle'>
							<GroupSocialIcon />
						</Col>

					</Row>
					<hr className='white_color mt-5' />
					<Row>
						<Col lg='6' md='12'>
							<p className='white_color copyright'>
								Copyright © 2021 SafariSwap. All Rights Reserved.{" "}
							</p>
						</Col>
						<Col lg='6' md='12'>
							<div className='privacy_policy'>
								<a href='#' className='white_color'>
									<p className='privacy_inline'>Privacy Policy</p>
								</a>
								<a href='#' className='white_color'>
									<p className='privacy_inline'>Terms Conditions</p>
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Liquidity;
