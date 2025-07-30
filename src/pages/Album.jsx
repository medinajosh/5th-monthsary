import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

import photo1 from '../assets/eunice.jpg';
import Litmatch from '../assets/litmatch.jpg';
import Us from '../assets/me and you.png';
import Talk from '../assets/calls.jpg';
import calls from '../assets/goodnights.jpg';
import Oww from '../assets/smile.jpg';
import Mata from '../assets/eyes.jpg';
import You from '../assets/fav.jpg';

const photos = [
  {
    src: Litmatch,
    title: 'When It All Began 💫',
    caption: 'The moment we met, even virtually, felt like fate whispering, "This is the one."'
  },
  {
    src: Us,
    title: 'Miles Apart, Hearts Aligned 💞',
    caption: 'Though oceans may lie between us, our hearts beat in sync every second.'
  },
  {
  src: Talk,
  title: 'Late-Night Talks, Early-Morning Smiles 🌙📞',
  caption: 'Every “good night” call makes me feel like I’m right there beside you, holding you close through the stars.'
  },
  {
  src: calls,
  title: 'Your Voice, My Comfort 🎧🫶',
  caption: 'No matter how hard the day is, your voice heals every ache like magic.'
  },
  {
    src: photo1,
    title: 'My Future⏳💍',
    caption: 'One day, this LDR will just be a memory... and we’ll wake up next to each other  forever.'
  },
  {
  src: Mata,
  title: 'Those Eyes That See My Soul 👀💖',
  caption: 'The way you look at me, even on video call, makes me feel seen, understood, and truly loved.'
  },
  {
  src: Oww,
  title: 'Your Smile, My Sunshine 🌞😊',
  caption: 'No matter how far you are, your smile lights up my world and makes everything feel right. It’s my favorite view, every time.'
  },
  {
  src: You,
  title: 'My Favorite Person, Always 🥹💕',
  caption: 'It’s not just your beauty, it’s your soul. I love who you are thoughtful, strong, and everything I prayed for.'
  }
];

export default function Album() {
  const [index, setIndex] = useState(0);
  const nextSlide = () => setIndex((index + 1) % photos.length);
  const prevSlide = () => setIndex((index - 1 + photos.length) % photos.length);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] p-4 overflow-hidden bg-gradient-to-b from-pink-100 to-white">
      
      {/* Floating Hearts */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400"
            initial={{ opacity: 0, y: '100vh', x: `${Math.random() * 100}%`, scale: 0.5 }}
            animate={{ y: '-10vh', opacity: [0, 1, 0] }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            <FaHeart className="text-xl md:text-2xl" />
          </motion.div>
        ))}
      </div>

      {/* Slide Display */}
      <div className="relative z-10 w-full max-w-xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={photos[index].src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-3xl shadow-xl"
          >
            <img
              src={photos[index].src}
              alt="memory"
              className="rounded-xl mb-4 w-full object-cover max-h-[400px]"
            />
            <h2 className="text-2xl font-bold text-pink-600 mb-2">{photos[index].title}</h2>
            <p className="text-gray-700 italic text-lg whitespace-pre-line">{photos[index].caption}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex gap-6 mt-6">
        <button
          onClick={prevSlide}
          className="bg-pink-400 hover:bg-pink-500 text-white px-5 py-2 rounded-full shadow-md transition"
        >
          ⬅️ Previous
        </button>
        <button
          onClick={nextSlide}
          className="bg-pink-400 hover:bg-pink-500 text-white px-5 py-2 rounded-full shadow-md transition"
        >
          Next ➡️
        </button>
      </div>

      {/* Signature Heart */}
      <FaHeart className="text-pink-500 text-5xl mt-6 animate-ping delay-500" />
      <p className="mt-2 text-center text-sm text-gray-500 italic">Made with love for my lovelove 💗</p>
    </div>
  );
}
