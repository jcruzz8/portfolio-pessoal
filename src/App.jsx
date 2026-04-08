import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import About from './components/About';
import Credentials from './components/Credentials';
import PortfolioPage from './pages/PortfolioPage';
import FloatingLines from './components/FloatingLines';

function App() {

  useEffect(() => {
    document.title = "José Cruz | Website Developer";
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-50 antialiased selection:bg-blue-500/30">

        {/* Colocamos a Navbar no topo */}
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <main className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden pt-20">

                {/* O Novo Fundo Animado do React Bits com as TUAS definições */}
                <div className="absolute inset-0 z-0 w-full h-full opacity-60">
                  <FloatingLines
                    linesGradient={["#292ec2", "#2F4BC0", "#2cd2e8"]}
                    animationSpeed={1}
                    interactive={true}
                    bendRadius={5}
                    bendStrength={-0.5}
                    mouseDamping={0.05}
                    parallax={true}
                    parallaxStrength={0.2}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="z-10 relative text-center max-w-4xl mx-auto"
                >

                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl shadow-blue-900/10">
                      <Code2 className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-slate-50">
                    Website <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Developer.</span>
                  </h1>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 group hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                      Ver Portfólio
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a href="#contacto" className="w-full sm:w-auto px-8 py-4 bg-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white rounded-full font-medium transition-all flex items-center justify-center">
                      Entrar em Contacto
                    </a>
                  </div>

                </motion.div>
              </main>
              <TechStack />
              <Projects />
              <Services />
              <About />
              <Credentials />
              <Footer />
            </>
          } />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;