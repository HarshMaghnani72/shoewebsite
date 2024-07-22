import React from "react";
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {

    const logoImage = {
        name: 'Company Logo',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/1665714191/vector/shoes-shop.jpg?s=612x612&w=0&k=20&c=bFQXXwYhDyN0SQPgfWy8x_qIpIDRx7ckuojuh2MU1fI=',
        imageAlt: 'Company logo.',
    };

    return (
        <div>
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
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                        <Link href="/ShoeList" className="text-gray-600 hover:text-gray-800 relative group">
                            <span>Products</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                        <Link href="/About" className="text-gray-600 hover:text-gray-800 relative group">
                            <span>About</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                        <Link href="/ContactUs" className="text-gray-600 hover:text-gray-800 relative group">
                            <span>Contact</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </div>
                    <div className='flex flex-row mr-5' >
                        <Link href="#" className='text-gray-600 hover:text-gray-700' >
                            <FaSearch size={22} className='mr-6' />
                        </Link>
                        <Link href="#" className='text-gray-600 hover:text-gray-700' >
                            <FaShoppingCart size={22} className='mr-6' />
                        </Link>
                        <Link href="/SignUp" className='text-gray-600 hover:text-gray-700' >
                            <CgProfile size={22} className='mr-5' />
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}
