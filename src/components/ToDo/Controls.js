import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextFiled from 'material-ui/TextField'
import Container from '../UI/container'


const styles = {

    paper: {

        margin: '10px',
        padding: '10px'
    }
};


const Controls = (props) => (

    <Container>
        <TextFiled
            onChange={props.onChangeHandler}
            value={props.newTaskValue}
            name={'new-task'}
            fullWidth={true}
            placeholder={'New Task'}
        />
        <RaisedButton
            onClick={props.onClickHandler}
            primary={true}
            label={'ADD'}
            fullWidth={true}
        />
        <TextFiled
            onChange={props.onFilterChangeHandler}
            value={props.filterTaskValue}
            name={'filter-tasks'}
            fullWidth={true}
            placeholder={'Filter Tasks'}
        />

    </Container>
);

export default Controls