import React from "react";
import { useNavigate } from "react-router-dom";
import {
    UserCircle,
    User,
    Mail,
    Phone,
    MapPin,
    ShoppingBag,
    Heart,
    Settings,
    LogOut,
    Pencil,
} from "lucide-react";

const Account = () => {
    const navigate = useNavigate();

    // Get user from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    const user = savedUser || {
        name: "Food Lover",
        email: "user@gmail.com",
        phone: "+855 XX XXX XXX",
        address: "Phnom Penh, Cambodia",
    };

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");

        window.dispatchEvent(new Event("authChanged"));

        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="bg-white rounded-2xl shadow-sm px-6 py-5 mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        MY ACCOUNT
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Manage your account and personal information
                    </p>
                </div>

                {/* Main Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* Sidebar */}
                    <aside className="md:col-span-1">
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

                            {/* User Profile */}
                            <div className="p-6 text-center border-b border-gray-100">
                                <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 flex items-center justify-center">
                                    <UserCircle
                                        size={52}
                                        className="text-amber-500"
                                    />
                                </div>

                                <h2 className="mt-3 text-lg font-bold text-gray-800">
                                    {user.name}
                                </h2>

                                <p className="text-sm text-gray-500 truncate">
                                    {user.email}
                                </p>
                            </div>

                            {/* Menu */}
                            <nav className="p-3 space-y-1">

                                {/* Profile */}
                                <button
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-50 text-amber-600 font-medium"
                                >
                                    <User size={20} />
                                    <span>Profile</span>
                                </button>

                                {/* Orders */}
                                <button
                                    onClick={() => navigate("/orders")}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-amber-50 hover:text-amber-600 transition"
                                >
                                    <ShoppingBag size={20} />
                                    <span>Orders</span>
                                </button>

                                {/* Favorites */}
                                <button
                                    onClick={() => navigate("/favorites")}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-amber-50 hover:text-amber-600 transition"
                                >
                                    <Heart size={20} />
                                    <span>Favorites</span>
                                </button>

                                {/* Address */}
                                <button
                                    onClick={() => navigate("/address")}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-amber-50 hover:text-amber-600 transition"
                                >
                                    <MapPin size={20} />
                                    <span>Address</span>
                                </button>

                                {/* Settings */}
                                <button
                                    onClick={() => navigate("/settings")}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-amber-50 hover:text-amber-600 transition"
                                >
                                    <Settings size={20} />
                                    <span>Settings</span>
                                </button>

                                {/* Logout */}
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition"
                                >
                                    <LogOut size={20} />
                                    <span>Logout</span>
                                </button>

                            </nav>
                        </div>
                    </aside>

                    {/* Content */}
                    <main className="md:col-span-3 space-y-6">

                        {/* Personal Information */}
                        <section className="bg-white rounded-2xl shadow-sm p-6">

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">
                                        Personal Information
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Your personal account details
                                    </p>
                                </div>

                                <button
                                    onClick={() => alert("Edit Profile feature coming soon")}
                                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition"
                                >
                                    <Pencil size={17} />
                                    Edit Profile
                                </button>
                            </div>

                            {/* Information Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                {/* Name */}
                                <div className="border border-gray-100 rounded-xl p-5 hover:shadow-sm transition">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                                            <User className="text-amber-500" size={20} />
                                        </div>

                                        <span className="text-sm text-gray-500">
                                            Full Name
                                        </span>
                                    </div>

                                    <p className="font-semibold text-gray-800">
                                        {user.name}
                                    </p>
                                </div>

                                {/* Email */}
                                <div className="border border-gray-100 rounded-xl p-5 hover:shadow-sm transition">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                                            <Mail className="text-amber-500" size={20} />
                                        </div>

                                        <span className="text-sm text-gray-500">
                                            Email
                                        </span>
                                    </div>

                                    <p className="font-semibold text-gray-800 break-all">
                                        {user.email}
                                    </p>
                                </div>

                                {/* Phone */}
                                <div className="border border-gray-100 rounded-xl p-5 hover:shadow-sm transition">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                                            <Phone className="text-amber-500" size={20} />
                                        </div>

                                        <span className="text-sm text-gray-500">
                                            Phone
                                        </span>
                                    </div>

                                    <p className="font-semibold text-gray-800">
                                        {user.phone || "+855 XX XXX XXX"}
                                    </p>
                                </div>

                                {/* Address */}
                                <div className="border border-gray-100 rounded-xl p-5 hover:shadow-sm transition">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                                            <MapPin className="text-amber-500" size={20} />
                                        </div>

                                        <span className="text-sm text-gray-500">
                                            Delivery Address
                                        </span>
                                    </div>

                                    <p className="font-semibold text-gray-800">
                                        {user.address || "No address added"}
                                    </p>
                                </div>

                            </div>
                        </section>

                        {/* Account Overview */}
                        <section className="bg-white rounded-2xl shadow-sm p-6">

                            <h2 className="text-xl font-bold text-gray-800 mb-5">
                                Account Overview
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                {/* Orders */}
                                <div className="bg-orange-50 rounded-xl p-5">
                                    <div className="flex items-center justify-between">
                                        <ShoppingBag
                                            className="text-orange-500"
                                            size={25}
                                        />

                                        <span className="text-2xl font-bold text-gray-800">
                                            12
                                        </span>
                                    </div>

                                    <p className="mt-3 text-sm text-gray-600">
                                        Total Orders
                                    </p>
                                </div>

                                {/* Favorites */}
                                <div className="bg-red-50 rounded-xl p-5">
                                    <div className="flex items-center justify-between">
                                        <Heart
                                            className="text-red-500"
                                            size={25}
                                        />

                                        <span className="text-2xl font-bold text-gray-800">
                                            8
                                        </span>
                                    </div>

                                    <p className="mt-3 text-sm text-gray-600">
                                        Favorites
                                    </p>
                                </div>

                                {/* Address */}
                                <div className="bg-blue-50 rounded-xl p-5">
                                    <div className="flex items-center justify-between">
                                        <MapPin
                                            className="text-blue-500"
                                            size={25}
                                        />

                                        <span className="text-2xl font-bold text-gray-800">
                                            1
                                        </span>
                                    </div>

                                    <p className="mt-3 text-sm text-gray-600">
                                        Saved Address
                                    </p>
                                </div>

                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default Account;