import React from 'react'

class ToDoList extends React.Component{

    state = {
        tasks: [],
        curInputValue: ''
    };

    handleChange = (e) => {
        this.setState({
            curInputValue: e.target.value
        })
    }

    handleClick = () => {
        this.setState(state => {
            return {
            tasks: [... state.tasks, state.curInputValue],
            curInputValue: ''
        };
    })
    }

    render(){
        const {tasks, curInputValue} = this.state;
        return(
            <div>
            <input 
            type='text' 
            onChange={this.handleChange}
            value={curInputValue}
            />
            <button onClick={this.handleClick}>Submit</button> 
                <ol>
                {   tasks.map((el,i) => (
                        <li key={i}>{el}</li>
                ))
                }
                </ol>
            </div>
        );
    }
}

export default ToDoList;