"use client";

import React from "react";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Solutions",
    link: "/solutions",
  },
  {
    name: "Developers",
    link: "/developers",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export function Navigation() {
  const pathname = usePathname();
  return (
    <div className="relative w-full">
      <Navbar />
    </div>
  );
}
