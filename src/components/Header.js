import React from 'react'

const styles = {
    header: {
        display: 'inline',
        margin: 0
    }
}

const Header = (props) => (
    <h1
        style={
            props.isRed ?
                { ...styles.header, color: 'red'}
                :
                styles.header
        }
    >
        {props.text}
    </h1>
)

export default Header