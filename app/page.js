"use client";
import React, { useEffect, useState, useRef } from 'react';
import { products } from './products';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { Splash } from './Splash';

export default function Home() {
  const latestProducts = [
    {
      id: 1,
      name: 'Classic Sneaker',
      href: '#',
      brand: 'Nike',
      imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/j/f/1/9-23151-9-nobelite-white-original-imahyjmu9tgxzgz4.jpeg?q=70',
      imageAlt: 'Side view of Classic Sneaker.',
      price: '$ 75.00 USD',
      color: 'White',

    },
    {
      id: 2,
      name: 'Running Shoes',
      href: '#',
      brand: 'Nike',
      imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/m/n/q/-original-imagz5kfgwycthhz.jpeg?q=70",
      imageAlt: 'Top view of Running Shoes in blue.',
      price: '$ 90.00 USD',
      color: 'Blue',
    },
    {
      id: 3,
      name: 'High-top Sneakers',
      href: '#',
      brand: 'Nike',
      imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/g/d/8-tarzan-04-8-asian-white-navy-sky-original-imagtg5hbgykgnzc.jpeg?q=70',
      imageAlt: 'High-top Sneakers in red.',
      price: '$ 95.00 USD',
      color: 'Red',
    },
    {
      id: 4,
      name: 'Boots',
      href: '#',
      brand: 'Nike',
      imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/safety-shoe/5/z/2/9-metro-double-puncture-and-tear-resistant-steel-toe-anti-slip-original-imag33xgyf3xcgpr-bb.jpeg?q=70',
      imageAlt: 'Slip-on Shoes in grey.',
      price: '$ 55.00 USD',
      color: 'Grey',
    },
  ];
  const logoImage = {
    name: 'Company Logo',
    href: '#',
    imageSrc: 'https://media.istockphoto.com/id/1665714191/vector/shoes-shop.jpg?s=612x612&w=0&k=20&c=bFQXXwYhDyN0SQPgfWy8x_qIpIDRx7ckuojuh2MU1fI=',
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

  const [splash, setSplash] = useState(true);
  const shoeCircleRef = useRef(null);
  const shoeCircleRef2 = useRef(null);

  useEffect(() => {
    let rotation = 0;
    let animationFrameId;

    const rotateShoes = () => {
      rotation += 0.5;
      if (shoeCircleRef.current) {
        shoeCircleRef.current.style.transform = `rotate(${rotation}deg)`;
      }
      if (shoeCircleRef2.current) {
        shoeCircleRef2.current.style.transform = `rotate(${rotation}deg)`;
      }
      animationFrameId = requestAnimationFrame(rotateShoes);
    };

    rotateShoes();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      {splash ? (
        <Splash />
      ) : (
        <>
          <header className="bg-white shadow-md sticky top-0 z-50">
            <nav role="navigation" className="container mx-auto px-6 py-3 flex justify-between items-center">
              <img
                src={logoImage.imageSrc}
                alt={logoImage.imageAlt}
                className="w-1/12 h-1/2"
              />
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-600 hover:text-gray-800 relative group">
                  <span>Home</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link href="/ShoeList" className="text-gray-600 hover:text-gray-800 relative group">
                  <span>Products</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-800 relative group">
                  <span>About</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link href="/ContactUs" className="text-gray-600 hover:text-gray-800 relative group">
                  <span>Contact</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </div>
            </nav>
          </header>

          <main>
            <section className="container mx-auto px-6 py-16">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">Embrace Comfort with shoe - Online Ecommerce hop!</h1>
                  <p className="text-xl text-gray-600 mb-6">Step into a world of style and comfort with shoe, where every pair of shoes tells a story of craftsmanship and innovation. Explore our curated collection, where trends seamlessly merge with unparalleled ease.</p>
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
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <div className="flex justify-center items-center p-4 relative h-[300px] md:h-[500px] w-[300px] md:w-[500px] mx-auto">
                    {/* Center non-rotating image */}
                    <div className="absolute z-10">
                      <img
                        src="https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/65aeafaad7a03ebd79308259_monaal-garg-99NxpMVxWDA-unsplash.webp"
                        alt="Shoe 5"
                        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full shadow-lg"
                      />
                    </div>

                    {/* Rotating circle */}
                    <div className="absolute w-full h-full" ref={shoeCircleRef}>
                      <img
                        src="https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/m/l/2/-original-imagz5kftqzfpzyw.jpeg?q=90"
                        alt="Shoe 1"
                        className="absolute w-[100px] h-[100px] rounded-lg shadow-lg"
                        style={{ top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/65ef21ccf486a102b5b7a0f4_nikita-kachanovsky-ad_0wMHtvlU-unsplash.webp"
                        alt="Shoe 2"
                        className="absolute w-[100px] h-[100px] rounded-lg shadow-lg"
                        style={{ top: '15%', right: '15%', transform: 'translate(50%, -50%)' }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/65b689fa8b229077a07049bb_super-straho-5BMPrXBFTI8-unsplash.webp"
                        alt="Shoe 3"
                        className="absolute w-[100px] h-[100px] rounded-lg shadow-lg"
                        style={{ top: '50%', right: '0%', transform: 'translate(50%, -50%)' }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/65b68a700edca6f33a84285e_maxim-hopman-8cT5ja0P_N4-unsplash.webp"
                        alt="Shoe 4"
                        className="absolute w-[100px] h-[100px] rounded-lg shadow-lg"
                        style={{ bottom: '15%', right: '15%', transform: 'translate(50%, 50%)' }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/65e800b277212e6604702eb1_hermes-rivera-w83s82yd3Fk-unsplash.webp"
                        alt="Shoe 6"
                        className="absolute w-[100px] h-[100px] rounded-lg shadow-lg"
                        style={{ bottom: '0%', left: '50%', transform: 'translate(-50%, 50%)' }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/65b689fa3dc80ee41a3c6bf2_jakob-owens-JzJSybPFb3s-unsplash.webp"
                        alt="Shoe 7"
                        className="absolute w-[100px] h-[100px] rounded-lg shadow-lg"
                        style={{ bottom: '15%', left: '15%', transform: 'translate(-50%, 50%)' }}
                      />
                      <img
                        src="https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/p/y/0/-original-imagg5rfsacakzqz.jpeg?q=90"
                        alt="Shoe 8"
                        className="absolute w-[100px] h-[100px] rounded-lg shadow-lg"
                        style={{ top: '50%', left: '0%', transform: 'translate(-50%, -50%)' }}
                      />
                      <img
                        src="https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/7/w/r/-original-imahfxuxfpfmcpa3.jpeg?q=90"
                        alt="Shoe 9"
                        className="absolute w-[100px] h-[100px] rounded-lg shadow-lg"
                        style={{ top: '15%', left: '15%', transform: 'translate(-50%, -50%)' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">About shoe</h2>
                  <p className="text-gray-600 mb-6">
                    Discover the shoe story. We're passionate about creating footwear that not only
                    complements your style but also prioritizes comfort and quality.
                  </p>
                  <button className="bg-white text-blue-600 font-bold py-2 px-6 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
                    View Our Products
                  </button>
                </div>
              </div>
            </section>
            <section className="container mx-auto px-6 py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-2">Latest Shoes</h2>
                <p className="text-gray-600 mb-6">
                  Explore our latest shoe collection - blending fashion and functionality
                  for every step you take.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {latestProducts.map((product) => (
                    <div
                      key={product.name}
                      className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full"
                    >
                      <div className="relative h-64 w-full">
                        <img
                          src={product.imageSrc}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        {product.sale && (
                          <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded">
                            Sale
                          </span>
                        )}
                      </div>
                      <div className="px-5 pt-4 pb-4 flex flex-col flex-grow">
                        <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                        <p className="text-blue-600 text-sm mb-2 text-right">{product.price}</p>
                        <a href={`/ShoeList/${product.id}`}>
                          <button
                            className="bg-blue-600 cursor-pointer text-white px-4 py-2 mt-auto rounded-md transition duration-150 hover:bg-blue-700"
                          >
                            View Product
                          </button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="container mx-auto px-6 py-16">
              <div className="bg-gradient-to-r from-blue-600 to-blue-200 rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between p-8">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <h3 className="text-white text-sm font-semibold mb-2">JOIN OUR NEWSLETTER</h3>
                    <h2 className="text-white text-3xl font-bold mb-4">Get Discount up<br />to 50% off!</h2>
                    <form className="w-full max-w-sm">
                      <div className="flex items-center border-b border-white py-2">
                        <input
                          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="email"
                          placeholder="Enter your email here"
                          aria-label="Email address"
                        />
                      </div>
                      <button
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mt-4 rounded w-full"
                        type="button"
                      >
                        SUBSCRIBE
                      </button>
                    </form>
                  </div>
                  <div className="md:w-1/2 flex justify-end">
                    <img
                      src="https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/65eefc2b486f9d174620d468_1616_prev_ui.webp"
                      alt="Shoe"
                      className="w-64 h-auto transform -rotate-12"
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-1">
                  <img src={logoImage.imageSrc}
                    alt="ShoeStore"
                    className="h-1/2 w-full mb-4" />
                  <p className="text-gray-500 text-sm">
                    shoe is committed to empowering businesses and individuals with innovative solutions to drive success.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-700 font-semibold mb-4">Links</h3>
                  <ul className="text-gray-500">
                    <li className="mb-2"><a href="#" className="hover:text-gray-900">Home</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-900">About</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-gray-700 font-semibold mb-4">Pages</h3>
                  <ul className="text-gray-500">
                    <li className="mb-2"><a href="#" className="hover:text-gray-900">Products</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-900">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-gray-700 font-semibold mb-4">Contact Us</h3>
                  <ul className="text-gray-500">
                    <li className="flex items-center mb-2">
                      <svg className="h-5 w-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      55 East Birchwood Ave. Brooklyn, New York 11201
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="h-5 w-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      (603) 555-0123
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      example@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 mt-8 pt-8">
              <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
                <div className="text-sm text-gray-600">
                  &copy; 2024 ShoeStore. All rights reserved.
                </div>
                <div className="flex mt-4 md:m-0">
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 mr-4">Licensing</a>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
