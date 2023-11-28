import React from 'react'

const ShoppingCartContext = React.createContext({})

function ShoppingCartProvider({children}) {


    //Shoping Cart
     const [count, setCount] = React.useState(0)
     
     //Product detail
     const [isProductDetailOpen, setIsProductDetailOpen] = React.useState(false)

     const openProductDetail = () => {
        setIsProductDetailOpen(true)
     }
     const closeProductDetail = () => {
        setIsProductDetailOpen(false)
     }

     //Product detail - Product to Show
     const [productToShow, setProductToShow] = React.useState(undefined)

     //Shopping Cart - Products in Cart
     const [cartProducts, setCartProducts] = React.useState([])

    
     //Checkout Sidemenu
     const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = React.useState(false)

     const openCheckoutMenu = () => {
        setIsCheckoutMenuOpen(true)
     }
     const closeCheckoutMenu = () => {
        setIsCheckoutMenuOpen(false)
     }

     //Shopping cart - Order
     const [orders, setOrders] = React.useState([])

     //Get Products
     const [products, setProducts] = React.useState([])

     React.useEffect(() => {
         fetch('https://api.escuelajs.co/api/v1/products')
             .then(response => response.json())
             .then(data => {
                 setProducts(data)
             })
     },[])

    return (
        <ShoppingCartContext.Provider 
            value={{
                count,
                setCount,
                isProductDetailOpen,
                openProductDetail,
                closeProductDetail,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutMenuOpen,
                setIsCheckoutMenuOpen,
                openCheckoutMenu,
                closeCheckoutMenu,
                orders,
                setOrders,
                products,
                setProducts

            }}>
                {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartProvider, ShoppingCartContext} 