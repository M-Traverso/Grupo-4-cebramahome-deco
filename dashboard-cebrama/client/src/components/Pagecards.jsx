import { useState, useEffect } from 'react';
import Card from './Card';




function Pagecards() {
    const [products, setProducts] = useState([]);
    const [pagina, setPagina] = useState(1)

    useEffect(() => {
        fetch(`http://localhost:3001/api/products/page/${pagina}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data.data);
            })
            .catch(error => { console.error(error) });

    }, [])
    const nextpage = async () => {
        await setPagina(pagina + 1)
        fetch(`http://localhost:3001/api/products/page/${pagina + 1}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data.data);
            })
            .catch(error => { console.error(error) });
    }

    const previouspage = async () => {
        if (pagina > 1) {
            await setPagina(pagina - 1)
            fetch(`http://localhost:3001/api/products/page/${pagina - 1}`)
                .then(response => response.json())
                .then(data => {
                    setProducts(data.data);
                })
                .catch(error => { console.error(error) });
        }
    }

    return (
        <>
            {products.length === 0 && <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>
                <p>Loading...</p>
            </div>}
            <div className='row'>

                <ul className='d-flex justify-content-between flex-wrap'>

                    {
                        products.map((element, i) => {
                            return (
                                <li className=' col-sm-12 col-md-6 list-unstyled mt-4' key={i}>
                                    <Card
                                        image={element.image}
                                        description={element.name}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <button type="button" className="btn btn-outline-dark" onClick={() => previouspage()}>Previous-Page</button>
                        <button type="button" className="btn btn-outline-dark" onClick={() => nextpage()}>Next-Page</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Pagecards