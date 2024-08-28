import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-blue-400">Peace</h1>
        <nav className="space-x-6">
          <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Features</a>
          <a href="#screenshots" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Screenshots</a>
          <a href="#download" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Download</a>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-blue-300 mb-4">Enjoy Your Prayer Time Without Interruptions</h2>
          <p className="text-xl text-gray-400 mb-8 mx-auto max-w-2xl">Experience tranquility in your prayer moments. Peace app seamlessly activates Do Not Disturb (DND) during your prayer times, creating a distraction-free space for deeper reflection and spiritual connection.</p>
        </section>
        
        <section id="features" className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-300 mb-3">Intelligent Ringer Management</h4>
              <p className="text-gray-400">Seamlessly switches between silent and normal modes based on your personalized schedule.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-300 mb-3">Flexible Silent Periods</h4>
              <p className="text-gray-400">Define precise start and end times for your desired quiet moments throughout the day.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-300 mb-3">Intuitive User Experience</h4>
              <p className="text-gray-400">Effortlessly manage your silent periods and preferences with our user-friendly interface.</p>
            </div>
          </div>
        </section>
        
        <section id="screenshots" className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">App Preview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <Image src="/screenshot1.jpeg" alt="Peace App Interface" width={250} height={500} className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer" />
            <Image src="/screenshot2.jpeg" alt="Peace App Settings" width={250} height={500} className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer" />
            <Image src="/screenshot3.jpeg" alt="Peace App Schedule" width={250} height={500} className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer" />
          </div>
        </section>
        
        <section id="download" className="text-center">
          <h3 className="text-2xl font-semibold text-blue-300 mb-6">Get Peace Now</h3>
          <a
            href="/peace.apk"
            download
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 inline-block"
          >
            Download Peace APK
          </a>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-400">
        <p>&copy; 2024 Peace App. Developed by Abrar Mehraj</p>
      </footer>
    </div>
  );
}
