import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import MyFirstComponent from './components/MyFirstComponent'
import Add from './components/Add'
import Header from './components/Header'
import MappingArray from './components/MappingArray'
import MappingArray2 from './components/MappingArray2'
import CounterWithState from './components/CounterWithState'
import Dashboard from './components/Dashboard'
import Hello from './components/Hello'
import SideBar from './components/SideBar'

class App extends React.Component {
    state = {
        isDrawerOpen: false
    }

    drawerBtnClickHandler = () => this.setState({
        isDrawerOpen: !this.state.isDrawerOpen
    })

    render() {
        return (
            <div>
                <AppBar
                    title="JFDDL4 React App!"
                    onLeftIconButtonClick={this.drawerBtnClickHandler}
                />

                <Router>
                    <div>
                        <SideBar
                            onRequestSideBarChange={this.drawerBtnClickHandler}
                            isSideBarOpen={this.state.isDrawerOpen}
                        />

                        <hr />

                        <Route exact path={'/'} component={Dashboard}/>
                        <Route path={'/hello/:name'} component={Hello}/>
                        <Route path={'/mappig-array'} component={MappingArray}/>
                        <Route path={'/mappig-array-2'} component={MappingArray2}/>
                        <Route path={'/counter'} component={CounterWithState}/>
                        <Route path={'/my-first-component'} render={() => (
                            <MyFirstComponent name={'Mateusz'}/>
                        )}/>
                        <Route path={'/add'} render={() => (
                            <Add numberA={5} numberB={10}/>
                        )}/>
                        <Route path={'/header'} render={() => (
                            <Header text={'Ala ma kota'} isRed={false}/>
                        )}/>
                        <Route path={'/what-react-display'} render={() => (
                            <div>
                                <h4>What React can display with JSX:</h4>

                                < p > null: {null}</p>
                                <p>undefined: {undefined}</p>
                                <p>true: {true}</p>
                                <p>false: {false}</p>
                                <p>string "Ala ma kota": {"Ala ma kota"}</p>
                                <p>number 23: {23}</p>

                                <p>array [1, 2, 3]: {[1, 2, 3]}</p>
                                <p>array ['Ala', 'Ola', 'Ela']: {['Ala', 'Ola', 'Ela']}</p>
                                <div>array with JSX: {[<b key={1}>BOLD</b>, <h1 key={2}>H1</h1>]}</div>
                                {/*<p>object: {{}}</p>*/}
                            </div>
                        )}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App
