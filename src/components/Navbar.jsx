// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   Search,
//   ShoppingCart,
//   Menu,
//   X,
// } from "lucide-react";

// import { useCart } from "./CartContext";
// import CartSidebar from "./CartSidebar";

// const Navbar = () => {
//   const [search, setSearch] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);

//   const { cartCount } = useCart();

//   const closeMobileMenu = () => {
//     setIsOpen(false);
//   };

//   const navLinkClass = ({ isActive }) =>
//     isActive
//       ? "text-amber-600 font-semibold"
//       : "hover:text-amber-600 transition";

//   const mobileLinkClass = ({ isActive }) =>
//     `px-4 py-3 rounded-lg transition ${isActive
//       ? "bg-amber-600 text-white"
//       : "hover:bg-gray-100"
//     }`;

//   return (
//     <>
//       <nav className="w-full z-50 px-3 sm:px-4 py-3 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white shadow-lg rounded-xl px-4 py-3">

//             {/* Main Navbar */}
//             <div className="flex items-center justify-between gap-4">

//               {/* Logo */}
//               <NavLink
//                 to="/"
//                 onClick={closeMobileMenu}
//                 className="font-bold text-lg sm:text-xl whitespace-nowrap"
//               >
//                 FOOD STORE
//               </NavLink>

//               {/* Desktop Menu */}
//               <ul className="hidden lg:flex items-center gap-6">

//                 <li>
//                   <NavLink
//                     to="/"
//                     className={navLinkClass}
//                   >
//                     Home
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     to="/about"
//                     className={navLinkClass}
//                   >
//                     About
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     to="/food"
//                     className={navLinkClass}
//                   >
//                     Food
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     to="/contact"
//                     className={navLinkClass}
//                   >
//                     Contact
//                   </NavLink>
//                 </li>

//               </ul>

//               {/* Desktop Right */}
//               <div className="hidden lg:flex items-center gap-3">

//                 {/* Search */}
//                 <div className="flex items-center border-2 border-gray-200 rounded-xl px-2 focus-within:border-amber-500 transition">
//                   <Search
//                     size={20}
//                     className="text-gray-500"
//                   />

//                   <input
//                     type="text"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     placeholder="Search food..."
//                     className="w-36 xl:w-48 px-2 py-2 outline-none"
//                   />
//                 </div>

//                 {/* Cart */}
//                 <button
//                   onClick={() => setCartOpen(true)}
//                   className="relative p-2 hover:text-amber-600 transition"
//                 >
//                   <ShoppingCart size={24} />

//                   {cartCount > 0 && (
//                     <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                       {cartCount}
//                     </span>
//                   )}
//                 </button>

//                 {/* Login */}
//                 <NavLink
//                   to="/login"
//                   className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
//                 >
//                   Login
//                 </NavLink>

//                 {/* Register */}
//                 <NavLink
//                   to="/register"
//                   className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
//                 >
//                   Register
//                 </NavLink>

//               </div>

//               {/* Mobile Buttons */}
//               <div className="flex lg:hidden items-center gap-3">

//                 {/* Mobile Cart */}
//                 <button
//                   onClick={() => setCartOpen(true)}
//                   className="relative p-2 hover:text-amber-600 transition"
//                 >
//                   <ShoppingCart size={24} />

//                   {cartCount > 0 && (
//                     <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                       {cartCount}
//                     </span>
//                   )}
//                 </button>

//                 {/* Mobile Menu */}
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="p-1 hover:text-amber-600 transition"
//                 >
//                   {isOpen ? (
//                     <X size={28} />
//                   ) : (
//                     <Menu size={28} />
//                   )}
//                 </button>

//               </div>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//               <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">

//                 {/* Mobile Search */}
//                 <div className="flex items-center border-2 border-gray-200 rounded-xl px-2 mb-4 focus-within:border-amber-500">

//                   <Search
//                     size={20}
//                     className="text-gray-500"
//                   />

//                   <input
//                     type="text"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     placeholder="Search food..."
//                     className="w-full px-2 py-2 outline-none"
//                   />

//                 </div>

//                 {/* Mobile Links */}
//                 <div className="flex flex-col gap-2">

//                   <NavLink
//                     to="/"
//                     onClick={closeMobileMenu}
//                     className={mobileLinkClass}
//                   >
//                     Home
//                   </NavLink>

//                   <NavLink
//                     to="/about"
//                     onClick={closeMobileMenu}
//                     className={mobileLinkClass}
//                   >
//                     About
//                   </NavLink>

//                   <NavLink
//                     to="/food"
//                     onClick={closeMobileMenu}
//                     className={mobileLinkClass}
//                   >
//                     Food
//                   </NavLink>

//                   <NavLink
//                     to="/contact"
//                     onClick={closeMobileMenu}
//                     className={mobileLinkClass}
//                   >
//                     Contact
//                   </NavLink>

//                   {/* Login */}
//                   <NavLink
//                     to="/login"
//                     onClick={closeMobileMenu}
//                     className="text-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
//                   >
//                     Login
//                   </NavLink>

//                   {/* Register */}
//                   <NavLink
//                     to="/register"
//                     onClick={closeMobileMenu}
//                     className="text-center px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
//                   >
//                     Register
//                   </NavLink>

//                 </div>
//               </div>
//             )}

//           </div>
//         </div>
//       </nav>

//       {/* Cart Sidebar */}
//       <CartSidebar
//         isOpen={cartOpen}
//         onClose={() => setCartOpen(false)}
//       />
//     </>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  UserCircle,
  LogOut,
} from "lucide-react";
import { useCart } from "./CartContext";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Update Login / Logout
  useEffect(() => {
    const updateAuth = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    updateAuth();

    window.addEventListener("authChanged", updateAuth);
    window.addEventListener("storage", updateAuth);

    return () => {
      window.removeEventListener("authChanged", updateAuth);
      window.removeEventListener("storage", updateAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    window.dispatchEvent(new Event("authChanged"));

    navigate("/");
  };

  // Search Product
  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    navigate(`/?search=${encodeURIComponent(value)}`);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-amber-600 font-semibold"
      : "hover:text-amber-600 transition";

  return (
    <>
      <nav className="w-full z-50 px-3 sm:px-4 py-3 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-lg rounded-xl px-4 py-3">

            {/* Main Navbar */}
            <div className="flex items-center justify-between gap-4">

              {/* Logo */}
              <NavLink
                to="/"
                className="font-bold text-lg sm:text-xl whitespace-nowrap"
              >
                FOOD STORE
              </NavLink>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex items-center gap-6">
                <li>
                  <NavLink to="/" className={navLinkClass}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" className={navLinkClass}>
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/food" className={navLinkClass}>
                    Food
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/contact" className={navLinkClass}>
                    Contact
                  </NavLink>
                </li>
              </ul>

              {/* Desktop Right */}
              <div className="hidden lg:flex items-center gap-3">

                {/* Search */}
                <div className="flex items-center border-2 border-gray-200 rounded-xl px-2 focus-within:border-amber-500 transition">
                  <Search
                    size={20}
                    className="text-gray-500"
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search food..."
                    className="w-40 xl:w-48 px-2 py-2 outline-none"
                  />
                </div>

                {/* Cart */}
                <button
                  onClick={() => setCartOpen(true)}
                  className="relative p-2 hover:text-amber-600 transition"
                >
                  <ShoppingCart size={24} />

                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>

                {/* Authentication */}
                {!isLoggedIn ? (
                  <>
                    <NavLink
                      to="/login"
                      className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                    >
                      Login
                    </NavLink>

                    <NavLink
                      to="/register"
                      className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
                    >
                      Register
                    </NavLink>
                  </>
                ) : (
                  <div className="flex items-center gap-2">

                    {/* Account */}
                    <button
                      onClick={() => navigate("/account")}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-50 text-amber-600"
                    >
                      <UserCircle size={25} />
                      <span>Account</span>
                    </button>

                    {/* Logout */}
                    <button
                      onClick={handleLogout}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      title="Logout"
                    >
                      <LogOut size={22} />
                    </button>

                  </div>
                )}
              </div>

              {/* Mobile */}
              <div className="flex lg:hidden items-center gap-3">

                {/* Cart */}
                <button
                  onClick={() => setCartOpen(true)}
                  className="relative"
                >
                  <ShoppingCart size={24} />

                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>

                {/* Menu */}
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

              </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">

                {/* Mobile Search */}
                <div className="flex items-center border-2 border-gray-200 rounded-xl px-2 mb-4 focus-within:border-amber-500">
                  <Search size={20} className="text-gray-500" />

                  <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search food..."
                    className="w-full px-2 py-2 outline-none"
                  />
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col gap-2">

                  <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg hover:bg-gray-100"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg hover:bg-gray-100"
                  >
                    About
                  </NavLink>

                  <NavLink
                    to="/food"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg hover:bg-gray-100"
                  >
                    Food
                  </NavLink>

                  <NavLink
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg hover:bg-gray-100"
                  >
                    Contact
                  </NavLink>

                  {!isLoggedIn ? (
                    <>
                      <NavLink
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className="text-center px-4 py-3 border rounded-lg"
                      >
                        Login
                      </NavLink>

                      <NavLink
                        to="/register"
                        onClick={() => setIsOpen(false)}
                        className="text-center px-4 py-3 bg-amber-600 text-white rounded-lg"
                      >
                        Register
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/account");
                        }}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-amber-50 text-amber-600 rounded-lg"
                      >
                        <UserCircle size={22} />
                        Account
                      </button>

                      <button
                        onClick={() => {
                          setIsOpen(false);
                          handleLogout();
                        }}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-500 rounded-lg"
                      >
                        <LogOut size={22} />
                        Logout
                      </button>
                    </>
                  )}

                </div>
              </div>
            )}

          </div>
        </div>
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
};

export default Navbar;