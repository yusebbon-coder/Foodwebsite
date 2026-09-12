// import React from "react";
// import { useCart } from "../components/CartContext";
// const ProductCard = ({ items }) => {
//   const { addToCart } = useCart();

//   return (
//     <div className="max-w-7xl mx-auto bg-white rounded-2xl overflow-hidden hover:shadow-xl transition">
//       {/* Image */}
//       <div className="relative h-54 sm:h-64 overflow-hidden">
//         <img
//           src={items.image}
//           alt={items.name}
//           className="w-full h-full object-contain"
//         />

//         <span className="p-2 bg-white text-red-600 rounded-2xl shadow-sm absolute top-2 right-2">
//           {items.title}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="mt-2 mx-2 pb-4">
//         <h2 className="text-xl font-bold sm:text-lg">
//           {items.name}
//         </h2>

//         <p className="text-lg text-gray-400 sm:text-sm">
//           {items.Des}
//         </p>

//         <span className="text-green-700">
//           ★★★★★ {items.rating}
//         </span>

//         <div className="flex justify-between items-center gap-2 mt-3">
//           <p className="text-sm font-bold text-green-600 sm:text-2xl">
//             ${items.price}
//           </p>

//           <button
//             onClick={() => addToCart(items)}
//             className=" text-white p-3 rounded-full transition"
//             title="Add to cart"
//           >
//             🛒
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ items }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Check Login before Add To Cart
  const handleAddToCart = () => {
    const isLoggedIn =
      localStorage.getItem("isLoggedIn") === "true";

    // If not logged in → go to Login
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    // If logged in → Add to Cart
    addToCart(items);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-2xl overflow-hidden hover:shadow-xl transition">

      {/* Image */}
      <div className="relative h-54 sm:h-64 overflow-hidden">
        <img
          src={items.image}
          alt={items.name}
          className="w-full h-full object-contain"
        />

        <span className="p-2 bg-white text-red-600 rounded-2xl shadow-sm absolute top-2 right-2">
          {items.title}
        </span>
      </div>

      {/* Content */}
      <div className="mt-2 mx-2 pb-4">

        <h2 className="text-xl font-bold sm:text-lg">
          {items.name}
        </h2>

        <p className="text-lg text-gray-400 sm:text-sm">
          {items.Des}
        </p>

        <span className="text-green-700">
          ★★★★★ {items.rating}
        </span>

        <div className="flex justify-between items-center gap-2 mt-3">

          <p className="text-sm font-bold text-green-600 sm:text-2xl">
            ${items.price}
          </p>

          <button
            onClick={handleAddToCart}
            className="text-white p-3 rounded-full transition"
            title="Add to cart"
          >
            🛒
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
