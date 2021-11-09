import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { SocialIcon } from '..'
import {Telegram, Twitter, MediumIcon, Reddit } from '../../images'


const GroupSocialIcon = () => {
    return (
			<>
				<div className='group_social_icon'>
					<Row className='socialicon_row'>
						{/* <div className='firstRow'> */}
						<Col xl='4' lg='6' md='6' sm='10' xs='10' className='icon_Row'>
							<a href='https://t.me/safariswapofficial'>
								<SocialIcon
									atlName='telegram'
									target='_blank'
									imgUrl={Telegram}
								/>
							</a>
							<p className='Twitter'>
								Go to Twitter for all updates and announcements.
							</p>
						</Col>
						<Col xl='4' lg='6' md='6' sm='10' xs='10' className='icon_Row'>
							<a href='https://www.reddit.com/r/Safariswap/'>
								<SocialIcon atlName='Reddit' imgUrl={Reddit} />
							</a>
							<p className='Twitter'>
								Join us on Reddit to ask questions and to discuss with other
								users.
							</p>
						</Col>
						<Col xl='4' lg='6' md='6' sm='10' xs='10' className='icon_Row'>
							<a href='https://twitter.com/SafariswapDex'>
								<SocialIcon atlName='Twitter' imgUrl={Twitter} />
							</a>
							<p className='Twitter'>
								Join us on Twitter to ask questions and to discuss with other
								users.
							</p>
						</Col>
						<Col xl='4' lg='6' md='6' sm='10' xs='10' className='icon_Row'>
							<a href='https://medium.com/@safariswapdex'>
								<SocialIcon atlName='mediumicon' imgUrl={MediumIcon} />
							</a>
							<p className='Twitter'>
								Find more in-depth articles about Polychain Monsters on Medium.
							</p>
						</Col>
						{/* </div> */}
					</Row>
				</div>
			</>
		);
}
export default GroupSocialIcon