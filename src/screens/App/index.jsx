import {BrowserRouter, useRoutes} from 'react-router-dom'
import { ShoppingCartProvider } from '../../context'
import {Home} from '../Home'
import { MyAccount } from '../MyAccount'
import {MyOrder} from '../MyOrder'
import {MyOrders} from '../MyOrders'
import {NotFound} from '../NotFound'
import {SignIn} from '../SignIn'
import { Navbar } from '../../components/Navbar'
import './App.css'


const AppRoutes = () => {
   
  const routes = useRoutes([
    {path: '/',  element: <Home/>},
    {path: '/clothes',  element: <Home/>},
    {path: '/electronics',  element: <Home/>},
    {path: '/furniture',  element: <Home/>},
    {path: '/shoes',  element: <Home/>},
    {path: '/others',  element: <Home/>},
    {path: '/my-account',  element: <MyAccount/>},
    {path: '/my-order',  element: <MyOrder/>},
    {path: '/my-orders',  element: <MyOrders/>},
    {path: '/my-orders/last',  element: <MyOrder/>},
    {path: '/my-orders/:id',  element: <MyOrder/>},
    {path: '/sign-in',  element: <SignIn/>},
    {path: '*',  element: <NotFound/>},
    
  ])
  
  return routes
}

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
      </BrowserRouter>    
    </ShoppingCartProvider>
  )
}

export default App
