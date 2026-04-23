import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Poultry Farm"
        fill
        className="object-cover"
        priority
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Badge */}
        <span className="inline-block bg-green-500/20 border border-green-400/40 text-green-300 text-sm font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          Est. Since 2018
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          Sarthak <span className="text-green-400">Hatchery</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl drop-shadow">
          Healthy Chicks. Trusted Poultry Farming.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="tel:+918788629009"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-green-500/40 hover:scale-105"
          >
            📞 Call Now
          </a>
          <a
            href="#products"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105"
          >
            Our Products
          </a>
        </div>

        {/* Stats */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 md:gap-16 text-white">
          {[
            { value: "7+", label: "Years Experience" },
            { value: "3-4 lakhs", label: "Birds Monthly" },
            { value: "100%", label: "Vaccinated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}