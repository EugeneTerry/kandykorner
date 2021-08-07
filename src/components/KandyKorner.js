import { LocationList } from "./Location/LocationList"
import { LocationProvider } from "./Location/LocationProvider"
import { ProductProvider } from "./Product/ProductProvider"
import { ProductList } from "./Product/ProductList"
import { ProductTypeProvider } from "./PoductType/ProductTypeProvider"
import { ProductTypeList } from "./PoductType/ProductTypeList"

export const KandyKorner =()=> (
  <>
    <h2>Kandy Korner Main  Office</h2>
    <small>Where Sweat Teeth Meet Come To Play</small>
    <address>
      <div>Come by get some free samples!</div>
      <div>6363 Milky Way</div>
    </address>

    <h2>Store Locations</h2>
    <article className="locations">
      <LocationProvider>
        <LocationList />
      </LocationProvider>
    </article>
    <h2>Products</h2>
    <article className="products">
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </article>
    <h2>Product Types</h2>
    <article className="productTypes">
      <ProductTypeProvider>
        <ProductTypeList />
      </ProductTypeProvider>
    </article>
  </>
)