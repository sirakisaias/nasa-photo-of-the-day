import React from 'react'

function Body(props) {

    const {data} = props;
    return (
        <div>
            
            <img src ={data.url} alt="nasa pic"></img>
            <p>{data.explanation}</p>
            <p>by: {data.copyright}</p>
        </div>
    )
}

export default Body

// rcfe is the shortcut

