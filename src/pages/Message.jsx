import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Message() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-50 to-white py-12 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative bg-white rounded-3xl shadow-xl p-8 max-w-2xl w-full border-4 border-pink-200 overflow-hidden"
      >
        {/* Floating glowing hearts */}
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-pink-300 text-sm opacity-40 animate-pulse"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          >
            <FaHeart className="drop-shadow-lg" />
          </motion.span>
        ))}

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-pink-600 mb-6 drop-shadow-sm animate-pulse tracking-wide">
          To the Love of My Life 💌
        </h2>

        {/* Typing animation for message */}
        {showText && (
          <motion.p
            className="text-xl text-gray-800 leading-relaxed whitespace-pre-line font-[Dancing_Script] tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Happy 5th Monthsary, my love. 💕

            It's amazing how deeply connected we are even with all this distance between us. Every morning I wake up thinking of you, and every night, I fall asleep with you in my heart. You've become my home, even from miles away.

            Baby, thank you for being so patient and so understanding. You've brought a light into my life that I didn’t even know I was missing. I’ll forever be grateful for your love, your laugh, your voice on the phone when I need it most, and every little thing that makes me happy.

            I wish I could hold your hand right now, look into your eyes, and tell you how much I love you. But until that day comes until I can finally be by your side please carry this message in your heart. This little page, this album, this gift… it's my way of sending my love to you in every possible way.

            I love you more than words can say. Here's to all our monthsaries, anniversaries, and forever. 💖

            With all of me,  
            Your baby *Juswaaaaa* 🫶
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
