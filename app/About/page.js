"use client"
import { useState } from 'react';
import { Footer } from '../Footer';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';

const About = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const logoImage = {
        name: 'Company Logo',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/1665714191/vector/shoes-shop.jpg?s=612x612&w=0&k=20&c=bFQXXwYhDyN0SQPgfWy8x_qIpIDRx7ckuojuh2MU1fI=',
        imageAlt: 'Company logo.',
    };

    return (
        <div className="bg-blue-100">
            <header className="bg-white shadow-md m-auto sticky top-0 z-50">
                <nav role="navigation" className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <img
                        src={logoImage.imageSrc}
                        alt={logoImage.imageAlt}
                        className="w-1/12 h-1/2"
                    />
                    <div className="flex space-x-4">
                        <Link href="/" className="text-gray-600 hover:text-gray-800 relative group">
                            <span>Home</span>
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                        </Link>
                        <Link href="/ShoeList" className="text-gray-600 hover:text-gray-800 relative group">
                            <span>Products</span>
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                        </Link>
                        <Link href="/About" className="text-gray-600 hover:text-gray-800 relative group">
                            <span>About</span>
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                        </Link>
                        <Link href="/ContactUs" className="text-gray-600 hover:text-gray-800 relative group">
                            <span>Contact</span>
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                        </Link>
                    </div>
                    <div className='flex flex-row justify-normal mr-5' >
                        <Link href="/Cart" className='text-gray-600 hover:text-gray-700' >
                            <FaShoppingCart size={22} className='mr-6' />
                        </Link>
                        <Link href="/SignUp" className='text-gray-600 hover:text-gray-700' >
                            <CgProfile size={22} className='mr-5' />
                        </Link>
                    </div>
                </nav>
            </header>
            <div className="flex flex-row">
                <div className="max-w-[1320px] py-5 md:py-[80] flex flex-col lg:flex-row justify-evenly mx-auto">
                    <div className="flex flex-col items-center space-y-12 lg:space-y-20">
                        <img
                            src="/shoes.png"
                            alt="Shoes img 1"
                            width={640}
                            height={640}
                            className="w-full max-w-lg mx-auto rounded-lg hover:scale-110 hover:shadow-xl transition-transform duration-300"
                        />
                        <img
                            src="/shoes2.png"
                            alt="Shoes img 2"
                            width={640}
                            height={640}
                            className="w-full max-w-lg mx-auto rounded-lg hover:scale-110 hover:shadow-xl transition-transform duration-300"
                        />
                    </div>
                </div>
                <div className="basis-[40%]">
                    <div className="p-4">
                        <h1 className="text-6xl font-bold mt-20">About Us</h1>
                        <p className="text-2xl mt-8">
                            Welcome to our Website, the ultimate destination for shoe enthusiasts and
                            fashion-forward individuals. We are passionate about footwear and committed to bringing you the latest trends,
                            timeless classics, and the highest quality shoes from around the world.
                        </p>
                    </div>
                    <button
                        className="w-[160px] h-[60px] bg-blue-500 hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-lg transition-transform duration-1000 mt-12"
                        onClick={() => window.location.href = '/ContactUs'}
                    >
                        Contact Us
                    </button>
                </div>
            </div>

            <div className="flex flex-row">
                <div className="max-w-[1320px] py-5 md:py-[80] flex flex-col lg:flex-row justify-evenly mx-auto">
                    <div className="basis-[60%] px-6 flex flex-col items-center space-y-12 lg:space-y-20 mt-16">
                        <h2 className="text-5xl font-bold mb-4 text-center">Our Partners</h2>
                        <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
                            <div className="w-[250px] h-[200px] bg-white rounded-lg shadow-lg p-4">
                                <img
                                    src="/flipkart.png"
                                    alt="Partner 1 Logo"
                                    width={250}
                                    height={200}
                                    className="w-full h-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="w-[250px] h-[200px] bg-white rounded-lg shadow-lg p-4">
                                <img
                                    src="/amazon.png"
                                    alt="Partner 2 Logo"
                                    width={250}
                                    height={200}
                                    className="w-full h-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="w-[250px] h-[200px] bg-white rounded-lg shadow-lg p-4">
                                <img
                                    src="/myntra.png"
                                    alt="Partner 3 Logo"
                                    width={250}
                                    height={200}
                                    className="w-full h-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="w-[250px] h-[200px] bg-white rounded-lg shadow-lg p-4">
                                <img
                                    src="/snapdeal.png"
                                    alt="Partner 4 Logo"
                                    width={250}
                                    height={200}
                                    className="w-full h-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center space-y-8 mb-20">
                <h1 className="text-5xl font-semibold mt-16">Our Team</h1>
                <p className="text-xl font-medium mb-12 text-center">
                    Introducing our dynamic and resilient team—innovators, collaborators, and
                    leaders dedicated to shaping success at every turn.
                </p>
                <div className="flex flex-row justify-evenly w-full mt-24">
                    <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
                        <img
                            src="/ai2.png"
                            alt="Person 1"
                            width={256}
                            height={256}
                            className="w-64 h-64 rounded-full object-cover"
                        />
                        <h2 className="text-xl font-semibold">Siya</h2>
                        <p className="text-lg">CEO and Founder</p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
                        <img
                            src="/ai3.png"
                            alt="Person 2"
                            width={256}
                            height={256}
                            className="w-64 h-64 rounded-full object-cover"
                        />
                        <h2 className="text-xl font-semibold">Jullie</h2>
                        <p className="text-lg">Director</p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
                        <img
                            src="/ai4.png"
                            alt="Person 3"
                            width={256}
                            height={256}
                            className="w-64 h-64 rounded-full object-cover"
                        />
                        <h2 className="text-xl font-semibold">Mathew</h2>
                        <p className="text-lg">Assistant Director</p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-6 bg-blue-300 shadow-md rounded-md mt-40 mb-20">
                <h1 className="text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
                <p className="text-xl mb-10 font-semibold text-center">
                    Welcome to Shoez, your premier destination for all things footwear! View The
                    Questions We Get Often.
                </p>
                <div>
                    {['What is your return policy?', 'How do I track my order?', 'Do you offer international shipping?', 'Can I change my order after it has been placed?'].map((question, index) => (
                        <div key={index} className="faq-item border-b border-gray-200 py-4">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                <span className="text-lg font-semibold">
                                    {activeIndex === index ? '−' : '+'} {question}
                                </span>
                            </div>
                            <div
                                className={`answer mt-2 text-gray-600 ${activeIndex === index ? '' : 'hidden'}`}
                            >
                                <p>{['You can return any shoes within 30 days of purchase for a full refund.', 'Once your order has shipped, we will send you an email with the tracking information.', 'Yes, we ship to most countries worldwide. Additional shipping fees may apply.', 'You can change your order within 24 hours of placing it by contacting our customer service.'][index]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
