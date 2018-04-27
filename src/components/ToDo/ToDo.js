import React from 'react'
import List from './List'
import Controls from './Controls'

class ToDo extends React.Component {

    state={

        tasks: [

            {name:'Umyj naczynia', uid:11231},
            {name:'Umyj samochod', uid:454545}

        ],
        filterText:'',
         newTask:""
    };

    deleteTask=(taskUid)=> {

        const newTasks=this.state.tasks.filter(task=> taskUid !== task.uid)
        this.setState(
            {
         tasks:newTasks
            }
        )
    };

    addTask=()=>{

        const newTask={

            name:this.state.newTask,
            uid:Date.now()

        }

        const newTasks=this.state.tasks.concat(newTask)

        this.setState({

            tasks:newTasks
        })
    }

    newTaskChangeHandler=(event, newValue)=> this.setState({

       newTask: newValue

    });

    newFilterChangeHandler=(event, newValue)=> this.setState({

        filterText: newValue

    });



    render() {

        return (
            <div>
                <Controls
                onClickHandler={this.addTask}
               onChangeHandler={this.newTaskChangeHandler}
                newTaskValue={this.state.newTask}
                onFilterChangeHandler={this.newFilterChangeHandler}
                filterTaskValue={this.state.filterText}

                />
                <List

                    deleteTaskFunction={this.deleteTask}
                    tasksList={this.state.tasks}
                    filter={this.state.filterText}
                />

            </div>
        )
    }
}


export default ToDo