'use client'
import { useParams } from 'next/navigation';
import { productsView } from '../productsView';
import { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductPage() {
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    console.log(storedCart);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  const params = useParams();
  const productId = parseInt(params.id);
  const product = productsView.find(p => p.id === productId);
  const [cart, setCart] = useState([]);
  if (!product || !product.id) {
    return <div>Product not found</div>;
  }

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[2]);
  const addToCart=()=>{
    window.location.href = '/Cart';
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize.name,
      quantity: 1,
      imageSrc: product.images[0].src,
      imageAlt: product.images[0].alt,
    };
    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert("Product added to cart");
    console.log(updatedCart)
  }
  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
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
            navigation={true}
            className="w-full mx-auto h-[300px]"
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index} className="relative h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            <form className="mt-10">
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size(US)</h3>
                </div>

                <fieldset className="mt-4">
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <label
                        key={size.name}
                        className={classNames(
                          size.inStock
                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1',
                          selectedSize.name === size.name ? 'ring-2 ring-indigo-500' : '',
                          !size.inStock ? 'pointer-events-none' : ''
                        )}
                      >
                        <input
                          type="radio"
                          name="size-choice"
                          value={size.name}
                          disabled={!size.inStock}
                          className="sr-only"
                          aria-labelledby={`size-choice-${size.name}-label`}
                          onChange={() => setSelectedSize(size)}
                        />
                        <span id={`size-choice-${size.name}-label`}>{size.name}</span>
                        {!size.inStock && (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              stroke="currentColor"
                            >
                              <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                            </svg>
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <button
                type="button"
                onClick={addToCart}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
