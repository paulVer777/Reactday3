import React from 'react'
import Task from './Task'
import Container from "../UI/container";

const List=({tasksList,deleteTaskFunction})=>(


    <Container>
        {
         tasksList.map(task=>(


             <Task

             name={task.name}
             key={task.uid}
             deleteTask={()=>deleteTaskFunction(task.uid)}
            />

         ))
        }
    </Container>
);
export default  List