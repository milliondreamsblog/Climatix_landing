import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface WordRotateProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const WordRotate: React.FC<WordRotateProps> = ({
  words,
  duration = 2500,
  className,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className={`overflow-hidden inline-flex relative align-top h-[1.2em] w-auto ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: [0.2, 1, 0.4, 1] }} 
          className="absolute left-0 top-0 whitespace-nowrap"
        >
          {words[index]}
        </motion.div>
        {/* Invisible spacer to set width based on longest word (optional, or just let it flow) */}
        <div className="opacity-0 pointer-events-none invisible">{words[index]}</div> 
      </AnimatePresence>
    </div>
  );
};