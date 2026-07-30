"use client";

import { useState } from "react";
import { FiFacebook, FiLink } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function ShareButtons() {

  const [copied, setCopied] = useState(false);

  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "";


  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      "_blank"
    );
  };


  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}`,
      "_blank"
    );
  };


  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };


  return (
    <div className="mt-6 flex items-center gap-3">

      <span className="text-sm font-semibold text-gray-700">
        Share:
      </span>


      {/* Facebook */}
      <button
        onClick={shareFacebook}
        className="rounded-full bg-blue-600 p-3 text-white transition hover:scale-110"
        aria-label="Share on Facebook"
      >
        <FiFacebook />
      </button>


      {/* X */}
      <button
        onClick={shareTwitter}
        className="rounded-full bg-black p-3 text-white transition hover:scale-110"
        aria-label="Share on X"
      >
        <FaXTwitter />
      </button>


      {/* Copy */}
      <button
        onClick={copyLink}
        className="rounded-full bg-red-600 p-3 text-white transition hover:scale-110"
        aria-label="Copy link"
      >
        <FiLink />
      </button>


      {copied && (
        <span className="text-sm font-medium text-green-600">
          Copied!
        </span>
      )}

    </div>
  );
}