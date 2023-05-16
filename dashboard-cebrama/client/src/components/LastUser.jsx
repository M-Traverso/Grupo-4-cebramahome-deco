import React from 'react'
import { useState, useEffect } from 'react';


function LastUser() {
    const[detail,setDetail]=useState({})
    useEffect(() => {
       
        fetch('http://localhost:3001/api/users/detail')
            .then(response => response.json())
            .then(data => {
        
                setDetail(data);
              
            })
            .catch(error => { console.error(error) });
    
    }, [])
    return (
        <>
            <div className='row col-sm-12 col-md-6'style={{ marginLeft: 10 + 'px' }}>
                <div className="card d-block text-center" style={{ width: 30 + 'rem' }} >
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Last User in Data Base</h5>
                    </div>
                    <img src={`../../../../public/img/users/${detail.avatar}`} className="card-img-top"alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{detail.firstName} {detail.lastName}</h5>
                        <h3 className="card-title">Email: {detail.email}</h3>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LastUser