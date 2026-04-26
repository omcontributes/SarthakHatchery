"use client";

import Image from "next/image";
import { useState } from "react";

const PHONE = "917276236702";

const chicks = [
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
    name: "Broiler Chicks",
    description: "Fast-growing birds for meat production.",
    images: [
      "/images/broiler1.jpg",
      "/images/broiler2.jpg",
      "/images/broiler3.jpg",
    ],
  },
];

const feedProducts = [
  {
    name: "Pre Starter Feed",
    description: "High-protein feed for chicks (0–10 days).",
    image: "/images/prestarter.jpg",
  },
  {
    name: "Starter Feed",
    description: "Balanced feed for growing chicks.",
    image: "/images/starter.jpg",
  },
  {
    name: "Layer Feed",
    description: "Feed for egg-laying hens.",
    image: "/images/Layer.jpg",
  },
  {
    name: "Broiler Feed",
    description: "Fast-growth feed for broilers.",
    image: "/images/broiler-feed.jpg",
  },
  {
    name: "Country Feed",
    description: "Natural feed for desi chickens.",
    image: "/images/country.jpg",
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section id="products" className="py-20 px-6">
      {/* MAIN HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-600">Products</h2>
        <p className="text-gray-500 mt-2">Our poultry offerings</p>
      </div>

      {/* 🐥 CHICKS SECTION */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 mb-16">
        {chicks.map((product, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg">
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

            <div className="p-5">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>

              <button
                onClick={() => setSelectedProduct(product.name)}
                className="w-full bg-green-500 text-white py-2 rounded-lg"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🌾 FEED HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-600">
          Feed Products
        </h2>
      </div>

      {/* 🌾 FEED GRID (2 PER ROW) */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {feedProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={250}
              className="object-cover w-full h-48"
            />

            <div className="p-5">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>

              <button
                onClick={() => setSelectedProduct(product.name)}
                className="w-full bg-green-500 text-white py-2 rounded-lg"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 📦 MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white p-6 rounded-xl w-[90%] max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-4">
              Order {selectedProduct}
            </h3>

            <div className="flex flex-col gap-3">
              {/* CALL */}
              <a
                href={`tel:${PHONE}`}
                className="bg-green-500 text-white py-2 rounded-lg text-center"
              >
                📞 Call Now
              </a>

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent(
                  `Hello! I want to order ${selectedProduct} from Sarthak Hatchery.`,
                )}`}
                target="_blank"
                className="bg-[#25D366] text-white py-2 rounded-lg text-center"
              >
                💬 WhatsApp
              </a>

              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-400 text-sm"
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