import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const codeSnippets = [
  'function init() {', 
  'const data = await res.json();', 
  'return <App />;', 
  'export default App;', 
  'console.log("Hello World");', 
  'git commit -m "update"',
  'docker build -t myapp .', 
  'npm run build', 
  'import { useState } from "react";',
  'padding: 2rem;', 
  '<div className="flex">', 
  'border-radius: 50%;',
  'while (true) {', 
  'if (res.status === 200) {', 
  'catch (err) {',
  '<h1>Portfolio</h1>', 
  'gap: 1rem;', 
  'justify-content: center;',
  'npm install framer-motion', 
  'node server.js', 
  'SELECT * FROM users;',
  'useEffect(() => {}, [])', 
  'const [state, setState] = useState()', 
  'return data;',
  '// Initialize application',
  '<motion.div animate={{ x: 0 }} />'
];

const BackgroundAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate falling code snippets
  const columns = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
    left: `${(i / 25) * 100}%`, // Distribute evenly across width
    duration: Math.random() * 20 + 20, // 20-40s (slow falling)
    delay: Math.random() * -40,
    fontSize: Math.random() * 0.4 + 0.8, // 0.8 to 1.2 rem
    opacity: Math.random() * 0.15 + 0.05, // 0.05 to 0.20
  }));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[var(--bg-color)]">
      
      {/* Animated Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" 
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Raining Code Snippets */}
      {columns.map((col) => (
        <motion.div
          key={col.id}
          initial={{ top: '-15%' }}
          animate={{ top: '115%' }}
          transition={{
            duration: col.duration,
            repeat: Infinity,
            ease: "linear",
            delay: col.delay,
          }}
          className="absolute font-mono whitespace-nowrap text-[var(--color-primary)] select-none"
          style={{ 
            left: col.left, 
            fontSize: `${col.fontSize}rem`,
            opacity: col.opacity,
            textShadow: '0 0 10px var(--color-primary)'
          }}
        >
          {col.text}
        </motion.div>
      ))}

      {/* Ambient glowing spots to give depth */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-[var(--color-primary)] opacity-[0.02] blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-[var(--color-secondary)] opacity-[0.02] blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
    </div>
  );
};

export default BackgroundAnimation;
