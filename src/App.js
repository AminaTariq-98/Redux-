import React from 'react'
import Navbar from './Component/Navbar'
import Shop from './Component/Shop'
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import Home from './Component/Home'
import Cart from './Component/Cart';

const App = () => {
  return (
    <>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path= '/cart' element={<Cart />} />
      </Routes>
      </Provider>
    </>
  )
}

export default App
