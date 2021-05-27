import React from 'react'

function Navigation(props) {

    const {data} = props;

    return (
        <div>
            <h1>
                {data.title}<span role="img" aria-label='go!'>🚀</span>!
            </h1>
            <h4> by: {data.copyright}  - {data.date}</h4>
            
        </div>
    )
}

export default Navigation
