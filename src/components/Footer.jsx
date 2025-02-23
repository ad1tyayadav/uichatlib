import React from 'react';
import { Chatbot } from 'aibotchat'

function Footer() {

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <Chatbot apiKey="Your_Api_Key" aiName='cohere' Title='Sarang' />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        <p className="text-center text-gray-500 dark:text-gray-400 animate-in" style={{ animationDelay: '600ms' }}>
          Built with ❤️ by the uichatlib team
        </p>
      </div>
    </footer>
  );
}

export default Footer;