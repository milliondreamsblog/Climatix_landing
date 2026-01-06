import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution/ProblemSolution';
import { TrustedBy } from './components/TrustedBy';

function App() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-surface text-zinc-950 dark:text-zinc-50 font-sans antialiased selection:bg-brand/30 transition-colors duration-300">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <TrustedBy />
    </main>
  );
}

export default App;