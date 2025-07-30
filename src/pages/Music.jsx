import { FaMusic } from 'react-icons/fa';
import { motion } from 'framer-motion';
import hilinggg from '../assets/hilinggg.mp3'; // ✅ Correct import path

export default function Music() {
  return (
    <div className="relative flex flex-col items-center justify-center mt-16 px-4">
      {/* Floating Musical Notes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300"
          initial={{ opacity: 0, y: 100, x: `${20 + i * 10}%` }}
          animate={{ y: -100, opacity: [0, 1, 0] }}
          transition={{
            duration: 6 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5
          }}
        >
          🎵
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white p-6 rounded-3xl shadow-xl text-center max-w-lg relative z-10"
      >
        <FaMusic className="text-4xl text-pink-500 mb-2 animate-pulse" />
        <h2 className="text-3xl font-bold text-pink-600 mb-4">Our Song – “Hiling” 🎶</h2>

        <div className="relative mb-4">
          <div className="w-40 h-40 mx-auto rounded-full border-[6px] border-pink-400 shadow-lg animate-pulse flex items-center justify-center">
            <audio controls autoPlay loop className="w-36">
              <source src={hilinggg} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        <p className="text-gray-700 text-md italic leading-relaxed">
          This song holds every bit of what I feel for you — every note, every word, it’s all us.
          <br />
          I hope when you hear <strong>“Hiling”</strong>, you feel my love from miles away.
        </p>
      </motion.div>
    </div>
  );
}
