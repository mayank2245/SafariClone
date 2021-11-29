import React, { useEffect, useState } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Outlet,
	useRoutes,
	Link,
} from "react-router-dom";

import {
	BoardSection,
	CommunitySection,
	ContactSection,
	DisclaimerImg,
	FreelanceSection,
	DocumentSection,
	FriendSection,
	LayOut,
	OurTokenomics,
	Roadmap,
	WhySafariSwap,
	ListingSection,
	Carousle,
	FiverrBusiness,
	WeeklyDraw,
	LoaderAnimation,
	RewardsSection,
	NatureSection,
	StarNFTs,
	VideoIntro,
	GameReviews,
	Token_detail,
	BuyToken
} from "../components";
import { Button, Container, Row } from "react-bootstrap";
import { withTrans } from "../i18n/withTrans";
import { Rewards, AsSeenSection, CharitySection } from "../components";
import { CharityDonationSection } from "../components";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga";
import HashLoader from "react-spinners/HashLoader";
import Pulse from "react-reveal/Pulse";

const IndexPage = (props) => {
	const { t } = useTranslation();

	const [loading, setLoading] = useState(true);
  	const [language, setLanguage] = React.useState("");


	useEffect(() => {
		console.log("hellos");
		ReactGA.initialize("UA-205394480-1");
		ReactGA.pageview(window.location.pathname + window.location.search);
		console.log(window.location.pathname + window.location.search);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

  const handleLanguages = (langValue) => {
		setLanguage(langValue);
	};

  console.log(language, ')000000000000000000000')

	return (
		<div>
			{loading ? (
				<Container>
					<Row className='justify-content-center align-items-center loader'>
						<HashLoader color={"#003e1c"} loading={loading} size={50} />
					</Row>
				</Container>
			) : (
				<LayOut
					onChangeLanguage={handleLanguages}
					title='SafariSwap & $Nature | Revolutionary Defi Liquidity Pool Platform'
					desciption={
						"SafariSwap & $Nature: SafariSwap is a groundbreaking new system designed to revolutionize charitable giving. Its token is the $Nature."
					}
				>
					<div className='body_console'>
						<ListingSection t={t} />
						<Token_detail t={t} />
						<Rewards t={t} />
						<WhySafariSwap t={t} />
						<VideoIntro language={language} t={t} />
						{/* <GameReviews t={t} /> */}
						<RewardsSection t={t} />
						<NatureSection t={t} />
						<FiverrBusiness t={t} />
						<Carousle t={t} />
						<StarNFTs t={t} />
						<WeeklyDraw t={t} />
						<Roadmap t={t} />
						<DocumentSection language={language} t={t} />
						<FriendSection t={t} />
						<OurTokenomics t={t} />
						<CommunitySection t={t} />

						<ContactSection t={t} />
						{/* <BrowserRouter>
							<Routes>
								<Route path='/buy' element={<BuyToken/>} />
							</Routes>
						</BrowserRouter> */}
						{/* <BuyToken /> */}
						{/* <CharitySection t={t}/>
                 <CharityDonationSection t={t}/> */}
						{/* <BoardSection /> */}
						{/* <DisclaimerImg/> */}
						{/* <AsSeenSection /> */}
					</div>
				</LayOut>
			)}
		</div>
	);
};

export default withTrans(IndexPage);
