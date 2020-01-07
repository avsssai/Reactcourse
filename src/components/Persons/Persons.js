import React from 'react';
import Person from './Person';

const persons = props => {
    return (
        props.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                toEdit={person.toEdit}
                key={index}
                click={() => props.delete(index)}
                className="person-card"
                changed={(event)=>props.change(event,person.id)}
                editName={()=>props.edit(index)}
                doneEditing={()=>props.done(index)}
              />
            );
          })
    )
}

export default persons;