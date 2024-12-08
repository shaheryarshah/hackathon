
import Leatestproducts from "./components/leatestproducts"
import Featuredproducts from "./components/featuredproducts"
import Hero from "./components/hero"
import Shopex from "./components/shopexoffer"
import Products from "./components/products"
import Promotion from "./components/discount"
import GridDefault from "./pages/page"
import ShopList from "./pages/page"
export default function Home (){
  return(
    <div>
    <Hero/>
    <Featuredproducts/>
        <Leatestproducts/>
  <Shopex/>
    <Products/>
    <Promotion/>
    
    </div>
  )
}

