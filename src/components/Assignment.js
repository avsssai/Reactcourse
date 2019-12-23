import React,{ Component } from "react";
import Validator from '../components/Validation';
import Character from '../components/Character';

class Assignment extends Component{
    state = {
        text:''
    }
    handleChange = (event) => {
        this.setState({
            text:event.target.value
        })

    }
    deleteLetter = (index) =>{
        var letters = this.state.text.split('');
        var letterArray = [...letters];
        letterArray.splice(index,1);
        var newWord = letterArray.join('');
        this.setState({
            text:newWord
        }) 
    }
    render(){
        var wordLength = this.state.text.length;
        var letters = this.state.text.split('');
        var letterArray = [...letters];
        var styles = {
            display:'inline-block',
            color:'blue'
        }


        return(
            <div className="assignment">
                <div className="input-field">
                    <input type="text" onChange={this.handleChange} value={this.state.text}/>
                </div>
                <div className="counter">
                    <p>Number of characters entered : {wordLength}</p>
                </div>
                <div className="validator">
                    <Validator minimumLength={wordLength} />
                </div>
                <div className="characters">
                    {letterArray.map((letter,index) => {
                        return <Character value={letter} key={index} className='character'
                         styles={styles}
                         delete={()=>{this.deleteLetter(index)}}
                         />
                    })}
                </div>
            </div> 
        )
    }
}

export default Assignment;