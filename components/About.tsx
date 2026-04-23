export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-green-600 font-semibold tracking-widest uppercase text-sm text-center mb-3">
          Who We Are
        </p>
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">About Us</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We provide <strong className="text-gray-900">high-quality chicks, broilers, and farm-fresh eggs</strong> to
              customers across the region. Our hatchery maintains strict hygiene and best
              farming practices to ensure healthy, vaccinated birds every time.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With over 7 years of experience, Sarthak Hatchery is a trusted name in
              poultry farming — committed to quality, care, and customer satisfaction.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🐣", title: "Day-old Chicks", desc: "Vaccinated & healthy" },
              { icon: "🌿", title: "Hygienic Farm", desc: "Best practices followed" },
              { icon: "🚚", title: "Bulk Orders", desc: "Delivered on time" },
              { icon: "📋", title: "Certified", desc: "Trusted quality assurance" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-green-50 border border-green-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}