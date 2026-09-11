import React from 'react'
import ProductCard from "../components/ProductCard";
import Data from "../Data/Data";
import Hero from '../components/Hero';
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-amber-700 text-sm font-bold uppercase tracking-[0.2em]">
          Popular Food
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
          Experience the Taste of Cambodia
        </h2>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-2">
        {Data.slice(8,12).map((item) => (
          <ProductCard
            key={item.id}
            items={item}
          />
        ))}
        {Data.slice(12, 16).map((item) => (
          <ProductCard
            key={item.id}
            items={item}
          />
        ))}
      </div>
      {/*Crad*/}
      <section className='bg-[#faf7f2] py-20'>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-2xl">
              <img src="https://i.pinimg.com/736x/4c/e1/f0/4ce1f0f9cf3b6aa8b6d7555ffcf64841.jpg" alt="image" className='w-full h-[450px] object-cover' />
            </div>
            <div className="">
              <p className='text-lg font-semibold'>Discover Khmer Food</p>
              <h3 className='mt-3 text-4xl text-green-700 md:text-5xl font-bold'> A Taste of Cambodia</h3>
              <p className='mt-6 text-gray-600 leading-7 max-w-lg'>Explore the traditional dishes that represent the rich culture and unique taste of Cambodia.</p>
              <button className='mt-8 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition'>Order Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;