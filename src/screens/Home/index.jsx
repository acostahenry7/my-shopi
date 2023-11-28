import React from 'react'
import { Card } from "../../components/Card"
import { Layout } from "../../components/Layout"
import { ProductDetail } from '../../components/ProductDetail'
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu'
import { ShoppingCartContext } from '../../context'

function Home() {

   const { products } = React.useContext(ShoppingCartContext)
   const [searchedProduct, setSearchedProduct] = React.useState("")
    
   const path = window.location.pathname
   let category = path.substring(path.lastIndexOf("/") + 1) || ""

   if(category === "others") category = ""

   const filteredProducts = products.filter(product => {

      let item = product.title.toLowerCase().includes(searchedProduct.toLowerCase()) 
      &&  product.category?.name.toLowerCase().includes(category?.toLocaleLowerCase())
          

      return item
   })

    return (
        <Layout>
            <div className="mb-6">
                <h1>Exclusive Products</h1>
            </div>
            <input 
              className="rounded-lg border border-black w-80 p-3 px-4 mb-4 focus:outline-none" 
              type="text" 
              placeholder="Search a product"
              value={searchedProduct}
              onChange={(e) => setSearchedProduct(e.target.value)}
              />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
              {
                filteredProducts?.map(item => (
                <Card key={item?.id} data={item}/>
                ))
              }
            </div>
            <ProductDetail/>
            <CheckoutSideMenu/>
        </Layout>
    )
}

export { Home}