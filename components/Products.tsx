

import Image from "next/image";


const products = [
  {
    name: "Kaveri Chicks",
    description: "Strong dual-purpose breed (eggs & meat).",
    images: ["/images/kaveri1.jpg", "/images/kaveri2.jpg", "/images/kaveri3.jpg"],
  },
  {
    name: "Gavran Chicks",
    description: "Desi breed with high immunity and natural growth.",
    images: ["/images/gavran1.jpg", "/images/gavran2.jpg", "/images/gavran3.jpg"],
  },
  {
    name: "Broiler Chicks",
    description: "Fast-growing birds for meat production.",
    images: ["/images/broiler1.jpg", "/images/broiler2.jpg", "/images/broiler3.jpg"],
  },
];

export default function Products() {
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
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">

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

            <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
              Order Now
            </button>
          </div>

        </div>
      ))}

    </div>

  </section>
);
  
}