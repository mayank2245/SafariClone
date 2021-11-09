import React from "react"

const TokenomicsImg = ({ imgUrl, atlName }) => {
    return (
        <div className="tokenomic_image">
            <img
                className="d-inline-block align-top tokenomics_img img_fluid"
                alt={atlName}
                src={imgUrl}
                id={`${atlName}_icon`}
            />
        </div>
    )
}
export default TokenomicsImg