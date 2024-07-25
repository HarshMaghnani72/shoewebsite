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
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { CgProfile } from 'react-icons/cg';
import { HiMenu } from "react-icons/hi";
import { Footer } from './Footer';
import { usePathname } from 'next/navigation';
const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const latestProducts = [
    {
      id: 1,
      name: 'Classic Sneaker',
      href: '#',
      brand: 'Nike',
      imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/j/f/1/9-23151-9-nobelite-white-original-imahyjmu9tgxzgz4.jpeg?q=70',
      imageAlt: 'Side view of Classic Sneaker.',
      price: '$75 USD',
      color: 'White',
    },
    {
      id: 2,
      name: 'Running Shoes',
      href: '#',
      brand: 'Nike',
      imageSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/m/n/q/-original-imagz5kfgwycthhz.jpeg?q=70",
      imageAlt: 'Top view of Running Shoes in blue.',
      price: '$90 USD',
      color: 'Blue',
    },
    {
      id: 3,
      name: 'High-top Sneakers',
      href: '#',
      brand: 'Nike',
      imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/g/d/8-tarzan-04-8-asian-white-navy-sky-original-imagtg5hbgykgnzc.jpeg?q=70',
      imageAlt: 'High-top Sneakers in red.',
      price: '$95 USD',
      color: 'Red',
    },
    {
      id: 4,
      name: 'Boots',
      href: '#',
      brand: 'Nike',
      imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/safety-shoe/5/z/2/9-metro-double-puncture-and-tear-resistant-steel-toe-anti-slip-original-imag33xgyf3xcgpr-bb.jpeg?q=70',
      imageAlt: 'Slip-on Shoes in grey.',
      price: '$55 USD',
      color: 'Grey',
    },
  ];

  const logoImage = {
    name: 'Company Logo',
    href: '#',
    imageSrc: 'https://media.istockphoto.com/id/1665714191/vector/shoes-shop.jpg?s=612x612&w=0&k=20&c=bFQXXwYhDyN0SQPgfWy8x_qIpIDRx7ckuojuh2MU1fI=',
    imageAlt: 'Company logo.',
  };

  const slides = [
    'https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/6634e3fc68f6e5864f36163d_freepik-export-20240501185623I1X8.webp',
    'https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/6634e3fc68f6e5864f36163d_freepik-export-20240501185623I1X8.webp',
    'https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/6634e3fc68f6e5864f36163d_freepik-export-20240501185623I1X8.webp',
  ];

  const [splash, setSplash] = useState(true);
  const shoeCircleRef = useRef(null);
  const shoeCircleRef2 = useRef(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};
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
  }, []);
  const NavLink = ({ href, children }) => {
    const isActive = pathname === href;
    return (
        <Link href={href} className={`block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4 relative group ${isActive ? 'text-gray-800' : ''}`}>
            {children}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
        </Link>
    );
};
  return (
    <div className="min-h-screen bg-gray-100">
      {splash ? (
        <Splash />
      ) : (
        <>
<header className="bg-white shadow-md sticky top-0 z-50">
            <nav role="navigation" className="container mx-auto px-4 sm:px-6 py-3">            
                <div className="flex items-center justify-between flex-wrap">
                    <div className="flex items-center flex-shrink-0 mr-6">
                        <img
                            src={logoImage.imageSrc}
                            alt={logoImage.imageAlt}
                            className="w-16 sm:w-24 h-auto"
                        />
                    </div>
                   
                    <div className="block lg:hidden">
                        <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-gray-700 hover:border-gray-700">
                            <HiMenu size={24} />
                        </button>
                    </div>
                   
                    <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <div className="text-sm lg:flex-grow mt-4 lg:mt-0">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/ShoeList">Products</NavLink>
                            <NavLink href="/About">About</NavLink>
                            <NavLink href="/ContactUs">Contact</NavLink>
                        </div>
                        <div className='mt-4 lg:mt-0 flex flex-col sm:flex-row items-center'>
                            <div className='flex items-center mt-2 sm:mt-0'>
                                <Link href="/Cart" className='text-gray-600 hover:text-gray-700 mr-4'>
                                    <FaShoppingCart size={22} />
                                </Link>
                                <Link href="/SignUp" className='text-gray-600 hover:text-gray-700'>
                                    <CgProfile size={22} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
          <main>
            <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Embrace Comfort with shoe - Online Ecommerce Shop!</h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">Step into a world of style and comfort with shoe, where every pair of shoes tells a story of craftsmanship and innovation.</p>
                  <button
                    onClick={() => window.location.href = '/About'}
                    className="bg-blue-600 text-white font-bold py-2 px-4 sm:px-6 border-2 border-blue-600 hover:bg-white hover:text-blue-600 hover:border-blue-600 transition duration-300 text-sm sm:text-base"
                  >
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
                    className="w-full sm:w-3/4 mx-auto"
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
            <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-16">
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">Free Delivery</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Free shipping on all order</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">ONLINE SUPPORT 24/7</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Support online 24 hours a day</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">MONEY RETURN</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Back guarantee under 7 days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">SECURE PAYMENT</h3>
                    <p className="text-xs sm:text-sm text-gray-600">100% secure payment</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <div className="flex justify-center items-center p-4 relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] mx-auto">
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
                        className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-lg shadow-lg"
                        style={{ top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/65ef21ccf486a102b5b7a0f4_nikita-kachanovsky-ad_0wMHtvlU-unsplash.webp"
                        alt="Shoe 2"
                        className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-lg shadow-lg"
                        style={{ top: '15%', right: '15%', transform: 'translate(50%, -50%)' }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/65b689fa8b229077a07049bb_super-straho-5BMPrXBFTI8-unsplash.webp"
                        alt="Shoe 3"
                        className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-lg shadow-lg"
                        style={{ top: '50%', right: '0%', transform: 'translate(50%, -50%)' }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/65b68a700edca6f33a84285e_maxim-hopman-8cT5ja0P_N4-unsplash.webp"
                        alt="Shoe 4"
                        className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-lg shadow-lg"
                        style={{ bottom: '15%', right: '15%', transform: 'translate(50%, 50%)' }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/65e800b277212e6604702eb1_hermes-rivera-w83s82yd3Fk-unsplash.webp"
                        alt="Shoe 6"
                        className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-lg shadow-lg"
                        style={{ bottom: '0%', left: '50%', transform: 'translate(-50%, 50%)' }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/65b689fa3dc80ee41a3c6bf2_jakob-owens-JzJSybPFb3s-unsplash.webp"
                        alt="Shoe 7"
                        className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-lg shadow-lg"
                        style={{ bottom: '15%', left: '15%', transform: 'translate(-50%, 50%)' }}
                      />
                      <img
                        src="https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/p/y/0/-original-imagg5rfsacakzqz.jpeg?q=90"
                        alt="Shoe 8"
                        className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-lg shadow-lg"
                        style={{ top: '50%', left: '0%', transform: 'translate(-50%, -50%)' }}
                      />
                      <img
                        src="https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/7/w/r/-original-imahfxuxfpfmcpa3.jpeg?q=90"
                        alt="Shoe 9"
                        className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-lg shadow-lg"
                        style={{ top: '15%', left: '15%', transform: 'translate(-50%, -50%)' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-8 lg:pl-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">About shoe</h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
                    Discover the shoe story. We're passionate about creating footwear that not only
                    complements your style but also prioritizes comfort and quality.
                  </p>
                  <button
                    onClick={() => window.location.href = '/ShoeList'}
                    className="bg-white text-blue-600 font-bold py-2 px-4 sm:px-6 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 text-sm sm:text-base"
                  >
                    View Our Products
                  </button>
                </div>
              </div>
            </section>
            
            {/* Latest Shoes section */}
            <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Latest Shoes</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
                  Explore our latest shoe collection - blending fashion and functionality
                  for every step you take.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {latestProducts.map((product) => (
                    <div
                      key={product.name}
                      className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full"
                    >
                      <div className="relative h-48 sm:h-56 md:h-64 w-full">
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
                      <div className="px-4 sm:px-5 pt-4 pb-4 flex flex-col flex-grow">
                        <h4 className="font-bold text-base sm:text-lg mb-2">{product.name}</h4>
                        <p className="text-blue-600 text-xs sm:text-sm mb-2 text-right">{product.price}</p>
                        <a href={`/ShoeList/${product.id}`}>
                          <button
                            className="bg-blue-600 cursor-pointer text-white px-3 sm:px-4 py-2 mt-auto rounded-md transition duration-150 hover:bg-blue-700 text-xs sm:text-sm"
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
            
            {/* Newsletter section */}
            <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
              <div className="bg-gradient-to-r from-blue-600 to-blue-200 rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between p-4 sm:p-8">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <h3 className="text-white text-xs sm:text-sm font-semibold mb-2">JOIN OUR NEWSLETTER</h3>
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4">Get Discount up<br />to 50% off!</h2>
                    <form className="w-full max-w-sm">
                      <div className="flex items-center border-b border-white py-2">
                        <input
                          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none text-sm sm:text-base"
                          type="email"
                          placeholder="Enter your email here"
                          aria-label="Email address"
                        />
                      </div>
                      <button
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mt-4 rounded w-full text-sm sm:text-base"
                        type="button"
                      >
                        SUBSCRIBE
                      </button>
                    </form>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img
                      src="https://cdn.prod.website-files.com/65a62949580c5ed45b48f683/65eefc2b486f9d174620d468_1616_prev_ui.webp"
                      alt="Shoe"
                      className="w-36 sm:w-48 md:w-64 h-auto transform -rotate-12"
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>

<Footer/>
        </>
      )}
    </div>
  );
}
export default page;
