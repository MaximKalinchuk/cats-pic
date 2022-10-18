import React from "react";
import ContentItem from "./ContentItem";


function Content({ cats, updateModal }) {

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }

    // console.log(cats)
    return (
        <div style={styles} className="catsImg">
            {cats.map((cat, index) => {
                return <ContentItem updateModal={updateModal} key={index} cat={cat}/>
            })}
        </div>
    )
}

export default Content;