import React from 'react'

function Listproducts(props) {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.categoria}</td>
                <td>{props.descripcion}</td>

            </tr>
        </>
    )
}

export default Listproducts