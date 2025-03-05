import React from "react";
import { Star } from "lucide-react";
import Button from "./Button";
import { TerminalDemo } from "./TerminalDemo";
import { DemoVideo } from "./DemoVideo";

function Hero() {
  return (
    <main className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex w-full justify-center sm:mt-4 sm:mb-6">
          <a
            href="https://github.com/milliondreamsblog/FOSSHACK"
            target="_blank"
            rel="noopener noreferrer"
            className="glow inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white transition-all duration-500 hover:scale-105 shadow-lg"
          >
            <Star className="w-5 h-5 mr-2" />
            <span className="font-medium">Star us on GitHub</span>
          </a>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">

            <h1 className="text-4xl sm:text-6xl font-bold mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient animate-in">
              AI Bot Chat
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl animate-in">
              An open-source TypeScript/React library for building modern chat interfaces.
              <br />
              Built with <span className="font-semibold">React</span> and{" "}
              <span className="font-semibold">Tailwind CSS</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mt-8">
              <Button href="https://www.npmjs.com/package/aibotchat">Get Started</Button>
              <Button href="/docs" variant="secondary">
                View Documentation
              </Button>
            </div>

          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <TerminalDemo />
          </div>
        </div>

        <div className="sm:mt-20">
          <DemoVideo />
        </div>

      </div>
    </main>
  );
}

export default Hero;
