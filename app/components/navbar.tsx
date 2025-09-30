'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-5 left-1/2 -translate-x-1/2 w-[450px]  rounded-2xl border border-white/20 shadow-2xl z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/20 backdrop-blur-xl' : 'bg-white/10 backdrop-blur-lg'
    }`}>
      <div className="flex justify-center items-center gap-6 p-4">
        {["Home", "Skill", "Projects", "Contact"].map((item) => {
          const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = pathname === href;
          
          return (
            <Link
              key={item}
              href={href}
              className={`text-white font-medium text-sm px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 ${
                isActive 
                  ? "bg-white/25 text-blue-100 shadow-inner" 
                  : "hover:bg-white/20 hover:scale-105"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}