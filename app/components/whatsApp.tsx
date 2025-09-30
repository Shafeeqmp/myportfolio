"use client";
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsAppLog() {
  const phoneNumber = "919605665399";
  const message = "Hello Shafeeq! I checked your portfolio and would like to discuss opportunities with you.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-15 right-6 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <BsWhatsapp className="w-7 h-7" />
      {/* Pulsing animation */}
      <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-green-400 opacity-75 group-hover:opacity-100"></span>
    </a>
  );
}