import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Contact />
    </div>
  );
}