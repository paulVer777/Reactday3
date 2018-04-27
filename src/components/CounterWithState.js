import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    btn: {
        margin: '10px'
    }
}

class CounterWithState extends React.Component {
    // THIS IS ES6
    constructor() {

       console.log('component is created');
        super();

        this.state = {
            count: 0
        };

        this.minusBtnClick = () => this.setState({count: this.state.count - 1})
        this.plusBtnClick = () => this.setState({count: this.state.count + 1})
    }


    componentWillMount() {

        console.log('Counter will be mounted')

    }


    componentDidMount() {

        console.log('Counter is mounted')

    }


    componentWillUnmount() {

        console.log('Counter will be unmounted')

    }

    componentWillUpdate() {

        console.log('Counter will be re-rendered')

    }

    componentDidUpdate() {

        console.log('Counter is re-rendered')

    }

    componentWillReceiveProps() {

        console.log('Counter will receive props')

    }

    shouldComponentUpdate() {

        console.log('Should component update?')
         return true
    }


    // USING CLASS PROPERTIES - STAGE-2 - THIS IS NOT IN ES6 !!!
    // state = {
    //     count: 0
    // }
    //
    // minusBtnClick = () => this.setState({count: this.state.count - 1})
    // plusBtnClick = () => this.setState({count: this.state.count + 1})

    render() {

        console.log('counter renders');
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