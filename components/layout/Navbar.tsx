"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Tours and Treks", href: "/tours" },
  { name: "About Us", href: "/about" },
  { name: "Client Stories", href: "/clients-stories" },
  { name: "Contact", href: "/contact" },
   { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/asset/slidersection/logo1.jpeg"
            alt="Beyond Border Tours"
            width={100}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.href}
                className="hover:text-orange-500 transition"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col px-6 py-6 space-y-4 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-base sm:text-lg hover:text-orange-500 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
