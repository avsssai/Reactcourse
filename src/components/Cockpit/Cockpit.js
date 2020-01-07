import React from 'react';


const cockpit = props => {
    return(
        <div className="App">
        <h1>My React App</h1>
        <button onClick={props.toggleContent}>{props.showContent ? 'Hide' : 'Show'}</button>
        {/* <div id="assignment">
          <Assignment />
        </div> */}
      </div>
    )
}

export default cockpit;
