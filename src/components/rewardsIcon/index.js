import React from "react"
import { Rewards } from "../../images"

const RewardsIcon = ({ imgUrl, atlName }) => {
    return (
        <div className="Icon">
            <img
                className="align-top rewards_img"
                alt={atlName}
                src={imgUrl}
                id={`${atlName}_icon`}
            />
        </div>
    )
}
export default RewardsIcon