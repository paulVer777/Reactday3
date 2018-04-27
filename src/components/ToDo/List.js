import React from 'react'
import Task from './Task'


const List=({tasksList})=>(

    <div>
        {

         tasksList.map(task=>(<Task

             name={task.name}
             key={task.key}
             deleteTask={()=>alert('Click')}
            />
         ))
        }

    </div>


);



export default  List