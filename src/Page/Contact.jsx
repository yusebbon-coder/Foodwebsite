import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
const Contact = () => {
  return (
    <section className="bg-stone-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-green-500 font-semibold uppercase tracking-widest">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Get In Touch
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Have a question or want to order delicious Khmer food?
            We would love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-gray-500 shadow-2xl text-white rounded-3xl p-8 md:p-10">
            <h3 className="text-3xl font-bold">
              Contact Information
            </h3>
            <p className="text-amber-100 mt-4 leading-7">
              Feel free to contact us for food orders, questions,
              or any information about our Khmer dishes.
            </p>
            <div className="space-y-6 mt-10">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Our Location
                  </h4>
                  <p className="text-amber-100 mt-1">
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Phone
                  </h4>
                  <p className="text-amber-100 mt-1">
                    +855 12 345 678
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Email
                  </h4>
                  <p className="text-amber-100 mt-1">
                    foodstore@foodstore.com
                  </p>
                </div>
  </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Clock size={24} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Opening Hours
                  </h4>
                  <p className="text-amber-100 mt-1">
                    Mon - Sun: 7:00 AM -  10:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
            <h3 className="text-3xl font-bold text-gray-900">
              Send Us a Message
            </h3>
            <form className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 rounded-xl
                             px-4 py-3 outline-none
                             focus:ring-2 focus:bg-green-300
                             focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-xl
                             px-4 py-3 outline-none
                             focus:ring-2 focus:ring-amber-500
                             focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full border border-gray-200 rounded-xl
                             px-4 py-3 outline-none
                             focus:ring-2 focus:ring-amber-500
                             focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-200 rounded-xl
                             px-4 py-3 outline-none resize-none
                             focus:ring-2 focus:ring-amber-500
                             focus:border-transparent transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2
                           bg-blue-600 text-white
                           py-3.5 rounded-xl font-semibold
                           hover:bg-blue-700
                           transition duration-300"
              >
                Send Message
                <Send size={19} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;