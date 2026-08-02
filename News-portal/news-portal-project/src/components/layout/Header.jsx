"use client";

import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiMenu } from "react-icons/fi";

import Container from "./Container";
import Navigation from "../navigation/Navigation";
import SearchModal from "../search/SearchModal";
import BreakingNewsTicker from "./BreakingNewsTicker";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <BreakingNewsTicker />

      <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
        <Container>
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold tracking-wide"
            >
              <span className="text-red-600">
                News
              </span>

              <span className="text-white">
                Pulse
              </span>
            </Link>


            {/* Desktop Navigation */}
            <Navigation className="hidden lg:block" />


            {/* Right Actions */}
            <div className="relative flex items-center gap-4">

              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-2xl text-white transition-colors duration-300 hover:text-red-600"
                aria-label="Search"
              >
                <FiSearch />
              </button>


              {/* Search Dropdown */}
              <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
              />


              {/* Mobile Menu Button */}
              <button
                className="text-2xl text-white transition-colors duration-300 hover:text-red-600 lg:hidden"
                aria-label="Menu"
              >
                <FiMenu />
              </button>

            </div>

          </div>
        </Container>
      </header>
    </>
  );
}