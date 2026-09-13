import React, { useEffect, useState } from "react";
import { Trash2, ShoppingBag } from "lucide-react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(savedOrders);
  };

  // Delete one order - NO ALERT
  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter(
      (order) => order.id !== orderId
    );

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    setOrders(updatedOrders);
  };

  // Delete all orders - NO ALERT
  const deleteAllOrders = () => {
    localStorage.removeItem("orders");
    setOrders([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              My Orders
            </h1>

            <p className="mt-1 text-gray-500">
              View and manage your orders
            </p>
          </div>

          {orders.length > 0 && (
            <button
              onClick={deleteAllOrders}
              className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
            >
              <Trash2 size={18} />
              Delete All
            </button>
          )}
        </div>

        {/* EMPTY */}
        {orders.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
            <ShoppingBag
              size={60}
              className="mx-auto mb-4 text-gray-300"
            />

            <h2 className="text-xl font-bold text-gray-700">
              No Orders Yet
            </h2>

            <p className="mt-2 text-gray-500">
              Your order history will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                {/* ORDER HEADER */}
                <div className="flex flex-col justify-between gap-4 border-b pb-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm text-gray-400">
                      Order ID
                    </p>

                    <p className="font-bold text-gray-800">
                      #{order.id}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {order.date}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
                      {order.status}
                    </span>

                    {/* DELETE */}
                    <button
                      onClick={() => deleteOrder(order.id)}
                      className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 size={17} />
                      Delete
                    </button>
                  </div>
                </div>

                {/* CUSTOMER */}
                <div className="mt-5 grid gap-4 rounded-2xl bg-gray-50 p-4 md:grid-cols-3">
                  <div>
                    <p className="text-xs text-gray-400">
                      Customer
                    </p>

                    <p className="font-semibold text-gray-700">
                      {order.fullName}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Phone
                    </p>

                    <p className="font-semibold text-gray-700">
                      {order.phone}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Payment
                    </p>

                    <p className="font-semibold text-gray-700">
                      {order.paymentMethod}
                    </p>
                  </div>
                </div>

                {/* ITEMS */}
                <div className="mt-5 space-y-3">
                  {order.items?.map((item, index) => {
                    const quantity = item.quantity || 1;
                    const price = Number(item.price) || 0;

                    return (
                      <div
                        key={item.id || index}
                        className="flex items-center gap-4 rounded-2xl border border-gray-100 p-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded-xl object-cover"
                        />

                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">
                            {item.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            Qty: {quantity}
                          </p>
                        </div>

                        <p className="font-bold text-gray-800">
                          ${(price * quantity).toFixed(2)}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* TOTAL */}
                <div className="mt-5 flex justify-between border-t pt-5">
                  <span className="font-semibold text-gray-600">
                    Total
                  </span>

                  <span className="text-xl font-bold text-amber-600">
                    ${Number(order.totalPrice).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;

