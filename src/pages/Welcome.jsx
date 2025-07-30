import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Welcome() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const nextDate = new Date('2025-09-01');
    const today = new Date();
    const diffTime = nextDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto mt-10 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-pink-600 mb-4"
      >
        Happy 5th Monthsary, Love 💖
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-lg text-gray-700 leading-relaxed mb-6"
      >
        Even though we’re far apart, our hearts beat as one.
        This little space holds our love, memories, and favorite songs just for you.
        I love you endlessly. 🫶
      </motion.p>

      <div className="text-pink-500 text-2xl mb-6 animate-pulse">💌 ✨ 💌</div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="bg-white rounded-xl shadow-lg p-6 border border-pink-200"
      >
        <h2 className="text-xl font-semibold text-pink-600 mb-2">Long Distance, But Never Apart 🌍</h2>
        <p className="text-gray-600">
          I know we’re miles away, but every message, every call, every smile brings you closer.
          We’re building something real, something worth every second of waiting. 💗
        </p>

        <div className="mt-4 text-sm text-pink-500 font-medium">
          ⏳ {daysLeft} days until our 6th monthsary!
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="mt-10 italic text-gray-500"
      >
        “Distance means so little when someone means so much.” — Juswaaaaa ✨
      </motion.div>
    </motion.div>
  );
}
