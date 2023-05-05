import React from 'react'
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/image/logo-cebrama.jpeg'

function Navbar() {

  const input = useRef()
  const history = useNavigate();

  const call = (event) => {
    event.preventDefault();
    const info = input.current.value
    history(`/search?name=${encodeURIComponent(info)}`);
    input.current.innerText=""

  }



  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <img className="d-inline-block rounded-circle" style={{ width: 7 + '%' }} src={image} alt="Digital House" />
          <button className="navbar-toggler btn-outline-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="bi bi-list-columns-reverse "></i></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/categories'}>Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/list'}>TableProducts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/lastproduct'}>LastProduct</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  pages
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={'/page/:id'}>Page-Products</Link></li>
                </ul>
              </li>
            </ul>
            <form method="GET" className="d-flex" onSubmit={call}>
              <input ref={input} className="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
