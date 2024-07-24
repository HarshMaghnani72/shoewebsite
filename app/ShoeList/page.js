"use client";
import React, { useState } from 'react';
import { products } from "../products";
import { Header } from "../Header";
import { Footer } from "../Footer";

export default function Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const lowercaseQuery = query.toLowerCase();
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.color.toLowerCase().includes(lowercaseQuery)
    );
    setSearchResults(results);
  };

  const displayProducts = searchQuery ? searchResults : products;

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {searchQuery ? `Search Results for "${searchQuery}"` : "All Products"}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {displayProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={`/ShoeList/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price} USD</p>
                </div>
                <button
                  className="bg-blue-600 cursor-pointer w-full text-center text-white px-2 py-1 mt-2 rounded-md transition duration-150 hover:bg-blue-700"
                  onClick={() => window.location.href = `/product/${product.id}`}
                >
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
