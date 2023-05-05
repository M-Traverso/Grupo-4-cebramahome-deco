
import '../assets/app.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Content from './content'
import Footer from './footer'
import Pagecards from './Pagecards'
import Productslist from './Productslist'
import Categories from './Categories'
import Lastproduct from './Lastproduct'
import Notfound from './Notfound';
import Oneproduct from './Oneproduct';
function App() {


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center" style={{ margin: 20 + 'px' }}>
          <Routes>
            <Route exact path='/' element={<Content />} />
            <Route exact path='/page/:id' element={<Pagecards />} />
            <Route exact path='/list' element={<Productslist />} />
            <Route exact path='/categories' element={<Categories />} />
            <Route exact path='/lastproduct' element={<Lastproduct />} />
            <Route exact path='/search' element={<Oneproduct />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </div>



      </div>
      <Footer />
    </>
  )
}

export default App