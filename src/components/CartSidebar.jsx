// // import React from "react";
// // import {
// //     X,
// //     Plus,
// //     Minus,
// //     Trash2,
// //     ShoppingCart,
// // } from "lucide-react";

// // import { useCart } from "./CartContext";

// // const CartSidebar = ({ isOpen, onClose }) => {
// //     const {
// //         cart,
// //         removeFromCart,
// //         increaseQuantity,
// //         decreaseQuantity,
// //     } = useCart();

// //     const totalPrice = cart.reduce(
// //         (total, item) => total + Number(item.price) * item.quantity,
// //         0
// //     );

// //     return (
// //         <>
// //             {/* Overlay */}
// //             {isOpen && (
// //                 <div
// //                     onClick={onClose}
// //                     className="fixed inset-0 bg-black/40 z-[90]"
// //                 />
// //             )}

// //             {/* Sidebar */}
// //             <div
// //                 className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[100] shadow-2xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
// //                     }`}
// //             >
// //                 {/* Header */}
// //                 <div className="flex items-center justify-between px-5 py-4 border-b">
// //                     <div className="flex items-center gap-2">
// //                         <ShoppingCart size={24} />

// //                         <h2 className="text-xl font-bold">
// //                             Your Cart
// //                         </h2>
// //                     </div>

// //                     <button
// //                         onClick={onClose}
// //                         className="p-2 hover:bg-gray-100 rounded-full"
// //                     >
// //                         <X size={24} />
// //                     </button>
// //                 </div>

// //                 {/* Cart Items */}
// //                 <div className="h-[calc(100%-140px)] overflow-y-auto p-5">
// //                     {cart.length === 0 ? (
// //                         <div className="flex flex-col items-center justify-center h-full text-gray-400">
// //                             <ShoppingCart size={50} />

// //                             <p className="mt-3 text-lg">
// //                                 Your cart is empty
// //                             </p>
// //                         </div>
// //                     ) : (
// //                         <div className="space-y-4">
// //                             {cart.map((item) => (
// //                                 <div
// //                                     key={item.id}
// //                                     className="flex gap-3 border-b pb-4"
// //                                 >
// //                                     {/* Image */}
// //                                     <img
// //                                         src={item.image}
// //                                         alt={item.name}
// //                                         className="w-20 h-20 object-contain rounded-xl bg-gray-50"
// //                                     />

// //                                     {/* Info */}
// //                                     <div className="flex-1">
// //                                         <h3 className="font-bold">
// //                                             {item.name}
// //                                         </h3>

// //                                         <p className="text-green-600 font-semibold">
// //                                             ${Number(item.price).toFixed(2)}
// //                                         </p>

// //                                         {/* Quantity */}
// //                                         <div className="flex items-center gap-2 mt-2">
// //                                             <button
// //                                                 onClick={() =>
// //                                                     decreaseQuantity(item.id)
// //                                                 }
// //                                                 className="p-1 border rounded hover:bg-gray-100"
// //                                             >
// //                                                 <Minus size={16} />
// //                                             </button>

// //                                             <span className="w-6 text-center">
// //                                                 {item.quantity}
// //                                             </span>

// //                                             <button
// //                                                 onClick={() =>
// //                                                     increaseQuantity(item.id)
// //                                                 }
// //                                                 className="p-1 border rounded hover:bg-gray-100"
// //                                             >
// //                                                 <Plus size={16} />
// //                                             </button>
// //                                         </div>
// //                                     </div>

// //                                     {/* Delete */}
// //                                     <button
// //                                         onClick={() =>
// //                                             removeFromCart(item.id)
// //                                         }
// //                                         className="text-red-500 hover:text-red-700"
// //                                     >
// //                                         <Trash2 size={20} />
// //                                     </button>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     )}
// //                 </div>

// //                 {/* Footer */}
// //                 {cart.length > 0 && (
// //                     <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-5">
// //                         <div className="flex justify-between  mb-3">
// //                             <span className="font-semibold">
// //                                 Total
// //                             </span>

// //                             <span className="text-xl font-bold text-green-600">
// //                                 ${totalPrice.toFixed(2)}
// //                             </span>
// //                         </div>
// //                         <button  className="w-full bg-amber-600 text-white py-3 rounded-xl font-bold hover:bg-amber-700 transition">
// //                             Checkout
// //                         </button>
// //                     </div>
// //                 )}
// //             </div>
// //         </>
// //     );
// // };

// // export default CartSidebar;

// import React, { useState } from "react";
// import {
//     X,
//     Plus,
//     Minus,
//     Trash2,
//     ShoppingCart,
// } from "lucide-react";
// import { useCart } from "./CartContext";
// import CheckoutModal from "../Page/CheckoutModal";
// const CartSidebar = ({ isOpen, onClose }) => {
//     // Checkout Modal
//     const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
//     const {
//         cart,
//         removeFromCart,
//         increaseQuantity,
//         decreaseQuantity,
//     } = useCart();
//     const totalPrice = cart.reduce(
//         (total, item) =>
//             total + Number(item.price) * item.quantity,
//         0
//     );
//     return (
//         <>
//             {/* ================= OVERLAY ================= */}
//             {isOpen && (
//                 <div
//                     onClick={onClose}
//                     className="fixed inset-0 z-[90] bg-black/40"
//                 />
//             )}
//             {/* ================= SIDEBAR ================= */}
//             <div
//                 className={`fixed top - 0 right - 0 z - [100] h - full w - full transform bg - white shadow - 2xl transition - transform duration - 300 sm: w - [420px] ${
//     isOpen
//         ? "translate-x-0"
//         : "translate-x-full"
// } `}
//             >
//                 {/* Header */}
//                 <div className="flex items-center justify-between border-b px-5 py-4">
//                     <div className="flex items-center gap-2">
//                         <ShoppingCart size={24} />
//                         <h2 className="text-xl font-bold">
//                             Your Cart
//                         </h2>
//                     </div>
//                     <button
//                         onClick={onClose}
//                         className="rounded-full p-2 hover:bg-gray-100"
//                     >
//                         <X size={24} />
//                     </button>
//                 </div>
//                 {/* Cart Items */}
//                 <div className="h-[calc(100%-140px)] overflow-y-auto p-5">
//                     {cart.length === 0 ? (
//                         <div className="flex h-full flex-col items-center justify-center text-gray-400">
//                             <ShoppingCart size={50} />
//                             <p className="mt-3 text-lg">
//                                 Your cart is empty
//                             </p>
//                         </div>
//                     ) : (
//                         <div className="space-y-4">
//                             {cart.map((item) => (
//                                 <div
//                                     key={item.id}
//                                     className="flex gap-3 border-b pb-4"
//                                 >
//                                     {/* Image */}
//                                     <img
//                                         src={item.image}
//                                         alt={item.name}
//                                         className="h-20 w-20 rounded-xl bg-gray-50 object-contain"
//                                     />
//                                     {/* Info */}
//                                     <div className="flex-1">
//                                         <h3 className="font-bold">
//                                             {item.name}
//                                         </h3>
//                                         <p className="font-semibold text-green-600">
//                                             $
//                                             {Number(
//                                                 item.price
//                                             ).toFixed(2)}
//                                         </p>
//                                         {/* Quantity */}
//                                         <div className="mt-2 flex items-center gap-2">
//                                             <button
//                                                 onClick={() =>
//                                                     decreaseQuantity(
//                                                         item.id)
//                                                 }
//                                                 className="rounded border p-1 hover:bg-gray-100"
//                                             >
//                                                 <Minus size={16} />
//                                             </button>
//                                             <span className="w-6 text-center">
//                                                 {item.quantity}
//                                             </span>
//                                             <button
//                                                 onClick={() =>
//                                                     increaseQuantity(
//                                                         item.id
//                                                     )
//                                                 }
//                                                 className="rounded border p-1 hover:bg-gray-100"
//                                             >
//                                                 <Plus size={16} />
//                                             </button>
//                                         </div>
//                                     </div>
//                                     {/* Delete */}
//                                     <button
//                                         onClick={() =>
//                                             removeFromCart(item.id)
//                                         }
//                                         className="text-red-500 hover:text-red-700"
//                                     >
//                                         <Trash2 size={20} />
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//                 {/* ================= FOOTER ================= */}
//                 {cart.length > 0 && (
//                     <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-5">
//                         <div className="mb-3 flex justify-between">
//                             <span className="font-semibold">
//                                 Total
//                             </span>
//                             <span className="text-xl font-bold text-green-600">
//                                 ${totalPrice.toFixed(2)}
//                             </span>
//                         </div>
//                         {/* CHECKOUT BUTTON */}
//                         <button
//                             onClick={() =>
//                                 setIsCheckoutOpen(true)
//                             }
//                             className="w-full rounded-xl bg-amber-600 py-3 font-bold text-white transition hover:bg-amber-700"
//                         >
//                             Checkout
//                         </button>
//                     </div>
//                 )}
//             </div>
//             {/* ================= CHECKOUT MODAL ================= */}
//             <CheckoutModal
//                 isOpen={isCheckoutOpen}
//                 onClose={() =>
//                     setIsCheckoutOpen(false)
//                 }
//                 cart={cart}
//                 totalPrice={totalPrice}
//             />
//         </>
//     );
// };
// export default CartSidebar;
import React, { useState } from "react";
import {
    X,
    Plus,
    Minus,
    Trash2,
    ShoppingCart,
} from "lucide-react";

import { useCart } from "./CartContext";
import CheckoutModal from "../Page/CheckoutModal";

const CartSidebar = ({ isOpen, onClose }) => {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();

    const totalPrice = cart.reduce(
        (total, item) =>
            total + Number(item.price) * item.quantity,
        0
    );

    return (
        <>
            {/* ================= OVERLAY ================= */}
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 z-[90] bg-black/40"
                />
            )}

            {/* ================= CART SIDEBAR ================= */}
            <div
                className={`fixed top-0 right-0 z-[100] h-full w-full transform bg-white shadow-2xl transition-transform duration-300 sm:w-[420px] ${isOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
            >

                {/* ================= HEADER ================= */}
                <div className="flex items-center justify-between border-b px-5 py-4">
                    <div className="flex items-center gap-2">
                        <ShoppingCart size={24} />

                        <h2 className="text-xl font-bold">
                            Your Cart
                        </h2>
                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-full p-2 transition hover:bg-gray-100"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* ================= CART ITEMS ================= */}
                <div className="h-[calc(100%-145px)] overflow-y-auto p-5">
                    {cart.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-gray-400">
                            <ShoppingCart size={50} />

                            <p className="mt-3 text-lg">
                                Your cart is empty
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">

                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-3 border-b pb-4"
                                >

                                    {/* IMAGE */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-20 w-20 rounded-xl bg-gray-50 object-contain"
                                    />

                                    {/* INFO */}
                                    <div className="min-w-0 flex-1">

                                        <h3 className="truncate font-bold">
                                            {item.name}
                                        </h3>

                                        <p className="font-semibold text-green-600">
                                            ${Number(item.price).toFixed(2)}
                                        </p>

                                        {/* QUANTITY */}
                                        <div className="mt-2 flex items-center gap-2">

                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                                className="rounded border p-1 transition hover:bg-gray-100"
                                            >
                                                <Minus size={16} />
                                            </button>

                                            <span className="w-6 text-center font-medium">
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                                className="rounded border p-1 transition hover:bg-gray-100"
                                            >
                                                <Plus size={16} />
                                            </button>

                                        </div>
                                    </div>

                                    {/* DELETE */}
                                    <button
                                        onClick={() =>
                                            removeFromCart(item.id)
                                        }
                                        className="h-fit text-red-500 transition hover:text-red-700"
                                    >
                                        <Trash2 size={20} />
                                    </button>

                                </div>
                            ))}

                        </div>
                    )}
                </div>

                {/* ================= FOOTER ================= */}
                {cart.length > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-5">

                        <div className="mb-3 flex items-center justify-between">
                            <span className="font-semibold">
                                Total
                            </span>

                            <span className="text-xl font-bold text-green-600">
                                ${totalPrice.toFixed(2)}
                            </span>
                        </div>

                        {/* CHECKOUT */}
                        <button
                            onClick={() => setIsCheckoutOpen(true)}
                            className="w-full rounded-xl bg-amber-600 py-3 font-bold text-white transition hover:bg-amber-700"
                        >
                            Checkout
                        </button>

                    </div>
                )}

            </div>

            {/* ================= CHECKOUT MODAL ================= */}
            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                cart={cart}
                totalPrice={totalPrice}
            />
        </>
    );
};

export default CartSidebar;