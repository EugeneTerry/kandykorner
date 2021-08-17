import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./Location/LocationProvider";
import { LocationList } from "./Location/LocationList";
import { ProductProvider } from "./Product/ProductProvider"
import { ProductList } from "./Product/ProductList"
import { ProductTypeList} from "./PoductType/ProductTypeList"
import { ProductTypeProvider } from "./PoductType/ProductTypeProvider";
import { EmployeeList } from "./Employees/EmployeeList";
import { EmployeeProvider } from "./Employees/EmployeeProvider";
import { EmployeeForm } from "./Employees/EmployeeForm";
export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        <ProductProvider>
          <ProductTypeProvider>
            <EmployeeProvider>
              <Route exact path="/">
                <ProductTypeList />
              </Route>
              <Route exact path="/products">
                <ProductList />
              </Route>
              <Route exact path="/productTypes">
                <ProductTypeList />
              </Route>
              <Route exact path="/locations">
                <LocationList />
              </Route>
              <Route exact path="/employees">
                <EmployeeList />
              </Route>
              <Route exact path="/employees/create">
                <EmployeeForm />
              </Route>
              </EmployeeProvider>
          </ProductTypeProvider>
        </ProductProvider>
      </LocationProvider>
    </>
  )
}