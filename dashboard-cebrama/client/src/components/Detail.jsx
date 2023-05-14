import React from 'react'
import Smallcard from './Smallcard';
import { useState, useEffect } from 'react';

function Detail() {
   const [datas,setDatas] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/api/products/')
            .then(response => response.json())
            .then(data => {
                let products = {
                    title: 'productos',
                    length: data.count,
                    go:'Products',
                    link:'/list'
                }
                let categories = {
                    title: 'categorias',
                    length: 10,
                    go:' Categories',
                    link:'/categories'
                }
                let datos = [products, categories]
                setDatas(datos);
            })
            .catch(error => { console.error(error) });

    }, [])
    const [userdata,setuserdata] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/api/users')
            .then(response => response.json())
            .then(data => {
                let users = {
                    title: 'usuarios',
                    length: data.count,
                    go:'Users',
                    link:'/list'
                }
                let datos = [users]
                setuserdata(datos);
            })
            .catch(error => { console.error(error) });

    }, [])
    return (
        <div className='row'>
            {
                datas.map((element, i) => {
                    return(
                    <Smallcard
                        key={i}
                        title={element.title}
                        length={element.length}
                        go={element.go}
                        link={element.link}
                    />
                    )
                })
            }
            {
                userdata.map((element, i) => {
                    return(
                    <Smallcard
                        key={i}
                        title={element.title}
                        length={element.length}
                        go={element.go}
                        link={element.link}
                    />
                    )
                })
            }
        </div>
        
    )
}

export default Detail