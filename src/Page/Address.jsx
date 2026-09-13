import React, { useEffect, useState } from "react";
import {
  MapPin,
  Plus,
  Trash2,
  Edit3,
  Save,
  X,
} from "lucide-react";

const Address = () => {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    note: "",
  });

  useEffect(() => {
    const savedAddresses =
      JSON.parse(localStorage.getItem("addresses")) || [];

    setAddresses(savedAddresses);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveAddress = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.address) {
      return;
    }

    if (editingId) {
      const updated = addresses.map((item) =>
        item.id === editingId
          ? { ...item, ...form }
          : item
      );

      setAddresses(updated);
      localStorage.setItem(
        "addresses",
        JSON.stringify(updated)
      );
    } else {
      const newAddress = {
        id: Date.now(),
        ...form,
      };

      const updated = [...addresses, newAddress];

      setAddresses(updated);
      localStorage.setItem(
        "addresses",
        JSON.stringify(updated)
      );
    }

    resetForm();
  };

  const editAddress = (item) => {
    setForm({
      name: item.name || "",
      phone: item.phone || "",
      address: item.address || "",
      city: item.city || "",
      note: item.note || "",
    });

    setEditingId(item.id);
    setShowForm(true);
  };

  const deleteAddress = (id) => {
    const updated = addresses.filter(
      (item) => item.id !== id
    );

    setAddresses(updated);

    localStorage.setItem(
      "addresses",
      JSON.stringify(updated)
    );
  };

  const resetForm = () => {
    setForm({
      name: "",
      phone: "",
      address: "",
      city: "",
      note: "",
    });

    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              My Address
            </h1>

            <p className="mt-1 text-gray-500">
              Manage your delivery addresses
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            <Plus size={19} />
            Add Address
          </button>
        </div>

        {/* FORM */}
        {showForm && (
          <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                {editingId
                  ? "Edit Address"
                  : "Add New Address"}
              </h2>

              <button
                onClick={resetForm}
                className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={saveAddress}
              className="space-y-4"
            >

              {/* NAME + PHONE */}
              <div className="grid gap-4 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-amber-500"
                  />
                </div>

              </div>

              {/* ADDRESS */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Address
                </label>

                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="House number, street, village..."
                  rows="3"
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-amber-500"
                />
              </div>

              {/* CITY */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  City / Province
                </label>

                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Phnom Penh"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-amber-500"
                />
              </div>

              {/* NOTE */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Delivery Note
                </label>

                <input
                  type="text"
                  name="note"
                  value={form.note}
                  onChange={handleChange}
                  placeholder="Example: Near the market"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-amber-500"
                />
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 pt-2">

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600"
                >
                  <Save size={18} />

                  {editingId
                    ? "Update Address"
                    : "Save Address"}
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-xl border border-gray-200 px-5 py-3 font-semibold text-gray-600 transition hover:bg-gray-50"
                >
                  Cancel
                </button>

              </div>
            </form>
          </div>
        )}

        {/* ADDRESS LIST */}
        {addresses.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm">

            <MapPin
              size={60}
              className="mx-auto mb-4 text-gray-300"
            />

            <h2 className="text-xl font-bold text-gray-700">
              No Address Yet
            </h2>

            <p className="mt-2 text-gray-500">
              Add an address for your food delivery.
            </p>

          </div>
        ) : (
          <div className="space-y-4">

            {addresses.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                  {/* ADDRESS INFO */}
                  <div className="flex gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                      <MapPin size={23} />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-800">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.phone}
                      </p>

                      <p className="mt-3 text-gray-700">
                        {item.address}
                      </p>

                      {item.city && (
                        <p className="mt-1 text-sm text-gray-500">
                          {item.city}
                        </p>
                      )}

                      {item.note && (
                        <p className="mt-2 text-sm text-gray-400">
                          Note: {item.note}
                        </p>
                      )}
                    </div>

                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-2">

                    <button
                      onClick={() => editAddress(item)}
                      className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
                    >
                      <Edit3 size={16} />
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteAddress(item.id)
                      }
                      className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default Address;