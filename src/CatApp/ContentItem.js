import React from "react";

function ContentItem({ cat, updateImgModal }) {

    return (
        <>
            <img onClick={updateImgModal} className="catImg" src={cat.url} />
        </>
    )
}

export default ContentItem;