import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import Welcome from './pages/Welcome';
import Album from './pages/Album';
import Music from './pages/Music';
import Message from './pages/Message';
import { motion } from 'framer-motion';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // 2 sec loading then show intro for 3 sec
    setTimeout(() => {
      setLoading(false);
      setShowIntro(true);
      setTimeout(() => setShowIntro(false), 3000);
    }, 2000);
  }, []);

  // ❤️ Loading Screen
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-pink-100">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="text-6xl text-pink-500"
        >
          <FaHeart />
        </motion.div>
      </div>
    );
  }

  // 💕 Intro Splash Screen
  if (showIntro) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300 text-pink-800 text-center px-4 font-[cursive]">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-4"
        >
          Happy 5th Monthsary 💘
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl"
        >
          To the love of my life 💖
        </motion.p>
      </div>
    );
  }

  // 🎀 Main App (your current design kept intact)
  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300 overflow-hidden text-center px-4 py-6 font-[cursive]">
        
        {/* Floating Hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-400"
              initial={{ opacity: 0, y: '100vh', x: `${Math.random() * 100}%`, scale: 0.5 }}
              animate={{ y: '-10vh', opacity: [0, 1, 0] }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.8
              }}
            >
              <FaHeart className="text-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl font-extrabold text-pink-700 flex justify-center items-center gap-2 mb-4"
        >
          <FaHeart className="text-red-500 animate-pulse" />
          Happy 5th Monthsary Love 💘
        </motion.header>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative z-10 flex flex-wrap justify-center gap-6 text-lg font-medium mb-10"
        >
          {[ 
            { path: '/', label: 'Welcome' },
            { path: '/album', label: 'Photo Album' },
            { path: '/music', label: 'Music' },
            { path: '/message', label: 'Love Letter' }
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition duration-300 ${
                  isActive
                    ? 'bg-white text-pink-700 shadow-md scale-105'
                    : 'text-white bg-pink-500 hover:bg-white hover:text-pink-600 shadow'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </motion.nav>

        {/* Page Routes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/album" element={<Album />} />
            <Route path="/music" element={<Music />} />
            <Route path="/message" element={<Message />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}
