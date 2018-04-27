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


const Controls = ({onChangeHandler,newTaskValue,onClickHandler}) => (

    <Container>
        <TextFiled
            onChange={onChangeHandler}
            value={newTaskValue}
            name={'new-task'}
            fullWidth={true}
            placeholder={'New Task'}
        />
        <RaisedButton
            onClick={onClickHandler}
            primary={true}
            label={'ADD'}
            fullWidth={true}
        />
    </Container>
);

export default Controls