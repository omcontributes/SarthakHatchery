export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <p className="text-green-600 font-semibold tracking-widest uppercase text-sm mb-2">
          Get In Touch
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div className="space-y-8">

            {/* <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">
                Phone
              </p>
              <p className="text-xl font-medium text-gray-900">
                +91 8788629009
              </p>
            </div> */}
            <div className="space-y-1">
            <a href="tel:+918788629009" className="block text-lg">
             Mobile No: +91 7276236702
            </a>
            <a href="tel:+919876543210" className="block text-lg">
            Mobile No: +91 8788629009
            </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">
                Email
              </p>
              <p className="text-xl font-medium text-gray-900">
                katkadesarthak09@gmail.com
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">
                Location
              </p>
              <p className="text-xl font-medium text-gray-900">
                Manmad
              </p>
              <p className="text-gray-500">
                Maharashtra, India
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">

              <a
                href="tel:+917276236702"
                className="border border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-900 hover:text-white transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918788629009"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-700 transition"
              >
                Chat on WhatsApp
              </a>

            </div>
          </div>

          {/* Right */}
          <div className="border border-gray-200 rounded-sm overflow-hidden">

            <div className="p-6 border-b border-gray-200">
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
                Address
              </p>

              <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                Camp no. 2, Katkade wasti, yeola road, manmad <br />
                Near kendriya vidyalaya <br />
                
              </p>

              <p className="text-gray-500 mt-2">
                423104
              </p>
            </div>

            {/* Map */}
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2002.7367683091747!2d74.44638661162531!3d20.23507286797175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc25001913ad73%3A0x7206484c0751e952!2sSarthak%20Hatchery%2CManmad!5e0!3m2!1sen!2sin!4v1776954545524!5m2!1sen!2sin"
            width="100%"
            height="300"
           style={{ border: 0 }}
           allowFullScreen
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
/>
         

          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-400 text-sm mt-16">
          © {new Date().getFullYear()} Sarthak Hatchery. All rights reserved.
        </p>

      </div>
    </section>
  );
}