import React from "react"

const Image = ({ imgUrl, atlName }) => {
    return (
        <div className="seen_Icon">
            <img
                className="d-inline-block align-top seen_img img_opacity"
                alt={atlName}
                src={imgUrl}
                id={`${atlName}_icon`}
            />
        </div>
    )
}
export default Image