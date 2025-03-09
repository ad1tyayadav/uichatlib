import React from "react";
import { Star, Terminal, Code, Zap, CloudCog, BrainCircuit } from "lucide-react";
import { Button } from "./ui/button";
import { TerminalDemo } from "./TerminalDemo";
import { DemoVideo } from "./DemoVideo";
import { motion } from "framer-motion";
import { ScriptCopyBtnDemo } from "./CopyButton";


function Hero() {
  return (
    <main className="pt-16 pb-24 bg-gradient-to-b from-white to-purple-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 leading-tight">
                Build AI Chat Interfaces <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  in Minutes
                </span>
              </h1>

              <p className="text-xl text-gray-600 mt-6 max-w-2xl">
                Open-source React library for creating production-ready chat interfaces
                with built-in AI integration. Perfect for SaaS products, support systems,
                and AI-powered applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button href="https://www.npmjs.com/package/aibotchat">
                  Get Started
                </Button>
                <Button href="/docs" variant="outline" className="group">
                  <Code className="w-5 h-5 mr-2 text-purple-600 group-hover:text-white" />
                  Explore Docs
                </Button>
              </div>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
              {[
                { icon: CloudCog, text: "Multi-LLM Support" },
                { icon: BrainCircuit, text: "Contextual Memory" },
                { icon: Terminal, text: "Streaming Responses" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <item.icon className="w-8 h-8 text-purple-600 mb-3" />
                  <p className="font-medium text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Terminal */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100/80 mb-6">
              <Zap className="w-5 h-5 mr-2 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">
                Now supporting Gemini 1.5 Pro
              </span>
            </div>
            <TerminalDemo />
          </div>
        </div>

        {/* Integration Section */}
        <div className="mt-24 bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Seamless AI Integration
              </h2>
              <p className="text-gray-600 text-lg">
                Connect with leading AI platforms in minutes
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <img src="https://images.seeklogo.com/logo-png/51/2/cohere-logo-png_seeklogo-513871.png" alt="Cohere" className="opacity-80 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/1280px-Google_Gemini_logo.svg.png" alt="Gemini" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
              <div className="bg-gray-100 px-4 py-2 rounded-lg text-gray-500">
                Coming Soon: OpenAI
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-lg text-gray-500">
                LangGraph Support
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video Section */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-10 blur-3xl -z-10" />

          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-[2px] w-8 bg-purple-600" />
                <span className="text-sm font-semibold tracking-wide uppercase text-purple-600">
                  Live Preview
                </span>
                <div className="h-[2px] w-8 bg-purple-600" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
                <span className="bg-[length:400%_400%] animate-gradient">See It in Action</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch how aibotchat transforms AI integration with real-time streaming,
                contextual memory, and seamless model switching.
              </p>
            </motion.div>
          </div>

          <DemoVideo />
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Start Building Today
          </h3>
          <ScriptCopyBtnDemo className="w-4 h-4" />
        </div>
      </div>
    </main>
  );
}

export default Hero;