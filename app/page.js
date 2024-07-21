"use client";
import React, { useState } from 'react';
import { products } from './products';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Home() {
  const logoImage = {
    name: 'Company Logo',
    href: '#',
    imageSrc: 'https://static.vecteezy.com/system/resources/previews/010/994/236/large_2x/nike-logo-white-with-name-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg',
    imageAlt: 'Company logo.',
  };
  const [searchQuery, setSearchQuery] = useState('');
  const slides = [
    'https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/6634e3fc68f6e5864f36163d_freepik-export-20240501185623I1X8.webp',
    'https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/6634e3fc68f6e5864f36163d_freepik-export-20240501185623I1X8.webp',
    'https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/6634e3fc68f6e5864f36163d_freepik-export-20240501185623I1X8.webp',
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href={logoImage.href} className="flex items-center space-x-2">
            <img
              src={logoImage.imageSrc}
              alt={logoImage.imageAlt}
              className="w-14 h-auto"
            />
          </a>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </div>
        </nav>
        <div className="container mx-auto px-6 py-3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <main>
        <section className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Embrace Comfort with ShoeZ - Online Ecommerce hop!</h1>
              <p className="text-xl text-gray-600 mb-6">Step into a world of style and comfort with ShoeZ, where every pair of shoes tells a story of craftsmanship and innovation. Explore our curated collection, where trends seamlessly merge with unparalleled ease.</p>
              <button className="bg-blue-600 text-white font-bold py-2 px-6 border-2 border-blue-600 hover:bg-white hover:text-blue-600 hover:border-blue-600 transition duration-300">
                Learn About Us
              </button>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 relative">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                className="w-3/4 mx-auto"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index} className="relative">
                    <img
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-6 py-16">
  {/* Service Highlights */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
    <div className="flex items-center space-x-4">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      <div>
        <h3 className="font-bold">Free Delivery</h3>
        <p className="text-sm text-gray-600">Free shipping on all order</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      <div>
        <h3 className="font-bold">ONLINE SUPPORT 24/7</h3>
        <p className="text-sm text-gray-600">Support online 24 hours a day</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
      <div>
        <h3 className="font-bold">MONEY RETURN</h3>
        <p className="text-sm text-gray-600">Support online 24 hours a day</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
      <div>
        <h3 className="font-bold">SECURE PAYMENT</h3>
        <p className="text-sm text-gray-600">Support online 24 hours a day</p>
      </div>
    </div>
  </div>
  <div>
  <div>
  <img src="" alt="Shoe 1" className="rounded-lg" />
    </div>
    <div className="w-full md:w-1/2 md:pl-16 mt-8 md:mt-0">
      <h2 className="text-4xl font-bold mb-4">About ShoeZ</h2>
      <p className="text-gray-600 mb-6">
        Discover the ShoeZ story. We're passionate about creating footwear that not only
        complements your style but also prioritizes comfort and quality.
      </p>
      <button className="bg-white text-blue-600 font-bold py-2 px-6 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
        View Our Products
      </button>
    </div>
  </div>
</section>
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.price} - {product.color}</p>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 ShoeStore. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
              <a href="#" className="hover:text-gray-300">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}