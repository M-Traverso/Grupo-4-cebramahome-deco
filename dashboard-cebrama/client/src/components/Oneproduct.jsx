import React from 'react'

import { useLocation } from 'react-router-dom';
import Card from './Card';
import { useState, useRef, useEffect } from 'react';

function Oneproduct() {


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('name');

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/api/products/search?name=${searchQuery}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, [searchQuery]);

    if (!data) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
            </div>
            <p>Loading...</p>
        </div>

    }


    return (
        <>
            
                <div className="col-12 margin">
                    <Card
                        image={data.image}
                        description={data.name}
                    />
                    
                </div>
            
        </>
    )
}

export default Oneproduct