import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    User,
    Bell,
    Lock,
    Globe,
    Moon,
    Sun,
    LogOut,
    Save,
    ChevronRight,
    ShieldCheck,
} from "lucide-react";

const Settings = () => {
    const navigate = useNavigate();

    // =========================
    // USER
    // =========================
    const [user, setUser] = useState(() => {
        try {
            return (
                JSON.parse(localStorage.getItem("user")) || {
                    name: "Food Lover",
                    email: "user@gmail.com",
                    phone: "+855 XX XXX XXX",
                }
            );
        } catch {
            return {
                name: "Food Lover",
                email: "user@gmail.com",
                phone: "+855 XX XXX XXX",
            };
        }
    });

    // =========================
    // SETTINGS
    // =========================
    const [notifications, setNotifications] = useState(
        localStorage.getItem("notifications") !== "false"
    );

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );

    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "English"
    );

    // =========================
    // PROFILE FORM
    // =========================
    const [name, setName] = useState(user.name || "");
    const [email, setEmail] = useState(user.email || "");
    const [phone, setPhone] = useState(user.phone || "");

    // =========================
    // PASSWORD
    // =========================
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // =========================
    // SAVE PROFILE
    // =========================
    const handleSaveProfile = () => {
        if (!name.trim() || !email.trim()) {
            alert("Please enter your name and email.");
            return;
        }

        const updatedUser = {
            ...user,
            name,
            email,
            phone,
        };

        localStorage.setItem(
            "user",
            JSON.stringify(updatedUser)
        );

        setUser(updatedUser);

        // Update navbar
        window.dispatchEvent(new Event("authChanged"));

        alert("Profile updated successfully!");
    };

    // =========================
    // NOTIFICATIONS
    // =========================
    const handleNotificationChange = (value) => {
        setNotifications(value);
        localStorage.setItem(
            "notifications",
            String(value)
        );
    };

    // =========================
    // DARK MODE
    // =========================
    const handleDarkMode = (value) => {
        setDarkMode(value);
        localStorage.setItem("darkMode", String(value));

        if (value) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    // Load dark mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    // =========================
    // LANGUAGE
    // =========================
    const handleLanguageChange = (value) => {
        setLanguage(value);
        localStorage.setItem("language", value);
    };

    // =========================
    // CHANGE PASSWORD
    // =========================
    const handleChangePassword = () => {
        if (!oldPassword || !newPassword || !confirmPassword) {
            alert("Please complete all password fields.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("New passwords do not match.");
            return;
        }

        if (newPassword.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        // Demo password update
        localStorage.setItem("password", newPassword);

        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");

        alert("Password changed successfully!");
    };

    // =========================
    // LOGOUT
    // =========================
    const handleLogout = () => {
        const confirmLogout = window.confirm(
            "Are you sure you want to logout?"
        );

        if (!confirmLogout) return;

        localStorage.removeItem("isLoggedIn");

        window.dispatchEvent(new Event("authChanged"));

        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 transition-colors duration-300 dark:bg-gray-950">

            {/* =========================
          HEADER
      ========================= */}
            <div className="mx-auto max-w-6xl px-4">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Settings
                    </h1>

                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                        Manage your account and preferences
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">

                    {/* =========================
              LEFT PROFILE CARD
          ========================= */}
                    <div className="h-fit rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

                        <div className="text-center">

                            {/* Avatar */}
                            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
                                <User size={42} />
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
                                {user.name || "Food Lover"}
                            </h2>

                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {user.email}
                            </p>
                        </div>

                        {/* Account links */}
                        <div className="mt-8 space-y-2">

                            <button
                                onClick={() => navigate("/account")}
                                className="flex w-full items-center gap-3 rounded-xl p-3 text-left text-gray-600 transition hover:bg-amber-50 hover:text-amber-600 dark:text-gray-300 dark:hover:bg-gray-800"
                            >
                                <User size={19} />

                                <span className="flex-1">
                                    My Account
                                </span>

                                <ChevronRight size={18} />
                            </button>

                            <button
                                onClick={() => navigate("/orders")}
                                className="flex w-full items-center gap-3 rounded-xl p-3 text-left text-gray-600 transition hover:bg-amber-50 hover:text-amber-600 dark:text-gray-300 dark:hover:bg-gray-800"
                            >
                                <ShieldCheck size={19} />

                                <span className="flex-1">
                                    My Orders
                                </span>

                                <ChevronRight size={18} />
                            </button>

                            <button
                                onClick={handleLogout}
                                className="mt-4 flex w-full items-center gap-3 rounded-xl p-3 text-left text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10"
                            >
                                <LogOut size={19} />

                                <span>
                                    Logout
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* =========================
              RIGHT SETTINGS
          ========================= */}
                    <div className="space-y-6 lg:col-span-2">

                        {/* =========================
                PROFILE
            ========================= */}
                        <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
                                    <User size={21} />
                                </div>

                                <div>
                                    <h2 className="font-bold text-gray-800 dark:text-white">
                                        Personal Information
                                    </h2>

                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Update your personal details
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">

                                {/* NAME */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Full Name
                                    </label>

                                    <input
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* EMAIL */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                        placeholder="Your email"
                                    />
                                </div>

                                {/* PHONE */}
                                <div className="md:col-span-2">
                                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                        placeholder="+855 XX XXX XXX"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleSaveProfile}
                                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
                            >
                                <Save size={18} />
                                Save Changes
                            </button>
                        </div>

                        {/* =========================
                NOTIFICATIONS
            ========================= */}
                        <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

                            <div className="flex items-center gap-4">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                                    <Bell size={21} />
                                </div>

                                <div className="flex-1">
                                    <h2 className="font-bold text-gray-800 dark:text-white">
                                        Notifications
                                    </h2>

                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Receive updates about your orders
                                    </p>
                                </div>

                                {/* Toggle */}
                                <button
                                    onClick={() =>
                                        handleNotificationChange(
                                            !notifications
                                        )
                                    }
                                    className={`relative h-7 w-12 rounded-full transition ${notifications
                                            ? "bg-amber-500"
                                            : "bg-gray-300 dark:bg-gray-700"
                                        }`}
                                >
                                    <span
                                        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${notifications
                                                ? "left-6"
                                                : "left-1"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* =========================
                LANGUAGE
            ========================= */}
                        <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400">
                                    <Globe size={21} />
                                </div>

                                <div className="flex-1">
                                    <h2 className="font-bold text-gray-800 dark:text-white">
                                        Language
                                    </h2>

                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Choose your preferred language
                                    </p>
                                </div>

                                <select
                                    value={language}
                                    onChange={(e) =>
                                        handleLanguageChange(
                                            e.target.value
                                        )
                                    }
                                    className="rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-amber-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                >
                                    <option>English</option>
                                    <option>Khmer</option>
                                </select>
                            </div>
                        </div>

                        {/* =========================
                APPEARANCE
            ========================= */}
                        <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

                            <div className="flex items-center gap-4">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                                    {darkMode ? (
                                        <Moon size={21} />
                                    ) : (
                                        <Sun size={21} />
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h2 className="font-bold text-gray-800 dark:text-white">
                                        Appearance
                                    </h2>

                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Choose light or dark mode
                                    </p>
                                </div>

                                <button
                                    onClick={() =>
                                        handleDarkMode(!darkMode)
                                    }
                                    className={`relative h-7 w-12 rounded-full transition ${darkMode
                                            ? "bg-amber-500"
                                            : "bg-gray-300 dark:bg-gray-700"
                                        }`}
                                >
                                    <span
                                        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${darkMode
                                                ? "left-6"
                                                : "left-1"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* =========================
                PASSWORD
            ========================= */}
                        <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

                            <div className="mb-6 flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400">
                                    <Lock size={21} />
                                </div>

                                <div>
                                    <h2 className="font-bold text-gray-800 dark:text-white">
                                        Security
                                    </h2>

                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Change your account password
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">

                                <input
                                    type="password"
                                    value={oldPassword}
                                    onChange={(e) =>
                                        setOldPassword(e.target.value)
                                    }
                                    placeholder="Current password"
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                />

                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                    placeholder="New password"
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                />

                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    placeholder="Confirm new password"
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                />
                            </div>

                            <button
                                onClick={handleChangePassword}
                                className="mt-6 flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800 dark:bg-amber-500 dark:hover:bg-amber-600"
                            >
                                <Lock size={18} />
                                Change Password
                            </button>
                        </div>

                        {/* =========================
                LOGOUT
            ========================= */}
                        <div className="rounded-3xl border border-red-100 bg-red-50 p-6 dark:border-red-500/20 dark:bg-red-500/10">

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                                <div className="flex-1">
                                    <h2 className="font-bold text-red-600">
                                        Logout
                                    </h2>

                                    <p className="mt-1 text-sm text-red-500/80">
                                        Sign out from your Food Store account.
                                    </p>
                                </div>

                                <button
                                    onClick={handleLogout}
                                    className="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
                                >
                                    <LogOut size={18} />
                                    Logout
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;