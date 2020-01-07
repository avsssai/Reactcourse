import React from "react";

var person = props => {
  var deleteStyles = {
    height: "30px",
    width: "60px",
    background: "red",
    position: "relative",
    left: "10px",
    color: "white",
    textAlign: "center"
  };
  var editStyles = {
    height: "30px",
    width: "60px",
    background: "orange",
    position: "relative",
    left: "20px",
    color: "white",
    textAlign: "center"
  };
  var doneStyles = {
    height: "30px",
    width: "60px",
    background: "green",
    position: "relative",
    left: "20px",
    color: "white",
    textAlign: "center"
  };
  if (props.toEdit) {
    var nameElement = (
      <div className="edit-element">
        <div className="input-element">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name-input"
            value={props.name}
            onChange={props.changed}
          />
        </div>
        <button onClick={props.doneEditing} style={doneStyles} className='done-button'>
          Done
        </button>
      </div>
    );
  } else {
    nameElement = (
      <div className="show-elements">
        <p>
          
          My name is {props.name}, and my age is {props.age}
        </p>
        <button
          className="close-button"
          style={deleteStyles}
          onClick={props.click}
          
        >
          Delete
        </button>
        <button
          className="edit-button"
          style={editStyles}
          onClick={props.editName}
        >
          Edit
        </button>
      </div>
    );
  }

  return (
    <div className="person-card">
      {nameElement}
      
    </div>
  );
};

export default person;
