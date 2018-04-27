import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    btn: {
        margin: '10px'
    }
}

class CounterWithState extends React.Component {
    // THIS IS ES6
    constructor(){
        super()

        this.state = {
            count: 0
        }

        this.minusBtnClick = () => this.setState({count: this.state.count - 1})
        this.plusBtnClick = () => this.setState({count: this.state.count + 1})
    }

    // USING CLASS PROPERTIES - STAGE-2 - THIS IS NOT IN ES6 !!!
    // state = {
    //     count: 0
    // }
    //
    // minusBtnClick = () => this.setState({count: this.state.count - 1})
    // plusBtnClick = () => this.setState({count: this.state.count + 1})

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <div>
                    <RaisedButton
                        label={'-'}
                        primary={true}
                        onClick={this.minusBtnClick}
                        style={styles.btn}
                    />
                    <RaisedButton
                        label={'+'}
                        secondary={true}
                        onClick={this.plusBtnClick}
                        style={styles.btn}
                    />
                </div>
            </div>
        )
    }
}

export default CounterWithState