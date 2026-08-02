"use client";

import Link from "next/link";

const headlines = [
  {
    id: 1,
    title: "Government announces new education policy.",
    link: "/article/1",
  },
  {
    id: 2,
    title: "Stock market reaches a record high today.",
    link: "/article/2",
  },
  {
    id: 3,
    title: "Heavy rainfall expected across the country.",
    link: "/article/3",
  },
  {
    id: 4,
    title: "Nepal defeats Bhutan in SAFF Championship.",
    link: "/article/4",
  },
];

export default function BreakingNewsTicker() {
  return (
    <div className="bg-red-600 text-white overflow-hidden">
      <div className="flex items-center">

        <div className="bg-black px-6 py-3 font-bold whitespace-nowrap">
          🔴 BREAKING NEWS
        </div>

        <div className="overflow-hidden flex-1">
          <div className="ticker flex whitespace-nowrap">

            {[...headlines, ...headlines].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="mx-10 hover:text-yellow-300 transition"
              >
                {item.title}
              </Link>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}