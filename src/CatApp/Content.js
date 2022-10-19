import React from "react";
import ContentItem from "./ContentItem";


function Content({ cats, updateImgModal }) {

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }

    return (
        <div style={styles} className="catsImg">
            {cats.map((cat, index) => {
                return <ContentItem updateImgModal={updateImgModal} key={index} cat={cat}/>
            })}
        </div>
    )
}

export default Content;