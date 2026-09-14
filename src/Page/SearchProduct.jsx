import React, { useMemo, useState } from "react";
import {
  Search,
  ShoppingCart,
  Star,
  X,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

import { useCart } from "../components/CartContext";
import Data from "../Data/Data";

const SearchProduct = () => {
  const { addToCart } = useCart();

  const [searchParams] = useSearchParams();

  // Get search from Navbar: /search?q=burger
  const initialSearch = searchParams.get("q") || "";

  const [search, setSearch] = useState(initialSearch);

  // Search Product
  const filteredProducts = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    if (!keyword) {
      return Data;
    }

    return Data.filter((product) =>
      product.name?.toLowerCase().includes(keyword)
    );
  }, [search]);

  // Add to cart
  const handleAddToCart = (product) => {
    const isLoggedIn =
      localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      alert("Please login first to add food to your cart.");
      return;
    }

    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* ================= SEARCH ================= */}
        <div className="relative">
          <Search
            size={22}
            className="
              absolute left-5 top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search food..."
            className="
              w-full rounded-2xl
              border border-gray-200
              bg-white
              py-4 pl-14 pr-14
              text-gray-700
              shadow-sm
              outline-none
              transition
              focus:border-amber-400
              focus:ring-4
              focus:ring-amber-100
            "
          />

          {/* Clear Search */}
          {search && (
            <button
              onClick={() => setSearch("")}
              className="
                absolute right-5 top-1/2
                -translate-y-1/2
                rounded-full
                p-1
                text-gray-400
                transition
                hover:bg-gray-100
                hover:text-gray-700
              "
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* ================= TITLE ================= */}
        <div className="mt-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Search Results
          </h1>

          <p className="mt-2 text-gray-500">
            {search ? (
              <>
                {filteredProducts.length} foods found for{" "}
                <span className="font-semibold text-amber-500">
                  "{search}"
                </span>
              </>
            ) : (
              `${ filteredProducts.length } foods available`
            )}
          </p>
        </div>

        {/* ================= PRODUCTS ================= */}
        {filteredProducts.length > 0 && (
          <div
            className="
              mt-10 grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                {/* ================= IMAGE ================= */}
                <div
                  className="
                    relative
                    h-56
                    overflow-hidden
                    bg-gray-100
                  "
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Product Badge */}
                  {product.title && (
                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        bg-amber-500
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-white
                      "
                    >
                      {product.title}
                    </span>
                  )}
                </div>

                {/* ================= INFO ================= */}
                <div className="p-5">

                  <h2 className="truncate text-lg font-bold text-gray-900">
                    {product.name}
                  </h2>

                  {/* Description */}
                  <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                    {product.Des}
                  </p>

                  {/* Rating */}
                  <div className="mt-3 flex items-center gap-1">
                    <Star
                      size={17}
                      className="
                        fill-amber-400
                        text-amber-400
                      "
                    />

                    <span className="font-semibold text-gray-700">
                      {product.rating}
                    </span>

                    <span className="text-xs text-gray-400">
                      / 5
                    </span>
                  </div>

                  {/* ================= PRICE ================= */}
                  <div className="mt-5 flex items-center justify-between">

                    <div>
                      {product.after ? (
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-green-600">
                            ${product.after}
                          </span>

                          <span className="text-sm text-gray-400 line-through">
                            ${product.price}
                          </span>
                        </div>
                      ) : (
                        <span className="text-2xl font-bold text-green-600">
                          ${product.price}
                        </span>
                      )}
                    </div>

                    {/* Cart Button */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-amber-500
                        text-white
                        shadow-sm
                        transition
                        hover:bg-amber-600
                        hover:shadow-md
                        active:scale-95
                      "
                      title="Add to cart"
                    >
                      <ShoppingCart size={20} />
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= NO RESULT ================= */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">

            <div
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-gray-100
              "
            >
              <Search
                size={32}
                className="text-gray-400"
              />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-800">
              No food found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              We couldn't find any food matching "{search}".
            </p>

            <button
              onClick={() => setSearch("")}
              className="
                mt-5
                rounded-xl
                bg-amber-500
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-amber-600
              "
            >
              Show All Food
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default SearchProduct;