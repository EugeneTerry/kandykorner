import React, {useContext, useEffect} from "react"
import { ProductTypeContext } from "./ProductTypeProvider"
import "./ProductType.css"

export const ProductTypeList =()=>{
  const {productTypes, getProductTypes } = useContext(ProductTypeContext)
  useEffect(()=>{
    getProductTypes()
  },[])

  return (
    <section className="productTypes">
      {productTypes.map((productType) => {
        return (
          <div className="productType" id={`productType--${productType.id}`}>
            <div className="productType__type">{productType.type}</div>
          </div>
        )
      })}
    </section>
  )
}