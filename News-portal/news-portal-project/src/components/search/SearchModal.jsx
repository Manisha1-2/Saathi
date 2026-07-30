"use client";

import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import Link from "next/link";
import allNews from "@/data/allNews";

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");

  if (!isOpen) return null;

  const results = allNews.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="absolute right-0 top-12 z-50 mt-2 w-80 rounded-xl border border-gray-200 bg-white p-4 shadow-2xl">

      {/* Header */}
      <div className="mb-4 flex items-center justify-between">

        <h3 className="text-lg font-semibold text-gray-800">
          Search News
        </h3>

        <button
          onClick={onClose}
          className="rounded-full p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600"
        >
          <FiX />
        </button>

      </div>


      {/* Search Input */}
      <div className="relative">

        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 text-gray-800 outline-none focus:border-red-600"
        />

      </div>


      {/* Results */}
      {searchTerm && (
        <div className="mt-4 max-h-72 overflow-y-auto">

          {results.length > 0 ? (

            results.slice(0, 5).map((item) => (

              <Link
                key={item.id}
                href={`/article/${item.id}`}
                onClick={onClose}
                className="block rounded-lg p-3 hover:bg-gray-100"
              >

                <h4 className="font-semibold text-gray-800">
                  {item.title}
                </h4>

                <p className="text-sm text-red-600">
                  {item.category}
                </p>

              </Link>

            ))

          ) : (

            <p className="text-sm text-gray-500">
              No news found.
            </p>

          )}

        </div>
      )}

    </div>
  );
}