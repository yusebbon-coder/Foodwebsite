import React from 'react'
import { NavLink } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Data from "../Data/Data";
const Khmersweet = () => {
  return (
    <div>
          <div className="flex  items-center gap-2 mx-2">
                        <NavLink to="/foodkhmer" className='text-center px-2 py-1 border rounded-lg hover:bg-amber-600 hover:text-white transition'>KhmerFood</NavLink>
                        <NavLink to="/khmersweet" className='text-center px-2 py-1 border rounded-lg hover:bg-amber-600 hover:text-white transition'>SweetKhmer</NavLink>
                        <NavLink to="/khmer" className='text-center px-2 py-1 border rounded-lg hover:bg-amber-600 hover:text-white transition'>FastFood</NavLink>
                        <NavLink to="/drink" className='text-center px-2 py-1 border rounded-lg hover:bg-amber-600 hover:text-white transition'>Drink</NavLink>
                    </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-2 mx-2">
              {Data.slice(20, 32).map((item) => (
                  <ProductCard
                      key={item.id}
                      items={item}
                  />
              ))}
          </div>
    </div>
  )
}

export default Khmersweet
