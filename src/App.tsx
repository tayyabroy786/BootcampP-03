import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// C
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ProductList } from './components/ProductList';
import { ProductDetails } from './components/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<ProductList />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </Router >
  );
}

export default App;
