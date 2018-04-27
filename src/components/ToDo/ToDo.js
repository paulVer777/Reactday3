import React from 'react'
import List from './List'

class ToDo extends React.Component {

    state={

        tasks: [

            {name:'Umyj naczynia', key:11231},
            {name:'Umyj samochod', key:454545},

        ],
        filterText:''

    };



    render() {

        return (
            <div>
                <List
                tasksList={this.state.tasks}
                />
            </div>
        )
    }
}


export default ToDo