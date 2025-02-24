import React from 'react';
import { Star } from 'lucide-react';
import Button from './Button';

function Hero() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GitHub Stars */}
        <div className="flex justify-center mb-8 animate-in">
          <a
            href="https://github.com/ad1tyayadav/uichatlib"
            target="_blank"
            rel="noopener noreferrer"
            className="glow inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white transition-all duration-500 hover:scale-105"
          >
            <Star className="w-5 h-5 mr-2" />
            <span className="font-medium">Star us on GitHub</span>
          </a>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-400 dark:to-blue-400 animate-gradient animate-in">
         Ui Chat Lib
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-center mb-8 text-gray-600 dark:text-gray-300 animate-in">
          an open source Typescript/React library for building modern chat interfaces.
          <br />
          Built with <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button href="https://www.npmjs.com/package/aibotchat">
            Get Started
          </Button>
          <Button href="https://github.com/milliondreamsblog/FOSSHACK" variant="secondary">
            View Documentation
          </Button>
        </div>

        {/* Feature Preview */}
        <div className="relative rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-1 animate-in">
          <div className="rounded-lg bg-white dark:bg-gray-900 p-8 backdrop-blur-sm">
            <div className="aspect-video rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-gradient"></div>
              <p className="text-gray-500 dark:text-gray-400 relative z-10">Chat UI Preview Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;