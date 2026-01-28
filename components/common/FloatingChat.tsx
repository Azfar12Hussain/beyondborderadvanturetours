"use client";

import { useState, useRef, useEffect } from "react";
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaInstagram,
  FaComments,
  FaTimes,
} from "react-icons/fa";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const whatsappMessage = encodeURIComponent(
    "Hello! I visited your website and would like more information."
  );

  /* ✅ Click outside to close */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-3"
    >
      {/* POP-UP ICONS */}
      <div
        className={`flex flex-col items-center gap-3 transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <div className="relative group">
          <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
            WhatsApp
          </span>
          <a
            href={`https://wa.me/923135235207?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <FaWhatsapp className="text-white text-xl" />
          </a>
        </div>

        {/* Messenger */}
        <div className="relative group">
          <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
            Messenger
          </span>
          <a
            href="https://m.me/hassnainshah.haidery"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on Messenger"
            className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <FaFacebookMessenger className="text-white text-xl" />
          </a>
        </div>

        {/* Instagram */}
        <div className="relative group">
          <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
            Instagram
          </span>
          <a
            href="https://www.instagram.com/beyondbordersadventuretours"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Instagram"
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <FaInstagram className="text-white text-xl" />
          </a>
        </div>
      </div>

      {/* MAIN BUTTON */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat options" : "Open chat options"}
        className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      >
        {open ? (
          <FaTimes className="text-white text-2xl" />
        ) : (
          <FaComments className="text-white text-2xl" />
        )}
      </button>
    </div>
  );
}
