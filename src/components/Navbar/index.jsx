import React from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../context"
import {AiOutlineShoppingCart} from 'react-icons/ai'

const activeStyle = `underline underline-offset-4`

function Navbar() {

    const {cartProducts} = React.useContext(ShoppingCartContext)

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-sm font-normal bg-white">
          <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
              <NavLink to='/' >
                  KiShop
              </NavLink>
            </li>
            <li>
              <NavLink to='/' className={({isActive})=> isActive ? activeStyle: undefined}>
                  All
              </NavLink>
            </li>
            <li>
              <NavLink to='/clothes'className={({isActive})=> isActive ? activeStyle: undefined}>
                  Clothes
              </NavLink>
            </li>
            <li>
              <NavLink to='/electronics'className={({isActive})=> isActive ? activeStyle: undefined}>
                  Electronics
              </NavLink>
            </li>
            <li>
              <NavLink to='/furniture'className={({isActive})=> isActive ? activeStyle: undefined}>
                  Furniture
              </NavLink>
            </li>
            <li>
              <NavLink to='/shoes' className={({isActive})=> isActive ? activeStyle: undefined}>
                  Shoes
              </NavLink>
            </li>
            <li>
              <NavLink to='/others' className={({isActive})=> isActive ? activeStyle: undefined}>
                  Others
              </NavLink>
            </li>
          </ul>
          <ul className="flex items-center gap-3">
            <li className="text-black/60">
                acostahenry7@gmail.com
            </li>
            <li>
              <NavLink to='/my-orders' className={({isActive})=> isActive ? activeStyle: undefined}>
                  My Orders
              </NavLink>
            </li>
            <li>
              <NavLink to='/my-account' className={({isActive})=> isActive ? activeStyle: undefined}>
                  My Account
              </NavLink>
            </li>
            <li>
              <NavLink to='/sign-in' className={({isActive})=> isActive ? activeStyle: undefined}>
                  Sign In
              </NavLink>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineShoppingCart size={18} />
              <span>{cartProducts.length}</span>
            </li>
          </ul>
        </nav>
    )
}

export {Navbar}