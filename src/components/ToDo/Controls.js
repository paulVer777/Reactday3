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


const Controls = (props) => (

    <Paper style={styles.paper}>
        <TextFiled
            name={'new-task'}
            fullWidth={true}
            placeholder={'New Task'}
        />
        <RaisedButton
            primary={true}
            label={'ADD'}
            fullWidth={true}
        />
    </Paper>
);

export default Controls