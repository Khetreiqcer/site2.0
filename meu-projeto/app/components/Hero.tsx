'use client'
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen text-center"
    >
      <h1 className="text-5xl font-bold">Bem-vindo ao meu site</h1>
      <p className="mt-4 text-xl text-gray-600">Desenvolvedor Full Stack e entusiasta de design minimalista</p>
    </motion.div>
  );
}
