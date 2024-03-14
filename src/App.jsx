import React from 'react'
import Header from './Component/Header/Header'
import Shop from './Page/Shop/Shop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Categories from './Page/Categories/Categories'
import Product from './Page/Product/Product'
import Cart from './Page/Cart/Cart'
import SignupLogin from './Page/SignupLogin/SignupLogin'
import Footer from './Component/Footer/Footer'
import ContextProvider from './Context/ContextProvider'
import men_banner from './Assets/banner_mens.png'
import women_banner from './Assets/banner_women.png'
import kid_banner from './Assets/banner_kids.png'

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<Categories category="men" banner={men_banner}/>} />
            <Route path='/womens' element={<Categories category="women" banner={women_banner}/>} />
            <Route path='/kids' element={<Categories category="kid" banner={kid_banner}/>} />
            <Route path='/product' element={<Product />}>
              <Route path=':product' element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/account' element={<SignupLogin />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App