import React from 'react'
import ListUsers from './ListUsers'
import { useState, useEffect } from 'react';
function Userslist() {
    const [products, setProducts] = useState([]);
    const [pagina, setPagina] = useState(1)

    useEffect(() => {
        fetch(`http://localhost:3001/api/users/page/${pagina}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data.data);
            })
            .catch(error => { console.error(error) });

    }, [])
    const nextpage = async () => {
        await setPagina(pagina + 1)
        fetch(`http://localhost:3001/api/users/page/${pagina + 1}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data.data);
            })
            .catch(error => { console.error(error) });
    }

    const previouspage = async () => {
        if (pagina > 1) {
            await setPagina(pagina - 1)
            fetch(`http://localhost:3001/api/users/page/${pagina - 1}`)
                .then(response => response.json())
                .then(data => {
                    setProducts(data.data);
                })
                .catch(error => { console.error(error) });
        }
    }
    return (
        <>
            <div className='row'>
                <h1 className="h3 mb-2 text-gray-800 d-block">All the Users in the Database</h1>
            </div>


            <div className="card shadow mb-4">
                {/*<!-- PRODUCTS LIST -->*/}

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    <th>Contraseña</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((element, i) => {
                                        return (
                                            <ListUsers
                                                key={element + i}
                                                id={element.id}
                                                firstName={element.firstName}
                                                lastName={element.lastName}
                                                email={element.email}
                                                password={element.password}

                                            />
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <button type="button" className="btn btn-outline-dark" onClick={() => previouspage()}>Previous-Page</button>
                        <button type="button" className="btn btn-outline-dark" onClick={() => nextpage()}>Next-Page</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userslist