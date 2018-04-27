import React from 'react'
import {withRouter} from 'react-router-dom'

const HelloNested = (props) => (
    <div>
        Hello world {props.match.params.name}!
    </div>
)

const HelloNestedWithRouter = withRouter(HelloNested)

const Hello = () => (
    <HelloNestedWithRouter />
)

export default Hello