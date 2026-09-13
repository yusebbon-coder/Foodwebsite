import React, { useMemo } from "react";
import { Search, X, Utensils } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import products from "../Data/Data";
import ProductCard from "../components/ProductCard";

const Foods = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search") || "";

    // =========================
    // SEARCH PRODUCT BY NAME
    // =========================
    const filteredProducts = useMemo(() => {
        const keyword = search.trim().toLowerCase();

        if (!keyword) {
            return products;
        }

        return products.filter((product) =>
            product.name
                ?.toLowerCase()
                .includes(keyword)
        );
    }, [search]);

    // =========================
    // SEARCH CHANGE
    // =========================
    const handleSearch = (e) => {
        const value = e.target.value;

        if (value.trim()) {
            setSearchParams({
                search: value,
            });
        } else {
            setSearchParams({});
        }
    };

    // =========================
    // CLEAR SEARCH
    // =========================
    const clearSearch = () => {
        setSearchParams({});
    };

    return (
        <div className="min-h-screen bg-gray-50">

            {/* =========================
          HEADER
      ========================= */}
            <section className="bg-gradient-to-r from-amber-50 via-white to-orange-50 px-4 py-12">

                <div className="mx-auto max-w-7xl text-center">

                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
                        <Utensils size={17} />
                        Food Menu
                    </div>

                    <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
                        Discover Your Favorite Food
                    </h1>

                    <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                        Search your favorite food and discover
                        delicious Cambodian and international dishes.
                    </p>

                    {/* =========================
              SEARCH BOX
          ========================= */}
                    <div className="relative mx-auto mt-7 max-w-xl">

                        <Search
                            size={21}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={handleSearch}
                            placeholder="Search food by name..."
                            className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-12 text-gray-700 shadow-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                        />

                        {search && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                            >
                                <X size={19} />
                            </button>
                        )}
                    </div>

                </div>
            </section>

            {/* =========================
          RESULT AREA
      ========================= */}
            <section className="mx-auto max-w-7xl px-4 py-10">

                {/* Result information */}
                <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        {search ? (
                            <>
                                <h2 className="text-xl font-bold text-gray-800">
                                    Search Results
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Results for{" "}
                                    <span className="font-semibold text-amber-600">
                                        "{search}"
                                    </span>
                                </p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl font-bold text-gray-800">
                                    All Food
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Discover all our delicious food
                                </p>
                            </>
                        )}
                    </div>

                    <div className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                        {filteredProducts.length}{" "}
                        {filteredProducts.length === 1
                            ? "Food"
                            : "Foods"}
                    </div>

                </div>

                {/* =========================
            PRODUCTS
        ========================= */}
                {filteredProducts.length > 0 ? (

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {filteredProducts.map((item) => (
                            <ProductCard
                                key={item.id}
                                items={item}
                            />
                        ))}

                    </div>

                ) : (

                    /* =========================
                       NO RESULT
                    ========================= */
                    <div className="rounded-3xl bg-white px-6 py-20 text-center shadow-sm">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                            <Search size={35} />
                        </div>

                        <h2 className="mt-6 text-2xl font-bold text-gray-800">
                            No Food Found
                        </h2>

                        <p className="mx-auto mt-2 max-w-md text-gray-500">
                            We couldn't find any food matching{" "}
                            <span className="font-semibold text-gray-700">
                                "{search}"
                            </span>
                            .
                        </p>

                        <button
                            onClick={clearSearch}
                            className="mt-6 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
                        >
                            View All Food
                        </button>

                    </div>

                )}

            </section>
        </div>
    );
};

export default Foods;