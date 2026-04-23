import Image from "next/image";

const images = [
  { src: "/images/hero.jpg", alt: "Poultry Farm Interior" },
  { src: "/images/chicks.jpg", alt: "Day-old Chicks" },
  { src: "/images/farm.jpg", alt: "Farm Aerial View" },
  { src: "/images/eggs.jpg", alt: "Fresh Eggs" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-green-600 font-semibold tracking-widest uppercase text-sm text-center mb-3">
          Take a Look
        </p>
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Farm</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${
                i === 0 ? "md:col-span-2 md:row-span-2 h-64 md:h-full" : "h-48"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <span className="text-white text-sm font-medium px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}