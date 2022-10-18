import React from "react";

function ContentItem({ cat, updateModal }) {
    // console.log(cat)

    return (
        <>
            <img onClick={updateModal} className="catImg" src={cat.url} />
        </>
    )
}

export default ContentItem;