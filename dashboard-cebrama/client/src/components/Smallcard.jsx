import React from 'react'
import { Link } from 'react-router-dom';

function Smallcard(props) {
    return (
        <>
            <div className="col-sm-6 col-md-4 mb-3 mb-sm-0 " style={{ width: 20 + 'rem' }}>
                <div className="card bg-secondary text-white">
                    <div className="card-body fs-2">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.length}</p>
                        <Link to={props.link} className="btn btn-primary">{props.go}</Link>
                        
                    </div>


                </div>
            </div>
        </>
    )
}

export default Smallcard