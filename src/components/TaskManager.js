import React from 'react'
import EachTask from './EachTask'
import AddTaskInput from './AddTaskInput'
import LastLiBigScreen from './LastLiBigScreen'
import LastLiSmallScreen from './LastLiSmallScreen'

class TaskManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             tasks: 
            [
                ["Complete online javascript corse",true],
                ["Jog around the park 3x", false],
                ["10 minutes meditation", false],
                ["Complete Todo App on Frontend Mentor", false],
                ["Read for 1 hour", false],
                ["Pick up groceries", false],    
            ],
            itemsleft: 0,
            //(All, Active, completed)
            filter: "all"
        };
    }



    //1.from <AddTaskInput /> this component get the new task and push it into tasks array and renders
    newTaskSubmit = (value) => {

        this.setState(prevState => ({
            tasks: [[value, false], ...prevState.tasks],
            itemsleft: prevState.itemsleft + 1

        }))
    }


    //2.removes a task by indexNum and update the state of "itemsleft"
    remove = (value) => {
        const task = this.state.tasks

        var array = [...this.state.tasks];
        var index = value.taskNum
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({ tasks: array });

            //if it was an unchecked task --itemsleft
            if (!task[value.taskNum][1]) {
                this.setState(prevState => ({
                    itemsleft: prevState.itemsleft - 1
                }))
            }
        }
    }

    //3.handles checked and unchecked when user changed checkbox also update the state of "itemsleft"
    taskChangedCondition = (value) => {
        const task = this.state.tasks
        const newIds = this.state.tasks.slice()


        if (task[value.taskNum][1]) {
            newIds[value.taskNum][1] = false
            this.setState(prevState => ({
                tasks: newIds,
                itemsleft: prevState.itemsleft + 1
            }))
        }
        else {
            newIds[value.taskNum][1] = true
            this.setState(prevState => ({
                tasks: newIds,
                itemsleft: prevState.itemsleft - 1
            }))
        }
    }

    //4.change filter = change state.filter
    changeFilter = (value) => {

        this.setState({
            filter: value
        })
    }

    //5.clear completed
    clear = () => {

        const tasks = this.state.tasks;
        const newArr = [];

        tasks.filter(name => name[1] === false).map((task) =>

            newArr.push([task, false])

        )

        this.setState(({
            tasks: newArr
        }))

    }

    render() {
        const filter = this.state.filter
        const task = this.state.tasks
        const itemsleft = this.state.itemsleft
        return (

            <div className="create-todo-input-and-li-container">

                {/* "creates a new todo" */}
                <AddTaskInput newTaskSubmit={this.newTaskSubmit} />

                <ul id="li-container">

                    {/* map all */}
                    {filter === "all" && task.map((task, index) =>
                        <EachTask
                            taskChangedCondition={this.taskChangedCondition}
                            remove={this.remove}
                            taskNum={index}
                            key={index}
                            tasks={task[0]}
                            condition={task[1]}
                        />

                    )}

                    {/* map actives only */}
                    {filter === "active" && task.filter(name => name[1] === false).map((task, index) =>
                        <EachTask
                            taskChangedCondition={this.taskChangedCondition}
                            remove={this.remove}
                            taskNum={index}
                            key={index}
                            tasks={task[0]}
                            condition={task[1]}
                        />

                    )}

                    {/* map completed onlys */}
                    {filter === "completed" && task.filter(name => name[1] === true).map((task, index) =>
                        <EachTask
                            taskChangedCondition={this.taskChangedCondition}
                            remove={this.remove}
                            taskNum={index}
                            key={index}
                            tasks={task[0]}
                            condition={task[1]}
                        />

                    )}

                    {/* last li for big screen */}
                    <LastLiBigScreen
                        itemsleft={itemsleft}
                        filter={filter}
                        changeFilter={this.changeFilter}
                        clear={this.clear}
                    />

                    {/* last li for small screen */}
                    <LastLiSmallScreen
                        filter={filter}
                        changeFilter={this.changeFilter}
                    />


                </ul>
            </div>

        )
    }
}


export default TaskManager;
