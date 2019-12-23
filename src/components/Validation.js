import React from 'react';

const validator = (props) => {
    const minimumLength = props.minimumLength;
    if(minimumLength <= 5){
        var displayElement =  <p>Length too short!</p> ;    
    } else{
        displayElement = <p>Length okay.</p>;
    }
    return(
        <div className="length">
            {displayElement}
        </div>
    )
}

export default validator;