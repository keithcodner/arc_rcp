import React from 'react'

function ArcButtonUp(params) {

    function clickHandler(){
        console.log('up button clicked');
    }

    return(
        <div>
            <button onClick={clickHandler}>⬆️</button>
        </div>
    )
}

export default ArcButtonUp