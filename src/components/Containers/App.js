import React, { Component } from "react";
import "./App.css";
import Persons from "../Persons/Persons";
// import Assignment from "../Assignment";
// import classes from "App.module.css";
import Cockpit from "../Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "fafavca", name: "Shiva", age: "23", toEdit: false },
      { id: "faacva", name: "Ram", age: "25", toEdit: false },
      { id: "cavdgv", name: "Krishna", age: "23", toEdit: false }
    ],
    showContent: true
  };

  deleteSelecteditem = personIndex => {
    const persons = [...this.state.persons];
    console.log(personIndex);
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  editName = index => {
    var editedCopy = {
      ...this.state.persons[index]
    };
    editedCopy.toEdit = true;
    console.log(editedCopy);
    const persons = [...this.state.persons];
    persons[index] = editedCopy;
    this.setState({
      persons: persons
    });
  };

  doneEditing = index => {
    const elementToClose = {
      ...this.state.persons[index]
    };
    elementToClose.toEdit = false;
    var persons = [...this.state.persons];

    persons[index] = elementToClose;
    this.setState({
      persons: persons
    });
  };

  toggleContent = () => {
    const showContent = this.state.showContent;
    this.setState({
      showContent: !showContent
    });
  };

  handleNameChange = (event, id) => {
    const personArray = this.state.persons;
    const personIndex = personArray.findIndex(el => el.id === id);
    const elementChanged = {
      ...this.state.persons[personIndex]
    };
    elementChanged.name = event.target.value;
    const personsCopy = [...personArray];
    personsCopy[personIndex] = elementChanged;
    this.setState({
      persons: personsCopy
    });
  };

  render() {
    if (this.state.showContent) {
      var people = (
        <div>
          <h4>People</h4>
          <Persons
            persons={this.state.persons}
            delete={this.deleteSelecteditem}
            change={this.handleNameChange}
            edit={this.editName}
            done={this.doneEditing}
          />
        </div>
      );
    } else {
      people = "";
    }
    return (
      <div className="App">
        <Cockpit
          toggleContent={this.toggleContent}
          showContent={this.state.showContent}
        />
        {people}
      </div>
    );
  }
}

export default App;
