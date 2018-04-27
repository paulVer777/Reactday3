import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextFiled from 'material-ui/TextField'


const styles = {

    paper: {

        margin: '10px',
        padding: '10px'
    }
};


const Controls = ({onChangeHandler,newTaskValue,onClickHandler}) => (

    <Paper style={styles.paper}>
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
    </Paper>
);

export default Controls