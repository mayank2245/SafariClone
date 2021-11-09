import React from "react"

const CharityImages = ({ imgUrl, atlName }) => {
    return (
        <div className="charity_Image">
            <img
                className="d-inline-block align-top charity_img img_opacity"
                alt={atlName}
                src={imgUrl}
                id={`${atlName}_icon`}
            />
        </div>
    )
}
export default CharityImages