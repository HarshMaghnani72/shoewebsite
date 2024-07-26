"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";

export const Header = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const logoImage = {
        name: 'Company Logo',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/1665714191/vector/shoes-shop.jpg?s=612x612&w=0&k=20&c=bFQXXwYhDyN0SQPgfWy8x_qIpIDRx7ckuojuh2MU1fI=',
        imageAlt: 'Company logo.',
    };

    const NavLink = ({ href, children }) => {
        const isActive = pathname === href;
        return (
            <Link href={href} className={`block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4 relative group ${isActive ? 'text-gray-800' : ''}`}>
                <span className="relative">
                    {children}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </span>
            </Link>
        );
    };

    return (
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
                            <form onSubmit={handleSearchSubmit} className='flex items-center mb-2 sm:mb-0 sm:mr-2'>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    placeholder="Search"
                                    className='border border-gray-300 rounded px-2 py-1 w-full sm:w-auto'
                                />
                                <button type="submit" className='text-gray-600 hover:text-gray-700 ml-2'>
                                    <FaSearch size={22} />
                                </button>
                            </form>
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
    );
};