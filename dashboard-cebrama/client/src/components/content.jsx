import React from 'react'
import Lastproduct from './Lastproduct'
import Productslist from './Productslist'
import Userslist from './UsersList'
import Categories from './Categories'
import Detail from './Detail'


function content() {
  return (
    <>
      <div className='container'>
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800"> Dashboard-Cebrama</h1>
        </div>
        <div className='row justify-content-center'>
          <Detail />
        </div>
        <div className='row justify-content-center' style={{ margin: 10 + 'px' }}>
          <Lastproduct />
          <Categories />
        </div>
        <div className='row justify-content-center'>
          <Productslist />
        </div>
        <div className='row justify-content-center'>
          <Userslist />
        </div>
      
     
      </div>
    </>
  )
}

export default content