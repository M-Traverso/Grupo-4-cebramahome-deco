import React from 'react';



function Card(props) {

  return (
    <div>
      <div className="card mx-auto" style={{ width: 300 + 'px' }}>
        <img src={`../../public/img/${props.image}`} className="img-thumbnail object card-img-top" style={{ height: 200 + 'px' }}alt="..." />

        <div className="card-body">
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card