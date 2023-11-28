import React from "react"
import {Link} from 'react-router-dom'
import { Layout } from "../../components/Layout"
import { ShoppingCartContext } from "../../context"
import { OrderCard } from "../../components/OrderCard"
import { HiOutlineChevronLeft } from "react-icons/hi2";

function MyOrder() {

    const {orders} = React.useContext(ShoppingCartContext)
    const path = window.location.pathname
    let orderIndex = path.substring(path.lastIndexOf("/") + 1)

    if(orderIndex === "last") {
        orderIndex = orders.length -1
    }

    return (
        <Layout>
             <div className="flex w-80 justify-center items-center relative mb-6">
                <Link to="/my-orders" className="absolute left-0">
                    <HiOutlineChevronLeft/>
                </Link>
                <h1>My Order</h1>
            </div>
            <div className="flex flex-col w-80 overflow-y-auto">
            {orders[orderIndex]?.products?.map(product => (
                <OrderCard
                  key={product.id} 
                  data={product} 
                  />
          ))}
          </div>
        </Layout>
    )
}

export { MyOrder}