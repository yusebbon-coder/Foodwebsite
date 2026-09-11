import React from "react";
import ProductCard from "../components/ProductCard";
import Data from "../Data/Data";
const Card = () => {
    return (
        <div>
            {/* <div className="grid sm:grid-cols-2 sm:gap-3 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-2">
            {Data.slice(8,12).map((item) => (
                <ProductCard
                    key={item.id}
                    items={item}
                />
            ))}
                {Data.slice(12, 16).map((item) => (
                    <ProductCard
                        key={item.id}
                        items={item}
                    />
                ))}
        </div>
        </div>
    );
};

export default Card;