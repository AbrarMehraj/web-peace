'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
    {children}
  </a>
);

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => (
  <div className={`absolute top-full left-0 w-full bg-gray-800 sm:relative sm:bg-transparent sm:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 sm:opacity-100 sm:max-h-96'} sm:block overflow-hidden`}>
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 p-4 sm:p-0">
      <NavLink href="#features" onClick={(e) => { e.preventDefault(); document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' }); }}>Features</NavLink>
      <NavLink href="#screenshots" onClick={(e) => { e.preventDefault(); document.querySelector('#screenshots')?.scrollIntoView({ behavior: 'smooth' }); }}>Screenshots</NavLink>
      <NavLink href="/peace.apk">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </span>
      </NavLink>
    </div>
  </div>
);

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold text-blue-400 transition-colors duration-300 hover:text-blue-300">Peace</h1>
            <Image src="/app-icon.png" alt="App Icon" width={40} height={40} className="ml-2 bg-white rounded-full transition-transform duration-300 hover:scale-110" />
          </div>
          <button 
            className="sm:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="relative w-full sm:w-auto">
          <MobileMenu isOpen={isMobileMenuOpen} />
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        
        <section className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-4 transition-colors duration-300 hover:text-blue-200">Enjoy Your Prayer Time Without Interruptions</h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 mx-auto max-w-2xl transition-colors duration-300 hover:text-gray-300">Experience tranquility in your prayer moments. Peace app seamlessly activates Do Not Disturb (DND) during your prayer times, creating a distraction-free space for deeper reflection and spiritual connection.</p>
        </section>
        
        <section id="features" className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center transition-colors duration-300 hover:text-blue-200">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg transition-transform duration-300 hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-300 mb-3 transition-colors duration-300 hover:text-blue-200">Intelligent Ringer Management</h4>
              <p className="text-gray-400 transition-colors duration-300 hover:text-gray-300">Seamlessly switches between silent and normal modes based on your personalized schedule.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition-transform duration-300 hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-300 mb-3 transition-colors duration-300 hover:text-blue-200">Flexible Silent Periods</h4>
              <p className="text-gray-400 transition-colors duration-300 hover:text-gray-300">Define precise start and end times for your desired quiet moments throughout the day.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition-transform duration-300 hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-300 mb-3 transition-colors duration-300 hover:text-blue-200">Intuitive User Experience</h4>
              <p className="text-gray-400 transition-colors duration-300 hover:text-gray-300">Effortlessly manage your silent periods and preferences with our user-friendly interface.</p>
            </div>
          </div>
        </section>
        
        <section id="screenshots" className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center transition-colors duration-300 hover:text-blue-200">App Preview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <Image src="/screenshot1.jpeg" alt="Peace App Interface" width={250} height={500} className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" />
            <Image src="/screenshot2.jpeg" alt="Peace App Settings" width={250} height={500} className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" />
            <Image src="/screenshot3.jpeg" alt="Peace App Schedule" width={250} height={500} className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" />
          </div>
        </section>
        
        <section id="download" className="text-center">
          <h3 className="text-2xl font-semibold text-blue-300 mb-6 transition-colors duration-300 hover:text-blue-200">Get Peace Now</h3>
          
          <a
            href="/peace.apk"
            download
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 inline-block hover:shadow-lg hover:scale-105"
          >
            Download Peace APK
          </a>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-400 transition-colors duration-300 hover:text-gray-300">
        <p>&copy; 2024 Peace App. Developed by Abrar Mehraj</p>
      </footer>
    </div>
  );
}
