import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpeg"
            alt="Sarthak Hatchery"
            width={120}
            height={50}
          />
        </Link>

        {/* Menu */}
        <nav className="space-x-6 text-white">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#products">Products</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}