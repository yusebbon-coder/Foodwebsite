import React from 'react'
import { Soup, Leaf, Heart } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { NavLink } from 'react-router-dom';
const About = () => {
  const features = [
    {
      icon: <Soup size={40} />,
      title: "Authentic Taste",
      description:
        "Enjoy the authentic flavors of Cambodia made with traditional recipes.",
    },
    {
      icon: <Leaf size={40} />,
      title: "Fresh Quality",
      description:
        "We use fresh and quality ingredients to prepare every delicious meal.",
    },
    {
      icon: <Heart size={40} />,
      title: "Made With Love",
      description:
        "Every dish is prepared with care and passion for Khmer food.",
    },
  ];
  return (
    <div>
      {/* Cart1 */}
      <section className='bg-[#faf7f2] py-20'>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-2xl">
              <img src="https://i.pinimg.com/736x/4c/e1/f0/4ce1f0f9cf3b6aa8b6d7555ffcf64841.jpg" alt="image" className='w-full h-[350px] object-cover' />
            </div>
            <div className="">
              <p className='text-lg font-semibold'>Discover Khmer Food</p>
              <h3 className='mt-3 text-4xl text-green-700 md:text-5xl font-bold'> A Taste of Cambodia</h3>
              <p className='mt-6 text-gray-600 leading-7 max-w-lg'> We bring authentic Khmer flavors to your table,
                using traditional recipes and fresh ingredients
                inspired by Cambodian cuisine.</p>
              <button className='mt-8 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition'> Explore Our Food</button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-green-800 font-semibold uppercase tracking-widest">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Experience the Taste of Cambodia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Discover authentic Khmer flavors made from fresh ingredients
              and prepared with love.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl text-center
                         shadow-sm hover:shadow-xl
                         transition duration-300
                         hover:-translate-y-2">
                <div className="w-20 h-20 mx-auto flex items-center justify-center
                              rounded-full bg-amber-100 text-amber-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mt-6 text-gray-900">
                  {item.title}
</h3>
                <p className="text-gray-500 mt-3 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-gray-300 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-amber-100 uppercase tracking-widest font-semibold">
            Experience Cambodia
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Discover the Flavors of Khmer Cuisine
          </h2>
          <p className="text-amber-50 max-w-2xl mx-auto mt-6 text-lg leading-8">
            Enjoy traditional Cambodian flavors, authentic recipes,
            and delicious dishes made with fresh ingredients.
          </p>
          <NavLink to='/food'
            className="mt-8 inline-flex items-center gap-2 bg-white text-amber-600 px-7 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-300">
            View Menu
            <ArrowRight size={20} />
          </NavLink>

        </div>
      </section>
    </div>

  )
}
export default About
