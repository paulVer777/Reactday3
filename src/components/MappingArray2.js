import React from 'react'

const users = ['Mateusz', 'Tadeusz', 'Amadeusz', 'Tymoteusz']

const usersList = users.map((user, i) => <li key={i}>{i+1}. {user}</li>)

const MappingArray2 = (props) => (
    <ul>{usersList}</ul>
)

export default MappingArray2