import React from "react"


const CharityDonationImg = ({ imgUrl, atlName }) => {
    return (
        <div className="charity_donation">
            <img
                className="d-inline-block align-top charity_donation_img img_fluid"
                alt={atlName}
                src={imgUrl}
                id={`${atlName}_icon`}
            />
        </div>
    )
}
export default CharityDonationImg