import React from "react"


const ListingImg = ({ imgUrl, atlName }) => {
    return (
        <div className="listing_image">
            <img
                className="img_fluid"
                alt={atlName}
                src={imgUrl}
                id={`${atlName}_icon`}
            />
        </div>
    )
}
export default ListingImg