import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { ShoppingCartContext } from '../../context';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../utils';
import './index.css'
import { Link } from 'react-router-dom';

function CheckoutSideMenu({data}) {

  const {
        isCheckoutMenuOpen, 
        closeCheckoutMenu, 
        cartProducts, 
        setCartProducts, 
        setOrders,
        orders
    } = React.useContext(ShoppingCartContext)
  const removeProductFromCart = (productId) => {
    const filteredProducts = cartProducts.filter(product => product.id !== productId)
    setCartProducts(filteredProducts) 
  }

  const  handleCheckout = () => {
        const orderToAdd = {
          date: '01.02.2023',
          products: cartProducts,
          totalProducts: cartProducts.length,
          totalPrice: totalPrice(cartProducts)
        }

        setOrders([...orders, orderToAdd])
        setCartProducts([])
        closeCheckoutMenu()
  }

  return (
    <aside className={`${isCheckoutMenuOpen ? "flex" : "hidden"} checkout-side-menu flex flex-col fixed right-0 bg-white border border-black rounded-lg`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div>
              <AiOutlineClose className='cursor-pointer' onClick={() => closeCheckoutMenu()}/>
            </div>
        </div>
        <div className="px-6 flex-1 overflow-y-auto">
          {cartProducts?.map(product => (
                <OrderCard key={product.id} data={product} handleDelete={removeProductFromCart}/>
          ))}
        </div>
        <div className="px-6 mt-4 mb-6">
            <p className="flex justify-between items-center mb-2">
                <span className="font-normal">Total: </span>
                <span className="font-semibold text-xl">${totalPrice(cartProducts)}</span>
            </p>
            <Link to="/my-orders/last">
                <button onClick={() => handleCheckout()} 
                        className="w-full bg-black py-3 text-white rounded-lg">
                    Checkout
                </button>
            </Link>
        </div>
    </aside>
  )
}


export { CheckoutSideMenu}