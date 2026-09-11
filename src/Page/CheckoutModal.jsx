import React, { useState } from "react";
import {
  X,
  User,
  Phone,
  MapPin,
  CreditCard,
  Banknote,
  ShoppingBag,
  CheckCircle,
  QrCode,
  ShieldCheck,
  Copy,
  Check,
} from "lucide-react";

const CheckoutModal = ({
  isOpen,
  onClose,
  cart = [],
  totalPrice = 0,
}) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery");
  const [note, setNote] = useState("");

  const [showQR, setShowQR] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const deliveryFee = 1;
  const total = totalPrice + deliveryFee;

  // =========================
  // VALIDATE INFORMATION
  // =========================
  const validateDelivery = () => {
    if (!fullName.trim() || !phone.trim() || !address.trim()) {
      alert("Please fill in all delivery information.");
      return false;
    }

    return true;
  };

  // =========================
  // PAYMENT BUTTON
  // =========================
  const handlePayment = (e) => {
    e.preventDefault();

    if (!validateDelivery()) return;

    // ABA → Show QR
    if (paymentMethod === "ABA Pay") {
      setShowQR(true);
      return;
    }

    // Other payment methods
    handlePlaceOrder();
  };

  // =========================
  // PLACE ORDER
  // =========================
  const handlePlaceOrder = () => {
    const order = {
      id: Date.now(),

      customer: {
        fullName,
        phone,
        address,
        note,
      },

      paymentMethod,

      items: cart,

      subtotal: totalPrice,

      deliveryFee,

      total,

      status: "Confirmed",

      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "lastOrder",
      JSON.stringify(order)
    );

    setShowQR(false);
    setOrderSuccess(true);
  };

  // =========================
  // COPY ABA ACCOUNT
  // =========================
  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(
        "000 000 000"
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  if (!isOpen) return null;

  // =====================================================
  // SUCCESS MODAL
  // =====================================================
  if (orderSuccess) {
    return (
      <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle
              size={48}
              className="text-green-600"
            />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            Order Successful!
          </h2>

          <p className="mt-2 text-gray-500">
            Thank you for your order.
            <br />
            Your food is being prepared.
          </p>

          <div className="mt-5 rounded-2xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              Total Paid
            </p>

            <p className="mt-1 text-2xl font-bold text-amber-600">
              ${total.toFixed(2)}
            </p>
          </div>

          <button
            onClick={() => {
              setOrderSuccess(false);
              onClose();
            }}
            className="mt-6 w-full rounded-xl bg-amber-600 py-3.5 font-bold text-white transition hover:bg-amber-700"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* =====================================================
          CHECKOUT MODAL
      ===================================================== */}
      <div className="fixed inset-0 z-[200] overflow-y-auto bg-black/50 p-4 backdrop-blur-sm">

        <div className="mx-auto my-6 w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">

          {/* ================= HEADER ================= */}
          <div className="flex items-center justify-between border-b px-6 py-5 sm:px-8">

            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">
                CHECKOUT
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Complete your order
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 transition hover:bg-gray-100"
            >
              <X size={24} />
            </button>
          </div>

          {/* ================= CONTENT ================= */}
          <form onSubmit={handlePayment}>

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* =================================================
                  LEFT
              ================================================= */}
              <div className="p-6 sm:p-8 lg:border-r">

                {/* STEP 01 */}
                <div className="mb-8">

                  <div className="mb-5 flex items-center gap-3">

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                      01
                    </span>

                    <h2 className="text-xl font-bold">
                      Delivery Information
                    </h2>

                  </div>

                  {/* FULL NAME */}
                  <div className="mb-5">

                    <label className="mb-2 block text-sm font-semibold">
                      Full Name
                    </label>

                    <div className="relative">

                      <User
                        size={19}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) =>
                          setFullName(e.target.value)
                        }
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      />

                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="mb-5">

                    <label className="mb-2 block text-sm font-semibold">
                      Phone Number
                    </label>

                    <div className="relative">

                      <Phone
                        size={19}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value)
                        }
                        placeholder="Enter your phone number"
                        className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      />

                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div className="mb-5">

                    <label className="mb-2 block text-sm font-semibold">
                      Delivery Address
                    </label>

                    <div className="relative">

                      <MapPin
                        size={19}
                        className="absolute left-3 top-3 text-gray-400"
                      />

                      <textarea
                        value={address}
                        onChange={(e) =>
                          setAddress(e.target.value)
                        }
                        placeholder="Enter your delivery address"
                        rows="3"
                        className="w-full resize-none rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      />

                    </div>
                  </div>

                  {/* NOTE */}
                  <div>

                    <label className="mb-2 block text-sm font-semibold">

                      Note

                      <span className="ml-1 font-normal text-gray-400">
                        (Optional)
                      </span>

                    </label>

                    <textarea
                      value={note}
                      onChange={(e) =>
                        setNote(e.target.value)
                      }
                      placeholder="Example: Please leave at the door"
                      rows="2"
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />

                  </div>

                </div>

                {/* =================================================
                    STEP 02 PAYMENT
                ================================================= */}

                <div>

                  <div className="mb-5 flex items-center gap-3">

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                      02
                    </span>

                    <h2 className="text-xl font-bold">
                      Payment Method
                    </h2>

                  </div>

                  <div className="space-y-3">

                    {/* CASH */}
                    <label
                      className={`flex cursor - pointer items - center gap - 3 rounded - xl border p - 4 transition ${
    paymentMethod === "Cash on Delivery"
        ? "border-amber-500 bg-amber-50"
        : "border-gray-200 hover:bg-gray-50"
} `}
                    >

                      <input
                        type="radio"
                        name="payment"
                        value="Cash on Delivery"
                        checked={
                          paymentMethod ===
                          "Cash on Delivery"
                        }
                        onChange={(e) =>
                          setPaymentMethod(e.target.value)
                        }
                        className="h-4 w-4 accent-amber-600"
                      />

                      <Banknote
                        size={21}
                        className="text-green-600"
                      />

                      <span className="font-medium">
                        Cash on Delivery
                      </span>

                    </label>

                    {/* ABA */}
                    <label
                      className={`flex cursor - pointer items - center gap - 3 rounded - xl border p - 4 transition ${
    paymentMethod === "ABA Pay"
        ? "border-blue-500 bg-blue-50"
        : "border-gray-200 hover:bg-gray-50"
} `}
                    >

                      <input
                        type="radio"
                        name="payment"
                        value="ABA Pay"
                        checked={
                          paymentMethod === "ABA Pay"
                        }
                        onChange={(e) =>
                          setPaymentMethod(e.target.value)
                        }
                        className="h-4 w-4 accent-blue-600"
                      />

                      <CreditCard
                        size={21}
                        className="text-blue-600"
                      />

                      <span className="font-medium">
                        ABA Pay
                      </span>

                    </label>

                    {/* CREDIT CARD */}
                    <label
                      className={`flex cursor - pointer items - center gap - 3 rounded - xl border p - 4 transition ${
    paymentMethod === "Credit Card"
        ? "border-purple-500 bg-purple-50"
        : "border-gray-200 hover:bg-gray-50"
} `}
                    >

                      <input
                        type="radio"
                        name="payment"
                        value="Credit Card"
                        checked={
                          paymentMethod === "Credit Card"
                        }
                        onChange={(e) =>
                          setPaymentMethod(e.target.value)
                        }
                        className="h-4 w-4 accent-purple-600"
                      />

                      <CreditCard
                        size={21}
                        className="text-purple-600"
                      />

                      <span className="font-medium">
                        Credit Card
                      </span>

                    </label>

                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT - ORDER SUMMARY
              ================================================= */}

              <div className="bg-gray-50 p-6 sm:p-8">

                <div className="mb-6 flex items-center gap-3">

                  <ShoppingBag size={23} />

                  <h2 className="text-xl font-bold">
                    ORDER SUMMARY
                  </h2>

                </div>

                {/* CART ITEMS */}
                <div className="space-y-4">

                  {cart.length === 0 ? (
                    <p className="py-8 text-center text-gray-400">
                      Your cart is empty.
                    </p>
                  ) : (
                    cart.map((item) => (

                      <div
                        key={item.id}
                        className="flex gap-3 rounded-xl bg-white p-3"
                      >

                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">

                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-contain"
                          />

                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex justify-between gap-2">

                            <h3 className="truncate font-bold">
                              {item.name}
                            </h3>

                            <span className="font-bold">
                              $
                              {(
                                Number(item.price) *
                                item.quantity
                              ).toFixed(2)}
                            </span>

                          </div>

                          <p className="mt-1 text-sm text-gray-500">
                            Qty: {item.quantity}
                          </p>

                          <p className="text-sm text-gray-400">
                            $
                            {Number(item.price).toFixed(2)}
                            {" "}each
                          </p>

                        </div>

                      </div>

                    ))
                  )}

                </div>

                <div className="my-6 border-t border-gray-200" />

                {/* SUBTOTAL */}
                <div className="mb-3 flex justify-between">

                  <span className="text-gray-600">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    ${totalPrice.toFixed(2)}
                  </span>

                </div>

                {/* DELIVERY */}
                <div className="mb-4 flex justify-between">

                  <span className="text-gray-600">
                    Delivery Fee
                  </span>

                  <span className="font-semibold">
                    ${deliveryFee.toFixed(2)}
                  </span>

                </div>

                <div className="border-t border-gray-300" />

                {/* TOTAL */}
                <div className="mt-4 flex items-center justify-between">

                  <span className="text-lg font-bold">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-amber-600">
                    ${total.toFixed(2)}
                  </span>

                </div>

                {/* PAYMENT BUTTON */}
                <button
                  type="submit"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-amber-700 hover:shadow-xl"
                >

                  {paymentMethod === "ABA Pay" ? (
                    <>
                      <QrCode size={21} />
                      Pay with ABA
                    </>
                  ) : (
                    "Payment"
                  )}

                </button>

                <p className="mt-3 text-center text-xs text-gray-400">
                  By placing your order, you agree to our
                  terms and conditions.
                </p>

              </div>

            </div>

          </form>

        </div>
      </div>

      {/* ==========================================================
          ABA QR PAYMENT MODAL
      ========================================================== */}

      {showQR && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">

          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">

            {/* HEADER */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-6 text-white">

              <button
                type="button"
                onClick={() => setShowQR(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <X size={22} />
              </button>

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <QrCode size={28} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    ABA Payment
                  </h2>

                  <p className="text-sm text-blue-100">
                    Scan to complete payment
                  </p>
                </div>

              </div>

            </div>

            {/* BODY */}
            <div className="p-6">

              {/* AMOUNT */}
              <div className="mb-5 rounded-2xl bg-gray-50 p-4 text-center">

                <p className="text-sm text-gray-500">
                  Amount to Pay
                </p>

                <p className="mt-1 text-3xl font-bold text-gray-900">
                  ${total.toFixed(2)}
                </p>

              </div>

              {/* QR */}
              <div className="flex justify-center">

                <div className="rounded-3xl border-4 border-gray-100 bg-white p-5 shadow-sm">

                  {/* DEMO QR */}
                  <div className="flex h-56 w-56 items-center justify-center rounded-xl bg-black">

                    {/* <QrCode
                      size={190}
                      strokeWidth={1.2}
                      className="text-white"
                    /> */}
                     <img src="image/ABA.jpg" alt="ABA" />
                  </div>

                </div>

              </div>

              {/* ACCOUNT */}
              <div className="mt-5 rounded-2xl border border-gray-200 p-4">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs text-gray-400">
                      ABA Account
                    </p>

                    <p className="mt-1 font-bold">
                      FOOD STORE
                    </p>

                    <p className="text-sm text-gray-500">
                      000 000 000
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={copyAccount}
                    className="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2 text-sm font-semibold transition hover:bg-gray-200"
                  >

                    {copied ? (
                      <>
                        <Check
                          size={16}
                          className="text-green-600"
                        />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Copy
                      </>
                    )}

                  </button>

                </div>

              </div>

              {/* SECURITY */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">

                <ShieldCheck
                  size={16}
                  className="text-green-500"
                />

                Secure payment with ABA
              </div>

              {/* BUTTONS */}
              <div className="mt-6 space-y-3">

                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white transition hover:bg-blue-700"
                >

                  <CheckCircle size={20} />

                  I Have Paid
                </button>

                <button
                  type="button"
                  onClick={() => setShowQR(false)}
                  className="w-full rounded-xl border border-gray-200 py-3.5 font-semibold text-gray-600 transition hover:bg-gray-50"
                >
                  Cancel Payment
                </button>

              </div>

              <p className="mt-4 text-center text-[11px] leading-5 text-gray-400">
                This is a demo payment screen.
                <br />
                Connect a real ABA payment API for production.
              </p>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutModal;

