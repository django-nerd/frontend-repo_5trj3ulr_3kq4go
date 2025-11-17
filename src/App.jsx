import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-10 border-t">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" className="hover:text-gray-900">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-gray-900">LinkedIn</a>
            <a href="https://x.com" className="hover:text-gray-900">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
