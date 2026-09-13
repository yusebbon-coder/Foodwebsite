import React from 'react'
import { NavLink } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Data from "../Data/Data";
const Khmersweet = () => {
  return (
    <div>
          <div className="flex gap-3 items-center mx-3">
              <NavLink to="/foodkhmer" className='text-center px-4 py-2 border rounded-lg hover:bg-amber-600 hover:text-white transition'>Khmer Food</NavLink>
              <NavLink to="/khmersweet" className='text-center px-4 py-2 border rounded-lg hover:bg-amber-600 hover:text-white transition'>Sweet Khmer</NavLink>
              <NavLink to="/khmer" className='text-center px-4 py-2 border rounded-lg hover:bg-amber-600 hover:text-white transition'>Fast Food</NavLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-2">
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
