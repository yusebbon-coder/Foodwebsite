import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {
            setError("Account not found. Please register first.");
            return;
        }

        if (
            email !== savedUser.email ||
            password !== savedUser.password
        ) {
            setError("Email or password is incorrect.");
            return;
        }

        // Login success
        localStorage.setItem("isLoggedIn", "true");

        // ប្រាប់ Navbar ឱ្យ update Account ភ្លាមៗ
        window.dispatchEvent(new Event("authChanged"));

        alert("Login successful!");

        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome Back
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Login to your FOOD STORE account
                    </p>
                </div>

                {error && (
                    <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Email
                        </label>

                        <div className="flex items-center border rounded-xl px-3 focus-within:border-amber-500">
                            <Mail size={20} className="text-gray-400" />

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-3 py-3 outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Password
                        </label>

                        <div className="flex items-center border rounded-xl px-3 focus-within:border-amber-500">
                            <Lock size={20} className="text-gray-400" />

                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full px-3 py-3 outline-none"
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-gray-500 hover:text-gray-800"
                            >
                                {showPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Login button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-500 mt-6">
                    Don't have an account?{" "}

                    <Link
                        to="/register"
                        className="text-amber-600 font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Login;