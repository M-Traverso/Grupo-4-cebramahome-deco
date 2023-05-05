import React from 'react'
import imagenFondo from '../assets/image/2142357.jpg'

function Notfound() {
    return (
        <div className="container text-center">
            
        <h1>404 Not Found</h1>
        <img src={imagenFondo} style={{ width: 30 + 'rem' }} alt="Error 404" />
        <p>Lo siento, no se encontraron resultados.</p>
      </div>
      


    )
}

export default Notfound