import React from 'react'
import { Link } from 'react-router-dom'

// C
import { ProductList } from './ProductList';

export const Home = () => {
  return (
    <div className="homePage">
      <ProductList />
    </div>
  )
}