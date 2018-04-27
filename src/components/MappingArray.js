import React from 'react'

const users = [
    {name: 'Ola', key: 'asdfghjkhg'},
    {name: 'Ala', key: 'adfsghfhfh'},
    {name: 'Ela', key: 'hfgdsdadaa'},
    {name: 'Ewa', key: 'fsgfhtjjhr'}
]

const MappingArray = (props) => (
    <div>
        {
            users.map(user => <div key={user.key}>{user.name}</div>)
        }
    </div>
)

export default MappingArray