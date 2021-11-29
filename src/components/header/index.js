import React, { useState, useEffect } from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Outlet,
	useRoutes,
	Link,
} from "react-router-dom";
import { navigate } from "gatsby";

import { Navbar, Container, Nav, NavDropdown, Col, Row, Button } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import { SocialIcon } from '..';
import { Disclaimer } from '..';
import { useTranslation } from "react-i18next"
import useDocumentScrollThrottled from '../../helper/useDocumentScrollThrottled';
// import styled from 'styled-components'
import Unimons from './Unimons.mp4'
import Fade from 'react-reveal/Fade';
import { Telegram, Twitter, MediumIcon, Reddit, Logo, Lion,Megaphone } from '../../images'
import BuyToken from '../../pages/buy'

const Header = ({ onSelectLanguage }) => {
	console.log(onSelectLanguage, ">>>fjkf<<<<");
	const [showDropdownLang, setShowDropdownLang] = useState(false);
	const [language, setLanguage] = useState("en");
	const { t, i18n } = useTranslation();
	const [y, setY] = useState();

	useDocumentScrollThrottled((callbackData) => {
		const { currentScrollTop, previousScrollTop } = callbackData;
		if (currentScrollTop > 60) {
			document.getElementById("navbar").style.padding = "4px";
			document.getElementById("navbar").style.fontSize = "1rem";
			document.getElementById("navbar").style.backgroundColor = "white";
			document.getElementById("nav-links").style.color = "black";
			document.getElementById("nav-links2").style.color = "black";
			// document.getElementById("nav-lang").style.color = "black";
			document.getElementById("logo").style.color = "black";
			// document.getElementById("basic-nav-dropdown").style.color = "black";
			document.getElementById("navbar").style.boxShadow =
				"1px 1px 8px 1px rgba(102,102,102,.6)";
			document.getElementById("toggler").style.filter =
				"brightness(1)invert(0)";
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
			document.getElementById("nav-links").style.color = "black";
			document.getElementById("nav-links2").style.color = "black";
			// document.getElementById("basic-nav-dropdown").style.color = "black";
			document.getElementById("toggler").style.filter =
				"brightness(1)invert(0)";
		}
	});

	const handleChangeLanguage = (lang) => {
		// console.log({ lang })
		i18n.changeLanguage(lang);
		setLanguage(lang);
		setShowDropdownLang(false);
		onSelectLanguage(lang);
	};

	// const App = () => {
	// 	return(
	// 		<Router>
	// 			<Routes>
	// 				<Route path="/buy-token" element={<BuyToken />} />
	// 			</Routes>
	// 		</Router>
	// 	)
	// }


	// useEffect(() => {
		// const canvas = document.getElementById("canvas1");
		// if (canvas != null) {
		// 	const ctx = canvas.getContext("2d");

		// 	canvas.width = window.innerWidth;
		// 	canvas.height = window.innerHeight;

		// 	let area = Math.sqrt(canvas.width * canvas.height);
		// 	let radiusLength = (canvas.width * canvas.height) / 8000;
		// 	// console.log(canvas.width)

		// 	let particlesArray;

		// 	let mouse = {
		// 		x: null,
		// 		y: null,
		// 		radius: radiusLength,
		// 	};

		// 	window.addEventListener("mousemove", function (event) {
		// 		mouse.x = event.x;
		// 		mouse.y = event.y;
		// 	});
		// 	window.addEventListener("mouseout", function (event) {
		// 		mouse.x = undefined;
		// 		mouse.y = undefined;
		// 	});
		// 	window.addEventListener("resize", function (event) {
		// 		canvas.width = window.innerWidth;
		// 		canvas.height = window.innerHeight;
		// 		radiusLength = (canvas.width * canvas.height) / 9000;
		// 		createParticles();
		// 	});

		// 	class Particle {
		// 		constructor(x, y, velX, velY, size, color) {
		// 			this.x = x;
		// 			this.y = y;
		// 			this.velX = velX;
		// 			this.velY = velY;
		// 			this.size = size;
		// 			this.color = color;
		// 		}

		// 		draw() {
		// 			ctx.beginPath();
		// 			//draw a circle and fill it
		// 			//at posX, posY ,of size, fromAngle 0rad ,to 2pi Rad
		// 			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
		// 			ctx.fillStyle = "#8c5523";
		// 			ctx.fill();
		// 		}

		// 		update() {
		// 			if (this.x > canvas.width || this.x < 0) {
		// 				this.velX = -this.velX;
		// 			}
		// 			if (this.y > canvas.height || this.y < 0) {
		// 				this.velY = -this.velY;
		// 			}

		// 			// collisions
		// 			let dx = mouse.x - this.x;
		// 			let dy = mouse.y - this.y;
		// 			let dist = Math.sqrt(dx * dx + dy * dy);
		// 			if (dist < mouse.radius + this.size) {
		// 				//Buffers on edge of the screens
		// 				const buffer = this.size * 10;

		// 				if (mouse.x < this.x && this.x < canvas.width - buffer) {
		// 					this.x += 10;
		// 				}
		// 				if (mouse.x > this.x && this.x > buffer) {
		// 					this.x -= 10;
		// 				}
		// 				if (mouse.y < this.y && this.y < canvas.height - buffer) {
		// 					this.y += 10;
		// 				}
		// 				if (mouse.y > this.y && this.y > buffer) {
		// 					this.y -= 10;
		// 				}
		// 			}

		// 			//moving
		// 			this.x += this.velX;
		// 			this.y += this.velY;
		// 			this.draw();
		// 		}
		// 	}

		// 	function createParticles() {
		// 		particlesArray = [];
		// 		let noOfParticles = (canvas.width * canvas.height) / 5000;

		// 		for (let i = 0; i < noOfParticles; i++) {
		// 			let size = Math.random() * 5 + 1;

		// 			let x = Math.random() * (window.innerWidth - 2 * size) + 2 * size;
		// 			let y = Math.random() * (window.innerHeight - 2 * size) + 2 * size;
		// 			let velX = Math.random() * 5 - 2.5;
		// 			let velY = Math.random() * 5 - 2.5;
		// 			let color = "#8c5523";
		// 			// console.log(x + " " + y + " " + size + " " + velX + " " + velY);

		// 			particlesArray.push(new Particle(x, y, velX, velY, size, color));
		// 		}
		// 	}
		// 	function connect() {
		// 		let vicinityDist = (canvas.width * canvas.height) / 81;
		// 		for (let i = 0; i < particlesArray.length; i++) {
		// 			for (let j = i; j < particlesArray.length; j++) {
		// 				let distance =
		// 					Math.pow(particlesArray[i].x - particlesArray[j].x, 2) +
		// 					Math.pow(particlesArray[i].y - particlesArray[j].y, 2);

		// 				let opacity = 1 - distance / 25000;
		// 				//actually the square of distance

		// 				if (distance < vicinityDist) {
		// 					//draw a line between them
		// 					ctx.strokeStyle = "rgba(100,73,25," + opacity + ")";
		// 					ctx.lineWidth = 1;
		// 					ctx.beginPath();
		// 					ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
		// 					ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
		// 					ctx.stroke();
		// 				}
		// 			}
		// 		}
		// 	}
		// 	function animate() {
		// 		requestAnimationFrame(animate);
		// 		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

		// 		for (let i = 0; i < particlesArray.length; i++) {
		// 			particlesArray[i].update();
		// 		}
		// 		connect();
		// 	}

		// 	createParticles();
		// 	animate();
		// }
	// }, []);
	console.log(language, ">>>lang<<<<");

	// const checkLangugae = (langugae) => {
	//     switch(language){
	//          case 'en':
	//              return {
	//             flag:'um',
	//             lang: 'English'
	//         }
	// case 'cn':
	//     return{
	//         flag:'cn',
	//        lang: '中文'
	//     }
	//         default:
	//         return {
	//             flag:'um',
	//             lang: 'English'
	//         }
	//     }
	// }
		const App=() =>{
			return (
				<BrowserRouter>
					<Routes>
						<Route path='/buy' element={<BuyToken />} />
					</Routes>
				</BrowserRouter>
			);
		}

	return (
		<div>
			{/* <script src="particles.js"></script> */}
			<div
				style={{
					padding: "0.4rem",
					position: "fixed",
					height: "50px",
					backgroundColor: "black",
					color: "white",
					width: "100%",
					textAlign: "center",
					zIndex: "1030",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<p className='advertisement'>
					<img
						className='megaphone'
						src={Megaphone}
						alt='mega'
						width='32px'
						height='auto'
						// style={{ marginRight: "0.8rem", marginTop: "-0.3rem" }}
					/>
					{language === "en"
						? "Read announcement"
						: language === "cn"
						? "阅读公告"
						: "発表を読む"}
					: &nbsp;
					<a
						target='_blank'
						href={
							language === "en"
								? "https://docs.safariswap.io/announcement"
								: language === "cn"
								? "https://docs.safariswap.io/v/chinese-v1.0/announcement"
								: "https://docs.safariswap.io/v/japan-ver1.0.0/announcement"
						}
						style={{ color: "orange" }}
					>
						{language === "en"
							? "New Farming Pool (Oct 16 2021)"
							: language === "cn"
							? "新养殖池（2021 年 10 月 16 日)"
							: "新しい農業プール（2021年10月16日）"}
					</a>
				</p>
			</div>
			<Navbar
				className='navbar navbar-light'
				expand='lg'
				fixed='top'
				id='navbar'
				style={{ marginTop: "50px" }}
			>
				<Container>
					<Navbar.Brand
						className='logo_img align-items-center justify-content-center'
						id='logo'
					>
						<Disclaimer atlName='telegram' imgUrl={Logo} />
						<div className='py-3 ps-3' style={{ color: "black" }}>
							{t("home.safariSwap")}
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' id='toggler' />
					<Navbar.Collapse
						id='basic-navbar-nav'
						className='justify-content-end'
					>
						<Nav className='mobile_menu mobile_menu_open'>
							<div className='buylink'>
								{/* <a href='https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059ff775485246999027b3197955&outputCurrency=0x080cc6eb47dcae6a42fc5408ebd5cf2aa05eaec3'> */}
								{/* <BrowserRouter>
								<Link to='/buy'> */}
									<Button className='buybutton' type='submit' onClick={()=>{navigate('/buy')}}>
									{language === "en"
									? "Buy"
									: language === "cn"
									? "买"
									: "買う"}{" "}
									<img
									className='pancakeIcon'
									alt='pancakeswap'
									src='/static/pancakeswap-e1d4dec34dc4d1c7355331f9abd4f8dd.png'
									id='pancakeswap_icon'
									/>
									</Button>
								{/* </Link>
								</BrowserRouter> */}
								{/* </a> */}
								<a href='https://docs.safariswap.io/'>
									<Button
										// variant='custom'
										className='gitdocsbutton'
										type='submit'
									>
										{language === "en"
											? "Git Docs"
											: language === "cn"
											? "Git 文档"
											: "Gitドキュメント"}
									</Button>
								</a>
							</div>

							{/* <div className='DropdownLang px-3 py-2'>
								<Button
									id='nav-lang'
									variant='custom'
									onClick={() => setShowDropdownLang(!showDropdownLang)}
									// style={{fontSize:'0.9rem', padding: '0.375rem'}}
									style={{ color: "black" }}
								>
									<img
										src={`https://lipis.github.io/flag-icon-css/flags/4x3/${
											language === "en" ? "um" : language === "cn" ? "cn" : "jp"
										}.svg`}
										width='24px'
										style={{
											marginRight: "10px",
											marginBottom: "0",
											position: "relative",
											top: "-2px",
										}}
									/>
									{language === "en"
										? "English"
										: language === "cn"
										? "中文"
										: "日本"}
								</Button>
								{showDropdownLang && (
									<div className='LangList'>
										<ul>
											<li onClick={() => handleChangeLanguage("en")}>
												<img
													src='https://lipis.github.io/flag-icon-css/flags/4x3/um.svg'
													width='24px'
												/>
												<span>English</span>
											</li>
											<li onClick={() => handleChangeLanguage("cn")}>
												<img
													src='https://lipis.github.io/flag-icon-css/flags/4x3/cn.svg'
													width='24px'
												/>
												<span>中文</span>
											</li>
											<li onClick={() => handleChangeLanguage("jp")}>
												<img
													src='https://lipis.github.io/flag-icon-css/flags/4x3/jp.svg'
													width='24px'
												/>
												<span>日本</span>
											</li>
										</ul>
									</div>
								)}
							</div> */}
							<Nav.Link
								href='#tokenomics'
								id='nav-links'
								className='px-3 py-3'
								style={{ color: "black" }}
							>
								{t("Open Booster")}
							</Nav.Link>
							<Nav.Link
								href='#tokenomics'
								id='nav-links'
								className='px-3 py-3'
								style={{ color: "black" }}
							>
								{t("My Collection")}
							</Nav.Link>
							<Nav.Link
								href='#tokenomics'
								id='nav-links'
								className='px-3 py-3'
								style={{ color: "black" }}
							>
								{t("NFT Staking")}
							</Nav.Link>
							{/* <Nav.Link href="#charity" id="nav-links1" className="px-3 py-3">{t('home.charity')}</Nav.Link> */}
							<Nav.Link
								href='#documents'
								id='nav-links2'
								className='px-3 py-3'
								style={{ color: "black" }}
							>
								{t("Staking")}
							</Nav.Link>
							{/* <Nav.Link
								href='#tokenomics'
								id='nav-links'
								className='px-3 py-3'
								style={{ color: "black" }}
							>
								{t("Booster Specials")}
							</Nav.Link>
							<Nav.Link
								href='#tokenomics'
								id='nav-links'
								className='px-3 py-3'
								style={{ color: "black" }}
							>
								{t("Explorer")}
							</Nav.Link> */}
							<Nav.Link
								href='#tokenomics'
								id='nav-links'
								className='px-3 py-3'
								style={{ color: "black" }}
							>
								{t("Game")}
							</Nav.Link>

							{/* <NavDropdown
								title={t("home.more")}
								className='px-3 py-2'
								variant='custom'
								style={{ color: "black !important" }}
								id='basic-nav-dropdown'
							>
								<NavDropdown.Item href='#roadmaps' variant='custom'>
									{t("home.roadmaps")}
								</NavDropdown.Item>
								<NavDropdown.Item href='#community' variant='custom'>
									{t("home.community")}
								</NavDropdown.Item>
							</NavDropdown> */}
							{/* <Nav.Link href="https://pancakeswap.finance/swap#/swap?outputCurrency=0xc748673057861a797275cd8a068abb95a902e8de" className="px-2"><Button variant='custom' className="Btn">Buy Now</Button>{' '}</Nav.Link> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<div className='slide' id='header'>
				<Container>
					<div className='slider'>
						<Row className='align-items-center justify-content-center'>
							<Col lg='6' md='12'>
								<Fade bottom>
									<div className='slider_content'>
										<h1 className='mb-4 white_color' style={{ color: "black" }}>
											{" "}
											{t("home.safariSwap")}
											<span className='white_color' style={{ color: "black" }}>
												,{t("home.giant")}
											</span>
										</h1>
										<a href='https://app.safariswap.io/'>
											<Button
												// variant='custom'
												className='launchbutton'
												type='submit'
											>
												{language === "en"
													? "Buy NFT"
													: language === "cn"
													? "Buy NFT"
													: "Buy NFT"}
											</Button>
										</a>
										{/* <div className='buylink1'>
											<a href='https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059ff775485246999027b3197955&outputCurrency=0x080cc6eb47dcae6a42fc5408ebd5cf2aa05eaec3'>
												<Button className='buybutton' type='submit'>
													{language === "en"
														? "Buy"
														: language === "cn"
														? "买"
														: "買う"}{" "}
													<img
														className='pancakeIcon'
														alt='pancakeswap'
														src='/static/pancakeswap-e1d4dec34dc4d1c7355331f9abd4f8dd.png'
														id='pancakeswap_icon'
													/>
												</Button>
											</a>
											<a href='https://docs.safariswap.io/'>
												<Button
													// variant='custom'
													className='gitdocsbutton'
													type='submit'
												>
													{language === "en"
														? "Git Docs"
														: language === "cn"
														? "Git 文档"
														: "Gitドキュメント"}
												</Button>
											</a>
										</div>
										<div className='header_social_icon mt-4'>
											<Row>
												<Col
													xl='1'
													lg='1'
													md='1'
													sm='1'
													xs='1'
													className='icon_header'
												>
													<a href='https://t.me/safariswapofficial'>
														<SocialIcon atlName='telegram' imgUrl={Telegram} />
													</a>
												</Col>
												<Col
													xl='1'
													lg='1'
													md='1'
													sm='1'
													xs='1'
													className='icon_header'
												>
													<a href='https://www.reddit.com/r/Safariswap/'>
														<SocialIcon atlName='Reddit' imgUrl={Reddit} />
													</a>
												</Col>
												<Col
													xl='1'
													lg='1'
													md='1'
													sm='1'
													xs='1'
													className='icon_header'
												>
													<a href='https://twitter.com/SafariswapDex'>
														<SocialIcon atlName='Twitter' imgUrl={Twitter} />
													</a>
												</Col>
												<Col
													xl='1'
													lg='1'
													md='1'
													sm='1'
													xs='1'
													className='icon_header'
												>
													<a href='https://medium.com/@safariswapdex'>
														<SocialIcon
															atlName='mediumicon'
															imgUrl={MediumIcon}
														/>
													</a>
												</Col>
											</Row>
										</div> */}
									</div>
								</Fade>
							</Col>
							<Col lg='6' md='12'>
								<div className='slider_img'>
									{/* <Disclaimer atlName='slider' imgUrl={Unimons} /> */}
									<video
										className='vid'
										id='auto'
										playsInline
										loop
										muted
										autoPlay
										controls
										preload='auto'
										width='500'
										height='500'
										style={{ borderRadius: "20px" }}
									>
										<source src={Unimons} type='video/mp4' />
									</video>
									<script>document.getElementById('auto').play();</script>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
				{/* <canvas id='canvas1'></canvas> */}
			</div>
		</div>
	);
};

export default Header