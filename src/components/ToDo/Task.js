import React from 'react'


const Task = ({name, deleteTask}) => (

    <div>{name}
        <button onClick={deleteTask}
        >
            x
        </button>
    </div>
);
export default Task