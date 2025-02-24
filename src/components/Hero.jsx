import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Button from "./Button";

function Hero() {
  const command = "npm i aibotchat";
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [index, setIndex] = useState(0);


  useEffect(() => {
    if (index < command.length) {
      const timeout = setTimeout(() => {
        setDisplayedCommand((prev) => prev + command[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedCommand("");
        setIndex(0);
      }, 2000);
    }
  }, [index]);

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8 animate-in">
          <a
            href="https://github.com/milliondreamsblog/FOSSHACK"
            target="_blank"
            rel="noopener noreferrer"
            className="glow inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white transition-all duration-500 hover:scale-105"
          >
            <Star className="w-5 h-5 mr-2" />
            <span className="font-medium">Star us on GitHub</span>
          </a>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient animate-in">
          Ai Bot Chat
        </h1>

        <p className="text-xl sm:text-2xl text-center mb-8 text-gray-100 dark:text-gray-600 animate-in">
          an open source TypeScript/React library for building modern chat interfaces.
          <br />
          Built with <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span>.
        </p>

        <div className="flex justify-center mb-8">
          <div className="bg-black text-green-400 font-mono text-lg p-3 px-6 rounded-lg shadow-lg border border-gray-700 w-fit">
            <span className="text-gray-400">$ </span>
            {displayedCommand}
            <span className="animate-pulse">|</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button href="https://www.npmjs.com/package/aibotchat">Get Started</Button>
          <Button href="https://github.com/milliondreamsblog/FOSSHACK" variant="secondary">
            View Documentation
          </Button>
        </div>

        <div className="relative rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-1 animate-in">
          <div className="rounded-lg bg-white p-8 backdrop-blur-sm">
            <div className="aspect-video rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative overflow-hidden">
              <video className="w-full h-full rounded-lg" autoPlay muted loop >
                <source src=".././Aibotchat.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
