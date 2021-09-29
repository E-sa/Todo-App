import React from 'react'


class AddTaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''

        };
    }

    //on input change save the new task inside input value
    newTodoText = (typed) => {

        this.setState({ inputValue: typed.target.value })

    }


    //on enter key pressed add new task to array and empty input
    handleKeyPress = (event) => {

        if (event.key === 'Enter' && this.state.inputValue !== "") {

            this.props.newTaskSubmit(this.state.inputValue)

            this.setState({
                inputValue: ""
            })


        }
    }




    render() {
        return (
            <>
            
            <label id="create-todo-label" htmlFor="create-todo-input"> </label>
            <input
                value={this.state.inputValue}
                id="create-todo-input"
                type="text"
                placeholder="Create a new todo ..."
                onChange={this.newTodoText.bind(this)}
                onKeyPress={this.handleKeyPress}
            >
                
            </input>
            </>
        )
    }
}


export default AddTaskInput;
