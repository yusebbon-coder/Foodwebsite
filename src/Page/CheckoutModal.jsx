import React, { useState } from "react";
import {
  X,
  User,
  Phone,
  MapPin,
  FileText,
  CreditCard,
  CheckCircle,
  ShoppingBag,
  QrCode,
  ArrowLeft,
} from "lucide-react";

import { useCart } from "../components/CartContext";

const CheckoutModal = ({
  isOpen,
  onClose,
  cart = [],
  totalPrice = 0,
}) => {
  const { clearCart } = useCart();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery");

  const [showQR, setShowQR] = useState(false);
  const [success, setSuccess] = useState(false);

  const deliveryFee = 1;
  const subtotal = Number(totalPrice) || 0;
  const grandTotal = subtotal + deliveryFee;

  // =========================
  // CLOSE MODAL
  // =========================
  const handleClose = () => {
    if (success) {
      handleDone();
      return;
    }

    onClose();
  };

  // =========================
  // VALIDATE FORM
  // =========================
  const validateForm = () => {
    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return false;
    }

    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return false;
    }

    if (!address.trim()) {
      alert("Please enter your delivery address.");
      return false;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return false;
    }

    return true;
  };

  // =========================
  // SAVE ORDER
  // =========================
  const saveOrder = () => {
    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cart,
      totalPrice: grandTotal,
      subtotal: subtotal,
      deliveryFee: deliveryFee,
      fullName,
      phone,
      address,
      note,
      paymentMethod,
      status: "Confirmed",
      date: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...oldOrders, newOrder])
    );

    // Clear Cart
    clearCart();

    // Extra safety
    localStorage.removeItem("cart");

    setSuccess(true);
  };

  // =========================
  // CASH / CARD PAYMENT
  // =========================
  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    if (paymentMethod === "ABA Pay") {
      setShowQR(true);
      return;
    }

    saveOrder();
  };

  // =========================
  // CONFIRM ABA PAYMENT
  // =========================
  const handleConfirmABAPayment = () => {
    setShowQR(false);

    // Save order after QR payment
    saveOrder();
  };

  // =========================
  // DONE
  // =========================
  const handleDone = () => {
    setSuccess(false);
    setShowQR(false);

    setFullName("");
    setPhone("");
    setAddress("");
    setNote("");
    setPaymentMethod("Cash on Delivery");

    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* =====================================================
          CHECKOUT MODAL
      ====================================================== */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

        <div className="relative flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">

          {/* =================================================
              HEADER
          ================================================== */}
          <div className="flex items-center justify-between border-b px-6 py-5">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                CHECKOUT
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Complete your order
              </p>
            </div>

            <button
              onClick={handleClose}
              className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
            >
              <X size={24} />
            </button>
          </div>

          {/* =================================================
              CONTENT
          ================================================== */}
          <div className="grid flex-1 overflow-y-auto lg:grid-cols-3">

            {/* =================================================
                LEFT SIDE
            ================================================== */}
            <div className="space-y-7 p-6 lg:col-span-2">

              {/* DELIVERY INFORMATION */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-600">
                    01
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Delivery Information
                    </h3>

                    <p className="text-sm text-gray-500">
                      Where should we deliver your food?
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">

                  {/* NAME */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Full Name
                    </label>

                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) =>
                          setFullName(e.target.value)
                        }
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value)
                        }
                        placeholder="+855 XX XXX XXX"
                        className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      />
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Delivery Address
                    </label>

                    <div className="relative">
                      <MapPin
                        size={18}
                        className="absolute left-3 top-4 text-gray-400"
                      />

                      <textarea
                        rows="3"
                        value={address}
                        onChange={(e) =>
                          setAddress(e.target.value)
                        }
                        placeholder="Enter your delivery address"
                        className="w-full resize-none rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      />
                    </div>
                  </div>

                  {/* NOTE */}
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Note
                    </label>

                    <div className="relative">
                      <FileText
                        size={18}
                        className="absolute left-3 top-4 text-gray-400"
                      />

                      <textarea
                        rows="2"
                        value={note}
                        onChange={(e) =>
                          setNote(e.target.value)
                        }
                        placeholder="Example: Please call me when you arrive..."
                        className="w-full resize-none rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  PAYMENT
              ================================================== */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-600">
                    02
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Payment Method
                    </h3>

                    <p className="text-sm text-gray-500">
                      Choose your payment method
                    </p>
                  </div>
                </div>

                <div className="space-y-3">

                  {/* CASH */}
                  <button
                    type="button"
                    onClick={() =>
                      setPaymentMethod("Cash on Delivery")
                    }
                    className={`w-full rounded-2xl border-2 p-4 text-left transition ${paymentMethod === "Cash on Delivery"
                        ? "border-amber-500 bg-amber-50"
                        : "border-gray-200 hover:border-gray-300"
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                        <ShoppingBag size={21} />
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">
                          Cash on Delivery
                        </p>

                        <p className="text-sm text-gray-500">
                          Pay when your food arrives
                        </p>
                      </div>

                      {paymentMethod ===
                        "Cash on Delivery" && (
                          <CheckCircle
                            className="text-amber-500"
                            size={22}
                          />
                        )}
                    </div>
                  </button>

                  {/* ABA PAY */}
                  <button
                    type="button"
                    onClick={() => {
                      setPaymentMethod("ABA Pay");
                    }}
                    className={`w-full rounded-2xl border-2 p-4 text-left transition ${paymentMethod === "ABA Pay"
                        ? "border-amber-500 bg-amber-50"
                        : "border-gray-200 hover:border-gray-300"
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                        <QrCode size={21} />
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">
                          ABA Pay
                        </p>

                        <p className="text-sm text-gray-500">
                          Scan QR code to pay
                        </p>
                      </div>

                      {paymentMethod === "ABA Pay" && (
                        <CheckCircle
                          className="text-amber-500"
                          size={22}
                        />
                      )}
                    </div>
                  </button>

                  {/* CREDIT CARD */}
                  <button
                    type="button"
                    onClick={() =>
                      setPaymentMethod("Credit Card")
                    }
                    className={`w-full rounded-2xl border-2 p-4 text-left transition ${paymentMethod === "Credit Card"
                        ? "border-amber-500 bg-amber-50"
                        : "border-gray-200 hover:border-gray-300"
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                        <CreditCard size={21} />
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">
                          Credit Card
                        </p>

                        <p className="text-sm text-gray-500">
                          Pay with your card
                        </p>
                      </div>

                      {paymentMethod === "Credit Card" && (
                        <CheckCircle
                          className="text-amber-500"
                          size={22}
                        />
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE - ORDER SUMMARY
            ================================================== */}
            <div className="border-t bg-gray-50 p-6 lg:border-l lg:border-t-0">

              <h3 className="mb-5 text-lg font-bold text-gray-800">
                ORDER SUMMARY
              </h3>

              {/* ITEMS */}
              <div className="max-h-72 space-y-4 overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="py-10 text-center text-gray-500">
                    <ShoppingBag
                      size={40}
                      className="mx-auto mb-3 opacity-40"
                    />

                    <p>Your cart is empty.</p>
                  </div>
                ) : (
                  cart.map((item, index) => {
                    const quantity = item.quantity || 1;

                    const itemPrice =
                      Number(item.price) || 0;

                    const itemTotal =
                      itemPrice * quantity;

                    return (
                      <div
                        key={item.id || index}
                        className="flex gap-3 rounded-xl bg-white p-3"
                      >
                        {/* IMAGE */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded-lg object-cover"
                        />

                        {/* INFO */}
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-semibold text-gray-800">
                            {item.name}
                          </p>

                          <p className="mt-1 text-sm text-gray-500">
                            Qty: {quantity}
                          </p>
                        </div>

                        {/* PRICE */}
                        <p className="font-semibold text-gray-800">
                          ${itemTotal.toFixed(2)}
                        </p>
                      </div>
                    );
                  })
                )}
              </div>

              {/* TOTAL */}
              <div className="mt-6 space-y-3 border-t pt-5">

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>

                <div className="flex justify-between border-t pt-4 text-lg font-bold text-gray-800">
                  <span>Total</span>

                  <span className="text-amber-600">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* PAYMENT BUTTON */}
              <button
                onClick={handlePlaceOrder}
                disabled={cart.length === 0}
                className="mt-6 w-full rounded-xl bg-amber-500 py-4 font-bold text-white shadow-lg shadow-amber-500/20 transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none"
              >
                {paymentMethod === "ABA Pay"
                  ? "Continue to ABA Pay"
                  : "Place Order"}
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                Your order information is securely stored.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ABA QR MODAL
      ====================================================== */}
      {showQR && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

          <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">

            {/* CLOSE */}
            <button
              onClick={() => setShowQR(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
            >
              <X size={22} />
            </button>

            {/* HEADER */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <QrCode size={30} />
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                ABA Payment
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Scan the QR code to complete your payment
              </p>
            </div>

            {/* QR IMAGE */}
            <div className="mx-auto mt-6 flex w-fit rounded-2xl border-2 border-gray-100 bg-white p-4 shadow-sm">
              <img
                src="./image/ABA.jpg"
                alt="ABA"
                className="h-64 w-64 object-contain"
              />
            </div>

            {/* AMOUNT */}
            <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-center">
              <p className="text-sm text-gray-500">
                Amount to Pay
              </p>

              <p className="mt-1 text-3xl font-bold text-amber-600">
                ${grandTotal.toFixed(2)}
              </p>
            </div>

            {/* ACCOUNT */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                ABA Pay
              </p>

              <p className="font-semibold text-gray-800">
                FOOD STORE
              </p>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-3">

              <button
                onClick={() => setShowQR(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                <ArrowLeft size={18} />
                Back
              </button>

              <button
                onClick={handleConfirmABAPayment}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 font-semibold text-white transition hover:bg-amber-600"
              >
                <CheckCircle size={18} />
                Confirm Payment
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-gray-400">
              After payment, click "Confirm Payment".
            </p>
          </div>
        </div>
      )}

      {/* =====================================================
          SUCCESS MODAL
      ====================================================== */}
      {success && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle
                size={48}
                className="text-green-500"
              />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-gray-800">
              Order Successful!
            </h2>

            <p className="mt-3 text-gray-500">
              Thank you for your order.
              <br />
              Your food is being prepared.
            </p>

            <div className="mt-6 rounded-2xl bg-gray-50 p-4">
              <div className="flex justify-between text-gray-600">
                <span>Payment</span>
                <span className="font-semibold text-gray-800">
                  {paymentMethod}
                </span>
              </div>

              <div className="mt-3 flex justify-between">
                <span className="font-medium text-gray-600">
                  Total
                </span>

                <span className="text-xl font-bold text-amber-600">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={handleDone}
              className="mt-6 w-full rounded-xl bg-amber-500 py-3 font-bold text-white transition hover:bg-amber-600"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutModal;