import React from "react"

const SocialIcon = ({ imgUrl, atlName }) => {
    return (
        <div className="social_Icon">
            <img
                className="d-inline-block align-top social_img"
                alt={atlName}
                src={imgUrl}
                id={`${atlName}_icon`}
            />
        </div>
    )
}
export default SocialIcon