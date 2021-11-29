import React from "react";

const Icons = ({ imgUrl, atlName }) => {
	return (
		<div className='socials_Icon'>
			<img
				className='d-inline-block align-top social_img'
				alt={atlName}
				src={imgUrl}
				id={`${atlName}_icon`}
			/>
		</div>
	);
};
export default Icons;
