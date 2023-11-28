import React from "react"
import { ShoppingCartContext } from "../../context"
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

function Card({data}) {

  const {setCount, openProductDetail,closeProductDetail, setProductToShow, setCartProducts, cartProducts, openCheckoutMenu} = React.useContext(ShoppingCartContext)

  const showProduct = (product) => {
    openProductDetail()
    setProductToShow(product)
  }

  const addProductToCart = (event, product) => {
    event.stopPropagation()
    setCartProducts([...cartProducts, product])
    openCheckoutMenu()
    closeProductDetail()
  }

  const handleSelectedProduct = (event) => { 
    event.stopPropagation()
    closeProductDetail() 
        openCheckoutMenu()
  }



  const renderIcon = (productId) => {
    const isInCart = cartProducts.filter(product => product.id === productId).length > 0

    return (
      <div className={`absolute top-0 right-0 flex justify-center items-center ${isInCart ? "bg-black": "bg-white"}  w-6 h-6 rounded-full mt-2 mr-2`} 
      onClick={(event) => !isInCart ? addProductToCart(event, data):(
        handleSelectedProduct(event)
      )}>
        {isInCart ?<AiOutlineCheck color="white"/> : <AiOutlinePlus/>}
      </div>
    )
  }

  return (
    <div className="bg-white cursor-pointer w-56 h-60"
        onClick={()=> showProduct(data)}>
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg tex-black text-sm ml-2 mb-2 px-3 py-0.5">{data?.category?.name}</span>
            <img className="h-full w-full object-cover rounded-lg" src={data?.images[0]} alt="headphones" />
           {renderIcon(data.id)}
        </figure>
        <p className="flex justify-between items-center">
            <span className="text-sm font-normal text-black/80">{data?.title}</span>
            <span className="text-lg font-semibold">${data?.price}</span>
        </p>
    </div>
  )
}

export { Card}