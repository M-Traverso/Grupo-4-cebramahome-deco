import React from 'react'
import { useState, useEffect } from 'react';


function Lastproduct() {
    const[detail,setDetail]=useState({})
    useEffect(() => {
       
        fetch('http://localhost:3001/api/products/45')
            .then(response => response.json())
            .then(data => {
        
                setDetail(data);
              
            })
            .catch(error => { console.error(error) });
    
    }, [])
    return (
        <>
            <div className='row'>
                <div className="card" style={{ width: 30 + 'rem' }} >
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Last Product in Data Base</h5>
                    </div>
                    <img src={`../../public${detail.image}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{detail.name}</h5>
                        <p className="card-text">{detail.description}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Lastproduct