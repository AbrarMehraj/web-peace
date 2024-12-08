'use client'

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { versions } from "./versions";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string; // Add target prop
  rel?: string;    // Add rel prop
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, target, rel }) => (
  <a href={href} onClick={onClick} target={target} rel={rel} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
    {children}
  </a>
);

interface MobileMenuProps {
  isOpen: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, menuRef }) => (
  <div ref={menuRef} className={`absolute top-16 left-0 w-full bg-gray-900 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'} md:hidden`}>
    <div className="flex flex-col items-center justify-center space-y-6 py-6">
      <NavLink href="#features" onClick={(e) => { e.preventDefault(); document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' }); }}>Features</NavLink>
      <NavLink href="#screenshots" onClick={(e) => { e.preventDefault(); document.querySelector('#screenshots')?.scrollIntoView({ behavior: 'smooth' }); }}>Screenshots</NavLink>
      <NavLink href="https://github.com/AbrarMehraj/web-peace/issues" target="_blank" rel="noopener noreferrer">
        Feedback & Issues
      </NavLink>
      <NavLink href={versions[0].link}>
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
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null); // Add a ref for the toggle button

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        toggleButtonRef.current && 
        !toggleButtonRef.current.contains(event.target as Node) // Check if the click is on the toggle button
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="fixed top-0 left-0 w-full bg-gray-900 z-40 shadow-custom-heavy">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-blue-400 transition-colors duration-300 hover:text-blue-300">Prayer Mode</h1>
            <Image src="/app-icon.png" alt="App Icon" width={32} height={32} className="ml-2 bg-white rounded-full transition-transform duration-300 hover:scale-110" />
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#screenshots">Screenshots</NavLink>
            <NavLink href="https://github.com/AbrarMehraj/web-peace/issues" target="_blank" rel="noopener noreferrer">
              Feedback & Issues
            </NavLink>
            <NavLink href={versions[0].link}>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </span>
            </NavLink>

          </div>
          <button
            ref={toggleButtonRef} // Attach the ref to the toggle button
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 md:hidden"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} menuRef={menuRef} />

      <main className="pt-20">
        <section className="bg-gray-800 py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold text-blue-300 mb-6">Enjoy Uninterrupted Prayer Time</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">Experience tranquility during your prayers with Prayer Mode app. By automatically enabling Do Not Disturb (DND) mode during prayer times, Prayer Mode helps you maintain focus and devotion without any distractions.</p>
            <div className="flex flex-col items-center">
              <a
                href={versions[0].link}
                download
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 inline-block hover:shadow-lg hover:scale-105 mb-4"
              >
                Download Latest Version
              </a>
              {/* <div className="text-center">
                <p className="text-gray-400">Version {versions[0].v}</p>
                {versions[0]?.new && (
                  <p className="text-green-400 mt-1">{versions[0].new}</p>
                )}
              </div> */}
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-semibold text-blue-300 mb-10 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-semibold text-blue-300 mb-4">Intelligent Ringer Management</h4>
                <p className="text-gray-400">Seamlessly switches between silent and normal modes based on your personalized schedule.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-semibold text-blue-300 mb-4">Auto Call Management</h4>
                <p className="text-gray-400">Automatically declines incoming calls during prayer times, ensuring uninterrupted spiritual moments.</p>
              </div>  
              
              <div className="bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-semibold text-blue-300 mb-4">Auto SMS Response</h4>
                <p className="text-gray-400">Sends automatic SMS replies to missed calls during prayer times, letting others know you are praying.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-semibold text-blue-300 mb-4">Flexible Silent Periods</h4>
                <p className="text-gray-400">Define precise start and end times for your desired quiet moments throughout the day.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-semibold text-blue-300 mb-4">Intuitive User Experience</h4>
                <p className="text-gray-400">Effortlessly manage your silent periods and preferences with our user-friendly interface.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-semibold text-blue-300 mb-4">Prayer Time Sync</h4>
                <p className="text-gray-400">Synchronize the app with your local prayer times for automated management of calls and notifications.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="screenshots" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-semibold text-blue-300 mb-10 text-center">App Preview</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <Image src="/ss1.png" alt="Peace App Interface" width={250} height={500} className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" />
              <Image src="/ss2.png" alt="Peace App Settings" width={250} height={500} className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" />
              <Image src="/ss3.png" alt="Peace App Schedule" width={250} height={500} className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" />
              <Image src="/ss4.png" alt="Peace App Schedule" width={250} height={500} className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" />
              <Image src="/ss5.png" alt="Peace App Schedule" width={250} height={500} className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        </section>

        <section id="feedback" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-semibold text-blue-300 mb-6">Feedback & Issues</h3>
              <p className="text-xl text-gray-400 mb-8">
                We value your feedback and are here to help with any issues you encounter. Please visit our GitHub issues page to report any problems or to provide feedback.
              </p>
              <a
                href="https://github.com/AbrarMehraj/web-peace/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 inline-block hover:shadow-lg hover:scale-105"
              >
                Report an Issue
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Prayer Mode. Developed by Abrar Mehraj</p>
        </div>
      </footer>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
