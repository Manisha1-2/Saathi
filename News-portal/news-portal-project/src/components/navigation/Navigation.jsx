"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import navigationLinks from "@/data/navigation";

const categories = [
  "Politics",
  "Business",
  "Technology",
  "Sports",
  "Entertainment",
  "Health",
  "World",
];

export default function Navigation({ className = "" }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={className}>
      <ul className="flex items-center gap-8">

        {navigationLinks.map((item) => {

          if (item.label === "Categories") {
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >

                {/* Category Button */}
                <button
                  className="flex items-center gap-1 font-semibold text-white transition-colors duration-300 hover:text-red-600"
                >
                  Categories

                  <FiChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>


                {/* Dropdown */}
                {isOpen && (
                  <div className="absolute left-0 top-full pt-2">

                    <div className="w-60 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">

                      {categories.map((category) => (

                        <Link
                          key={category}
                          href={`/category/${category.toLowerCase()}`}
                          className="block border-l-4 border-transparent px-5 py-3 text-gray-700 transition-all duration-300 hover:border-red-600 hover:bg-red-50 hover:text-red-600"
                        >
                          {category}
                        </Link>

                      ))}

                    </div>

                  </div>
                )}

              </li>
            );
          }


          return (
            <li key={item.label}>

              <Link
                href={item.href}
                className={`font-semibold transition-colors duration-300 ${
                  pathname === item.href
                    ? "text-red-600"
                    : "text-white hover:text-red-600"
                }`}
              >
                {item.label}
              </Link>

            </li>
          );

        })}

      </ul>
    </nav>
  );
}