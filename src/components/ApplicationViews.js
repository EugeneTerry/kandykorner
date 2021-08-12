import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./Location/LocationProvider";
import { LocationList } from "./Location/LocationList";
import { ProductProvider } from "./Product/ProductProvider"
import { ProductList } from "./Product/ProductList"
import { ProductTypeList} from "./PoductType/ProductTypeList"
import { ProductTypeProvider } from "./PoductType/ProductTypeProvider";

export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        <ProductProvider>
          <ProductTypeProvider>
          <Route exact path="/">
                <ProductTypeList />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/productTypes">
                <ProductTypeList />
              </Route>
              <Route path="/locations">
                <LocationList />
              </Route>
          </ProductTypeProvider>
        </ProductProvider>
      </LocationProvider>
    </>
  )
}