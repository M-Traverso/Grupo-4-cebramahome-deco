import React from 'react'

function Categorydetail(props) {
  return (
    <>
  
  <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        <div className='row'>{props.category} = {props.cantidad} <p style={{ marginLeft: 7 + 'px' }}>  productos</p></div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Categorydetail