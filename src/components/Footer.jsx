import React from 'react'

const Footer = () => {
  return (
    <>
          <footer className="bg-stone-950 text-white">
              <div className="max-w-7xl mx-auto px-6 py-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                      <div>
                          <h2 className="text-2xl font-bold">
                              FOOD<span className="">Store</span>
                          </h2>

                          <p className="mt-4 text-gray-400 leading-7">
                              Taste the authentic flavors of Cambodia.
                              Fresh ingredients, traditional recipes,
                              and unforgettable Khmer food.
                          </p>
                          <div className="flex gap-3 mt-5">
                          </div>
                      </div>
                      <div>
                          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                          <ul className="space-y-3 text-gray-400">
                              <li>Home</li>
                              <li>About Us</li>
                              <li>Food</li>
                              <li>Contact</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="font-semibold text-lg mb-4">Popular Food</h3>
                          <ul className="space-y-3 text-gray-400">
                              <li>Fish Amok</li>
                              <li>Beef Lok Lak</li>
                              <li>Nom Banh Chok</li>
                              <li>Kuy Teav</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                          <ul className="space-y-4 text-gray-400">
                              <li>📍 Phnom Penh, Cambodia</li>
                              <li>📞 +855 12 345 678</li>
                              <li>✉️ foodstore@foodstore.com</li>
                              <li>🕐 8:00 AM - 9:00 PM</li>
                          </ul>
                      </div>
                  </div>
                  <div className="border-t border-white/10 mt-10 pt-6
                    flex flex-col md:flex-row
                    justify-between gap-4
                    text-sm text-gray-500">
                      <p>© 2026 Food store. All rights reserved.</p>
                      <div className="flex gap-5">
                          <span>Privacy Policy</span>
                          <span>Terms & Conditions</span>
                      </div>
                  </div>
              </div>
          </footer>
    </>
  )
}
export default Footer
