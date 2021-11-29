import React from "react";
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
import {
	Telegram,
	Twitter,
	MediumIcon,
	Reddit,
	Logo,
	Lion,
	Megaphone,
} from "../images";
import { navigate, Link } from "gatsby";
import useDocumentScrollThrottled from "../helper/useDocumentScrollThrottled";
import GroupSocialIcon from "../components/groupSocialIcon";

const BuyToken = ({ location }) => {
	// console.log(location.state.lang);
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
									{/* <a href='https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059ff775485246999027b3197955&outputCurrency=0x080cc6eb47dcae6a42fc5408ebd5cf2aa05eaec3'>
										<BrowserRouter>
									*/}
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
									className='px-3 py-3 leftpadding'
									style={{ color: "black" }}
								>
									{t("Earn Credit")}
								</Nav.Link>
								<Nav.Link
									href='https://app.safariswap.io/lootbox'
									id='nav-links'
									className='px-3 py-3 leftpadding'
									style={{ color: "black" }}
								>
									{t("Open Tresaure Box")}
								</Nav.Link>

								<Nav.Link
									href='https://app.safariswap.io/inventory'
									id='nav-links'
									className='px-3 py-3 leftpadding'
									style={{ color: "black" }}
								>
									{t("My Inventory")}
								</Nav.Link>
								<Nav.Link
									href='#tokenomics'
									id='nav-links'
									className='px-3 py-3 leftpadding'
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
				style={{ height: "130px" }}
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
							<img
								src='/static/pancakeswap-e1d4dec34dc4d1c7355331f9abd4f8dd.png'
								alt='img'
								width='40px'
								height='40px'
							/>{" "}
							<div
								style={{
									display: "flex",
									alignItems: "center",
									marginLeft: "0.5rem",
									marginTop: "0.7rem",
								}}
								className='exchangetext'
							>
								<h2 style={{ fontSize: "40px", fontWeight: "500px" }}>
									Exchange
								</h2>
							</div>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							padding: "0.5rem",
						}}
					>
						<p className='subtext' style={{ textAlign: "center" }}>
							Connect to your wallet first to buy $Nature tokens instantly.
						</p>
					</div>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "3rem",
				}}
			>
				<iframe
					className='video'
					src='https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059ff775485246999027b3197955&outputCurrency=0x080cc6eb47dcae6a42fc5408ebd5cf2aa05eaec3'
					style={{ width: "55%", height: "80vh", borderRadius: "10px" }}
					// style={{border:'0', margin:'0 auto', borderRadius:'10px', maxWidth:'100%'}}
					id='myId'
				></iframe>
			</div>
			{/* <div
				style={{
					maxWidth: "600px",
					display: "block",
					margin: "40px auto 0 auto",
                    padding: '2rem'
				}}
			>
				<p>
					Please be aware of scammers pretending to be Alpha Impact and always
					ensure the token address matches the one on our website,
					www.alphaimpact.fi. None of our team members will request personal
					information or money from you.
				</p>
			</div> */}
			<div
				className='home_v2_hero_buttons'
				style={{ display: "flex", marginTop: "2rem", justifyContent: "center" }}
			>
				<ul
					style={{
						listStyle: "none",
						display: "inline-block",
						width: "100vw",
						paddingInlineStart: "0px",
					}}
				>
					<li>
						<div
							className='home_v2_hero_button_box oflow-hd'
							style={{ display: "flex", justifyContent: "center" }}
						>
							<div class='home_v2_hero_button_box_icon oflow-hd'>
								<img
									src='https://alphaimpact.fi/wp-content/themes/alphaimpactfi-premium/images/help.png'
									alt='img'
									width='30px'
									height='30px'
								/>
							</div>
							<div
								className='home_v2_hero_button_box_details oflow-hd'
								style={{ marginLeft: "1.2rem" }}
							>
								<h3 style={{ fontSize: "15px" }}>
									Need help on how to buy $Nature Tokens?
								</h3>
								<a
									target='_blank'
									href='https://t.me/safariswapofficial'
									style={{ fontSize: "12px", color: "blue" }}
								>
									Contact Safariswap Team on telegram
								</a>
							</div>
						</div>
					</li>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							marginTop: "3rem",
							marginBottom: "3rem",
						}}
					>
						<iframe
							className='video1'
							style={{ width: "55%", height: "80vh", borderRadius: "10px" }}
							src='https://www.youtube.com/embed/1mUbWmIHE6w'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullscreen
							id='myId'
						></iframe>
						{/* <iframe
							className='video'
							src='https://youtu.be/HOKFN7jhXd0?t=499'
							style={{ width: "55%", height: "80vh", borderRadius: "10px" }}
							// style={{border:'0', margin:'0 auto', borderRadius:'10px', maxWidth:'100%'}}
							id='myId'
						></iframe> */}
					</div>
					<li>
						<div
							className='home_v2_hero_button_box oflow-hd'
							style={{ display: "flex", justifyContent: "center" }}
						>
							<div className='home_v2_hero_button_box_icon oflow-hd'>
								<img
									src='https://alphaimpact.fi/wp-content/themes/alphaimpactfi-premium/images/help.png'
									alt='img'
									width='30px'
									height='30px'
								/>
							</div>
							<div
								className='home_v2_hero_button_box_details oflow-hd'
								style={{ marginLeft: "1.2rem" }}
							>
								<h3 style={{ fontSize: "15px" }}>
									Need help on how to create Metamask?
								</h3>
								<a
									target='_blank'
									href='https://medium.com/alphaimpact/alpha-impact-guide-101-how-to-connect-to-metamask-on-uniswap-6e05d7a88dd8'
									style={{ fontSize: "12px", color: "blue" }}
								>
									How to connect MetaMask to Pancake
								</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div className='buy_token_page_telegram_area'>
				<div style={{ height: "85px" }} className='height-space'></div>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='buy_token_page_telegram_contact_box'>
								<div className='buy_token_page_telegram_contact_box_icon'>
									<i className='fab fa-telegram'></i>
								</div>
								<div
									className='buy_token_page_telegram_contact_box_title section_title'
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "center",
									}}
								>
									<h2 style={{ fontSize: "25px" }}>Need More Assistance?</h2>
								</div>
								<div
									className='buy_token_page_telegram_contact_box_button'
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "center",
									}}
								>
									<a
										target='_blank'
										href='#'
										style={{
											color: "white",
											fontSize: "12px",
											backgroundColor: "#069BD9",
											borderRadius: "3px",
											width: "10rem",
											textAlign: "center",
											padding: "0.3rem",
										}}
									>
										OFFICIAL TELEGRAM GROUP
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style={{ height: "100px" }} className='height-space'></div>
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

export default BuyToken;
