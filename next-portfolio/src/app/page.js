"use client";
import { useState, useEffect, useRef} from "react";
import Head from "next/head";
import { Menu, X } from "lucide-react"; // Importing icons

export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
  

  return (
    
    <>
      <div className="">
        {/* Navbar */}
        <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto ">
          <h1 className="text-3xl font-bold">Daniel Jauregui</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-xl font-bold">
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </nav>

        {/* Mobile Menu (Collapsible) */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-6 text-xl font-bold bg-gray-800 p-6 rounded-lg">
            <li>
              <a
                href="#about"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto p-6 gap-8">
        {/* Text on the Left */}
        <div className="text-center md:text-left">
          <span className="font-bold">
            Hi, my name is
            <h1 className="text-6xl font-bold">Daniel Jauregui</h1>
          </span>
          <p className="mt-4 text-lg font-bold typing-animation">
            I build modern and scalable applications.
          </p>
        </div>

        {/* Image on the Right */}
        <div className="flex justify-center">
          <img src="dan_comp.jpg" alt="Profile Picture" />
        </div>
        
      </div>
      <div>
      <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scrollbar-none">
            {/* Section 1 */}
            <div className="h-screen flex items-center justify-center bg-blue-500 snap-start">
                <h1 className="text-4xl text-white">Section 1</h1>
            </div>

            {/* Section 2 */}
            <div className="h-screen flex items-center justify-center bg-green-500 snap-start">
                <h1 className="text-4xl text-white">Section 2</h1>
            </div>

            {/* Section 3 */}
            <div className="h-screen flex items-center justify-center bg-red-500 snap-start">
                <h1 className="text-4xl text-white">Section 3</h1>
            </div>
        </div>
      
      </div>
       
      
    </>
  );
}
