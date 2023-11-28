import React from "react"
import {Link} from 'react-router-dom'
import { ShoppingCartContext } from "../../context"
import { Layout } from "../../components/Layout"
import { OrdersCard } from "../../components/OrdersCard"



function MyOrders() {

    const {orders} = React.useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className="mb-6">
                <h1>My Orders</h1>
            </div>
            {orders?.map((order, index) => (
                <Link to={`/my-orders/${index}`}>
                    <OrdersCard key={index} data={order}/>
                </Link>
            ))}
        </Layout>
    )
}

export { MyOrders}