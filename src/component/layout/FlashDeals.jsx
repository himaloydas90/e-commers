import React from 'react';
import ProductCard from '../ui/ProductCard';


const FlashDeals = () => {
  const products = [
    {
      id: 1,
      title: "Headrest Executive Mesh Office Chair set",
      price: "10500",
      discount: 25,
      image: "/card.png", // Apnar image path ekhane hobe
      isFavorite: false
    },
    {
      id: 2,
      title: "Women fashion dress set",
      price: "1000",
      discount: 25,
      image: "/card (2).png",
      isFavorite: true
    },
    {
      id: 3,
      title: "Headrest Executive Mesh Office Chair set",
      price: "5000",
      discount: 25,
      image: "/card (2).png",
      isFavorite: false
    },
    {
      id: 4,
      title: "Women black dress and red hat collections",
      price: "1000.00",
      discount: 25,
      image: "/card (2).png",
      isFavorite: false
    }
  ];

  return (
    <section className="py-10 px-4 container mx-auto bg-gray-50">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Flash Deals</h2>
        <button className="text-gray-500 text-sm font-medium hover:text-blue-600 flex items-center gap-1 group">
          View more 
          <span className="group-hover:translate-x-1 transition-transform">➔</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FlashDeals;