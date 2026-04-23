
import Image from "next/image";

const products = [
  {
    src: "/images/chicks.jpg",
    alt: "Day-old Chicks",
    title: "Day-old Chicks",
    desc: "Healthy and vaccinated chicks ready for farming.",
    badge: "Best Seller",
  },
  {
    src: "/images/farm.jpg",
    alt: "Broiler Chickens",
    title: "Broiler Chickens",
    desc: "Fast-growing, high-quality birds for meat production.",
    badge: "Popular",
  },
  {
    src: "/images/eggs.jpg",
    alt: "Fresh Eggs",
    title: "Fresh Eggs",
    desc: "Clean, farm-fresh eggs sourced directly from our farm.",
    badge: "Fresh Daily",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-green-600 font-semibold tracking-widest uppercase text-sm text-center mb-3">
          What We Offer
        </p>
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Products</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.desc}</p>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="inline-block w-full text-center bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 rounded-xl transition-colors duration-200"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}