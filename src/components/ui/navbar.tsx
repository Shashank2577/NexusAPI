'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

const NavLinks = [
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Developers", href: "/developers" },
  { name: "Company", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              Nexus
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`${
                      isActive 
                        ? "text-white bg-white/10" 
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/login"
                className="text-white bg-transparent border border-white/20 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="text-black bg-white hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
              >
                Start Free
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
          {NavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive 
                    ? "text-white bg-white/10" 
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="mt-4 space-y-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-white bg-transparent border border-white/20 hover:bg-white/10 block px-4 py-2 rounded-lg text-center transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="text-black bg-white hover:bg-gray-100 block px-4 py-2 rounded-lg text-center transition-colors"
            >
              Start Free
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
