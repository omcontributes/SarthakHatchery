"use client";

import Image from "next/image";
import { useState } from "react";

const PHONE = "+917276236702"; 

const products = [
  {
    name: "Kaveri Chicks",
    description: "Strong dual-purpose breed (eggs & meat).",
    images: [
      "/images/kaveri1.jpg",
      "/images/kaveri2.jpg",
      "/images/kaveri3.jpg",
    ],
  },
  {
    name: "Gavran Chicks",
    description: "Desi breed with high immunity and natural growth.",
    images: [
      "/images/gavran1.jpg",
      "/images/gavran2.jpg",
      "/images/gavran3.jpg",
    ],
  },
  {
    name: "Broiler",
    description: "Fast-growing birds for meat production.",
    images: [
      "/images/broiler1.jpg",
      "/images/broiler2.jpg",
      "/images/broiler3.jpg",
    ],
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section id="products" className="py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-600">Products</h2>
        <p className="text-gray-500 mt-2">Our poultry offerings</p>
      </div>

      {/* Products Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Images */}
            <div className="grid grid-cols-3 gap-2 p-3">
              {product.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-40 rounded-lg"
                />
              ))}
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>

              <button
                onClick={() => setSelectedProduct(product.name)}
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Order {selectedProduct}
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Choose how you would like to place your order
            </p>

            <div className="flex flex-col gap-3">
              {/* Call Button */}

              <a
                href={`tel:+${PHONE}`}
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                📞 Call Now
              </a>

              {/* WhatsApp Button */}
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent(
                  `Hello! I would like to order *${selectedProduct}* from Sarthak Hatchery. Please share availability and pricing. Thank you!`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 rounded-xl transition-colors"
              >
                💬 WhatsApp
              </a>

              {/* Cancel */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-400 hover:text-gray-600 text-sm mt-1 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
