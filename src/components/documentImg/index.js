import React from "react"

const DocumentImg = ({ imgUrl, atlName }) => {
    return (
        <div className="documentimage">
            <img
                className="d-inline-block align-top document_img img_fluid"
                alt={atlName}
                src={imgUrl}
                id={`${atlName}_icon`}
            />
        </div>
    )
}
export default DocumentImg