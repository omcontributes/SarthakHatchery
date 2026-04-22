import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="relative w-full h-[70vh]">
        <Image
          src="/images/hero.jpg"
          alt="Poultry Farm"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">
            Sarthak Hatchery
          </h1>
          <p className="text-lg mb-6">
            Healthy Chicks. Trusted Poultry Farming.
          </p>
          <a
            href="tel:+91XXXXXXXXXX"
            className="bg-green-600 px-6 py-3 rounded-full hover:bg-green-700"
          >
            Call Now
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-600">
          We provide high-quality chicks, broilers, and farm-fresh eggs.
          Our hatchery maintains strict hygiene and best farming practices.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our Products
        </h2>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">

          {/* CHICKS */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <Image
              src="/images/chicks.jpg"
              alt="Chicks"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Day-old Chicks</h3>
              <p className="text-sm text-gray-500">
                Healthy and vaccinated chicks.
              </p>
            </div>
          </div>

          {/* BROILER */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <Image
              src="/images/farm.jpg"
              alt="Broiler Chicken"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Broiler Chickens</h3>
              <p className="text-sm text-gray-500">
                Fast-growing and high-quality birds.
              </p>
            </div>
          </div>

          {/* EGGS */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <Image
              src="/images/eggs.jpg"
              alt="Eggs"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Fresh Eggs</h3>
              <p className="text-sm text-gray-500">
                Clean and farm-fresh eggs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our Farm
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image src="/images/hero.jpg" alt="" width={300} height={200} />
          <Image src="/images/chicks.jpg" alt="" width={300} height={200} />
          <Image src="/images/farm.jpg" alt="" width={300} height={200} />
          <Image src="/images/eggs.jpg" alt="" width={300} height={200} />
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-green-600 text-white py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">Call or WhatsApp for orders</p>

        <a
          href="tel:+91XXXXXXXXXX"
          className="bg-white text-green-600 px-6 py-3 rounded-full font-medium"
        >
          Call Now
        </a>
      </section>

    </div>
  );
}