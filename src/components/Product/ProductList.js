import React, {useContext, useEffect} from "react"
import { ProductContext } from "./ProductProvider"
import "./Product.css"

export const ProductList =()=>{
  const {products, getProducts } = useContext(ProductContext)
  useEffect(()=>{
    getProducts()
  },[])

  return (
    <section className="products">
      {products.map((product) => {
        return (
          <div className="product" id={`product--${product.id}`}>
            <div className="product__name">Name: {product.name}</div>
            <div className="product__type">Type: {product.productType.type}</div>
            <div className="product__price">Price: ${product.price}</div>
            <div className="product__location">Store #{product.location.id}</div>
          </div>
        )
      })}
    </section>
  )
}