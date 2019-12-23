import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";
import Assignment from "./components/Assignment";

class App extends Component {
  state = {
    persons: [
      { id:'fafavca',name: "Shiva", age: "23",toEdit:false },
      { id:'faacva',name: "Ram", age: "25",toEdit:false },
      { id:'cavdgv',name: "Krishna", age: "23",toEdit:false }
    ],
    showContent: true
  };
  // changeNameHandler = (name) => {
  //   this.setState({
  //     persons:[
  //       {name:name,age:'23'},
  //       {name:'Ram',age:'25'},
  //       {name:'Krishna Manohar IPS',age:'26'}
  //     ]
  //   })
  // }
  deleteSelecteditem = personIndex => {
    const persons = [...this.state.persons];
    console.log(personIndex);
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  editName = (index) => {
   
    var editedCopy = {
      ...this.state.persons[index]
    }
    editedCopy.toEdit = true;
    console.log(editedCopy);
    const persons = [...this.state.persons];
    persons[index] = editedCopy;
    this.setState({
      persons:persons
    })
  }

  doneEditing = (index) => {
    const elementToClose = {
      ...this.state.persons[index]
    } 
    elementToClose.toEdit = false;
    var persons = [...this.state.persons];

    persons[index] = elementToClose;
    this.setState({
      persons:persons
    })
  }

  toggleContent = () => {
    const showContent = this.state.showContent;
    this.setState({
      showContent: !showContent
    });
  };
  handleNameChange = (event,id) => {
    // //find the element which is being changed.
    // // const persons = [...this.state.persons];
    // var persons = this.state.persons;
    // //below is the person whose input value was changed.
    // const elementChanged = persons.findIndex(el=>el.index === index);
    // //Below is the copy of the person whose value has been changed in the input field.
    // const requiredElement = {
    //   ...persons[elementChanged]
    // }
    // requiredElement.name = event.target.value;
    // //create a copy of the original array.
    // const personsDupe = [...this.state.persons];

    // personsDupe[elementChanged] = requiredElement;

    
    // this.setState({
    //   persons:personsDupe
    // })
    const personArray = this.state.persons;
    const personIndex = personArray.findIndex(el => el.id === id);
    const elementChanged = {
      ...this.state.persons[personIndex]
    }
    elementChanged.name = event.target.value;
    const personsCopy = [...personArray];
    personsCopy[personIndex] = elementChanged;
    this.setState({
      persons:personsCopy
    })
  }

  render() {
    if (this.state.showContent) {
      var people = (
        <div>
          {/* <button onClick={this.changeNameHandler.bind(this,'Shiva!!')}>Click me</button> */}
          <h4>People</h4>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                toEdit={person.toEdit}
                key={index}
                click={() => this.deleteSelecteditem(index)}
                className="person-card"
                changed={(event)=>this.handleNameChange(event,person.id)}
                editName={()=>this.editName(index)}
                doneEditing={()=>this.doneEditing(index)}
              />
            );
          })}
        </div>
      );
    } else {
      people = '';
    }
    return (
      <div className="App">
        <h1>My React App</h1>
        <button onClick={this.toggleContent}>{this.state.showContent ? 'Hide' : 'Show'}</button>
        {people}
        <div id="assignment">
          <Assignment />
        </div>
      </div>
    );
  }
}

export default App;

// state = {
//   persons:[
//     {name:'Shiva',age:'23'},
//     {name:'Ram',age:'25'},
//     {name:'Krishna',age:'23'}
//   ]
// }
// changeNameHandler = () => {
//   this.setState({
//     persons:[
//       {name:'Shiva Sesha Sai',age:'23'},
//       {name:'Ram',age:'25'},
//       {name:'Krishna Manohar IPS',age:'26'}
//     ]
//   })
// }
