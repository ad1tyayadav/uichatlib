import React from "react";
import { Github, Twitter } from "lucide-react";
import { Chatbot } from 'aibotchat'

function Footer() {
  const apiKey = import.meta.env.VITE_GEMINI_KEY;

  return (
    <footer className="border-t border-gray-300 bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-semibold text-gray-900">
              aichatbot
            </h2>
            <div className="flex w-5 h-5 space-x-4 mt-3 text-gray-900">
              <a href="https://x.com/_its_Adi" target="_blank" rel="noopener noreferrer">
                <Twitter className="hover:text-gray-600 transition-all" />
              </a>
              <a href="https://github.com/ad1tyayadav/uichatlib" target="_blank" rel="noopener noreferrer">
                <Github className="hover:text-gray-600 transition-all" />
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">
              © 2025 Team Sarang
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-gray-900">Product</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="/docs" className="text-gray-600 hover:underline">Documentation</a></li>
              <li><a href="/showcase" className="text-gray-600 hover:underline">Showcase</a></li>
              <li><a href="https://www.npmjs.com/package/aibotchat" className="text-gray-600 hover:underline">NPM</a></li>
              <li><a href="/pricing" className="text-gray-600 hover:underline">Pricing</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-gray-900">Company</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="text-gray-600 hover:underline">Contact Sales</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="relative z-[1]">
          <Chatbot apiKey={apiKey} aiName='Gemini' Title="Aibotchat" />
        </div>

      </div>
    </footer>
  );
}

export default Footer;
