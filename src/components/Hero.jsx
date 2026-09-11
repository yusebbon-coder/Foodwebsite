import React from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  ShoppingCart,
  Clock,
  Star,
} from "lucide-react";

const Hero = () => {
  return (
    <section className=" bg-gradient-to-br from-orange-50 via-white to-yellow-50 min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT ================= */}
          <div className="max-w-xl">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="text-lg"></span>
              Fresh & Delicious Food
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Delicious Food
                          <span className="block text-green-700">
                Delivered To Your Door
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Enjoy fresh, delicious meals made with quality ingredients
              and delivered straight to your door. Order your favorite
              food today!
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <NavLink
                to="/food"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-orange-200 transition"
              >
                <ShoppingCart size={20} />
                Order Now
                <ArrowRight size={19} />
              </NavLink>

              <NavLink
                to="/food"
                              className="px-6 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-gray-700 font-semibold hover:bg-green-700 transition"
              >
                View Menu
              </NavLink>

            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mt-10">

              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Clock size={19} className="text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    Fast Delivery
                  </p>
                  <p className="text-xs text-gray-500">
                    30–45 minutes
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Star size={19} className="text-green-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    Top Rated
                  </p>
                  <p className="text-xs text-gray-500">
                    4.9 / 5 Rating
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative">

            {/* Background Circle */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40" />

            {/* Image Card */}
            <div className="relative bg-white p-3 rounded-3xl shadow-2xl rotate-1">

              <img
                src="https://www.agoda.com/wp-content/uploads/2025/06/Khmer-food-Featured-image-1244x700.jpg"
                alt="Delicious Khmer Food"
                className="w-full h-[420px] object-cover rounded-2xl"
              />

              {/* Rating Card */}
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Star
                    size={20}
                    className="text-yellow-500 fill-yellow-500"
                  />
                </div>

                <div>
                  <p className="font-bold text-gray-800">
                    4.9
                  </p>
                  <p className="text-xs text-gray-500">
                    Excellent
                  </p>
                </div>
              </div>

              {/* Delivery Card */}
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg">
                <p className="text-xs text-gray-500">
                  Delivery from
                </p>
                <p className="font-bold text-orange-500">
                  30 min
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;