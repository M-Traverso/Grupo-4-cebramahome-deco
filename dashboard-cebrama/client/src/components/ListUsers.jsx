import React from 'react'

function ListUsers(props) {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.password}</td>
                <td>{props.avatar}</td>

            </tr>
        </>
    )
}

export default ListUsers