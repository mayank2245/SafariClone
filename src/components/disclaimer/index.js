import React from "react"


const Disclaimer = ({ imgUrl, atlName }) => {
    return (
        <div className="disclaimer_image">
            <img
                className="align-top charity_donation_img img_fluid"
                alt={atlName}
                src={imgUrl}
                id={`${atlName}_icon`}
            />
        </div>
    )
}
export default Disclaimer