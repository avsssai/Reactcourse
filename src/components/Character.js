import React from 'react';
import '../components/Containers/App.css';

const character = (props) => {
    
    return(
        <div className='box' onClick={props.delete}>{props.value}</div>
    )
}

export default character;