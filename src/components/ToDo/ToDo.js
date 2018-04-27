import React from 'react'
import List from './List'
import Controls from './Controls'

class ToDo extends React.Component {

    state={

        tasks: [

            {name:'Umyj naczynia', uid:11231},
            {name:'Umyj samochod', uid:454545}

        ],
        filterText:''

    };

    deleteTask=(taskUid)=> {

        const newTasks=this.state.tasks.filter(task=> taskUid !== task.uid)
        this.setState(
            {
         tasks:newTasks
            }
        )
    };

    render() {

        return (
            <div>
                <Controls/>
                <List

                    deleteTaskFunction={this.deleteTask}
                    tasksList={this.state.tasks}
                />
            </div>
        )
    }
}


export default ToDo