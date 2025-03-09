import React from "react";
import { Github, Twitter, MessageCircle, Zap, Mail } from "lucide-react";
import { Chatbot } from 'aibotchat';
import { motion } from "framer-motion";
import { Button } from "./ui/button";

function Footer() {
  const apiKey = import.meta.env.VITE_GEMINI_KEY;

  return (
    <footer className="relative border-t border-gray-200 bg-gradient-to-b from-white to-purple-50/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                aibotchat
              </span>
            </div>
            
            <p className="text-gray-600 text-sm">
              Building conversational AI interfaces for the modern web
            </p>

            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://x.com/_its_Adi" 
                target="_blank" 
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
              >
                <Twitter className="w-5 h-5 text-purple-600" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://github.com/ad1tyayadav/uichatlib" 
                target="_blank" 
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
              >
                <Github className="w-5 h-5 text-purple-600" />
              </motion.a>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Product</h3>
            <ul className="space-y-3">
              {[
                ['Documentation', '/docs'],
                ['Showcase', '/showcase'],
                ['NPM Package', 'https://www.npmjs.com/package/aibotchat'],
                ['Pricing', '/pricing']
              ].map(([text, href]) => (
                <li key={text}>
                  <a 
                    href={href} 
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors group"
                  >
                    <span>{text}</span>
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Company</h3>
            <ul className="space-y-3">
              {[
                ['Contact Sales', '#'],
                ['Blog', '#'],
                ['Terms of Service', '#'],
                ['Privacy Policy', '#']
              ].map(([text, href]) => (
                <li key={text}>
                  <a 
                    href={href} 
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors group"
                  >
                    <span>{text}</span>
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Stay Updated</h3>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="absolute right-2 top-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Join our newsletter for product updates
            </p>
          </motion.div>
        </div>

        {/* Floating Chat Bot */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="absolute right-8 -top-24 shadow-xl rounded-2xl overflow-hidden border border-gray-200"
        >
          <div className="relative z-[1]">
            <Chatbot 
              apiKey={apiKey} 
              aiName='Gemini' 
              Title="Need Help?"
              className="w-80 h-96"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-5 -z-10" />
        </motion.div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Team Sarang. Open-source under MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;