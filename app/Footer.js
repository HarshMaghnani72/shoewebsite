import React from "react";

export const Footer = () => {

    const logoImage = {
        name: 'Company Logo',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/1665714191/vector/shoes-shop.jpg?s=612x612&w=0&k=20&c=bFQXXwYhDyN0SQPgfWy8x_qIpIDRx7ckuojuh2MU1fI=',
        imageAlt: 'Company logo.',
    };

    return (
        <div>
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
                                <li className="mb-2"><a href="/" className="hover:text-gray-900">Home</a></li>
                                <li className="mb-2"><a href="/About" className="hover:text-gray-900">About</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-700 font-semibold mb-4">Pages</h3>
                            <ul className="text-gray-500">
                                <li className="mb-2"><a href="/ShoeList" className="hover:text-gray-900">Products</a></li>
                                <li className="mb-2"><a href="/ContactUs" className="hover:text-gray-900">Contact</a></li>
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
        </div>
    )
}