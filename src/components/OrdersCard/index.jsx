import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi2";

function OrdersCard({data}) {

  return (
    <div className="flex justify-between items-center mb-3 border border-black w-80 px-6 py-3 rounded-lg">
        <div className="w-full flex justify-between items-center">
            <p className="flex flex-col text-sm">
                <span className="font-light">Date</span>
                <span>01.02.2023</span>
            </p>
            <p className="flex flex-col text-sm">
                <span className="font-light">Products</span>
                <span>{data?.totalProducts}</span>
            </p>
            <span className="text-xl font-semibold">${data?.totalPrice}</span>
            <HiOutlineChevronRight/>
        </div>
    </div>
  )
}

export {OrdersCard}