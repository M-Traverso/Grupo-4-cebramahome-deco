import React from 'react'
import Categorydetail from './Categorydetail';
import { useState, useEffect } from 'react';
function Categories() {
    const [category,setCategory] = useState([])
    

    useEffect(() => {
        fetch('http://localhost:3001/api/products/')
            .then(response => response.json())
            .then(data => {
        
                setCategory(data.countByCategory);
              
            })
            .catch(error => { console.error(error) });

    }, [])
  return (
    <>
    
     <div className=" col-sm-12 col-lg-6 mb-4" style={{ marginLeft: 10 + 'px' }}>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" >Categories in Data Base</h6>
                        </div>
                        <div className="card-body fondodecaja">
                            <div className="row">
                                {
                                    category.map((element, index) => {
                                        return (
                                            <Categorydetail
                                                category={element.name}
                                                cantidad={element.cantidad}
                                                key={index}

                                            />)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Categories