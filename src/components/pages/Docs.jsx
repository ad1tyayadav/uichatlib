import React from "react";

function Docs() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl mt-10 font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-6">aibotchat Documentation</h1>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🚀 Overview</h2>
        <p>
          <strong>aibotchat</strong> is an open-source UI library for integrating AI-powered chat interfaces into modern web applications.
          Designed for <strong>React</strong> and <strong>Next.js</strong>, it provides a sleek, customizable chat component with seamless AI model integration.
        </p>
      </section>

      {/* Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">✨ Features</h2>
        <ul className="list-disc pl-6">
          <li>✅ Pre-built, customizable chat UI</li>
          <li>✅ Seamless integration with Cohere & Gemini AI</li>
          <li>✅ Real-time AI responses with streaming (Coming Soon)</li>
          <li>✅ Works with React and Next.js (SSR Support Planned)</li>
          <li>✅ Theming and Custom Styles</li>
          <li>✅ Chat History Management (Planned)</li>
        </ul>
      </section>

      {/* Installation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📦 Installation</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-md">
          <code>npm install aibotchat</code>
        </pre>
        <p className="mt-2">or using yarn:</p>
        <pre className="bg-gray-900 text-white p-4 rounded-md">
          <code>yarn add aibotchat</code>
        </pre>
      </section>

      {/* Quick Start */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">⚡ Quick Start</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
          <code>
            {`import React from 'react';
import { Chatbot } from 'aibotchat';

function App() {
  return (
    <div>
      <h1>My Chat App</h1>
      <Chatbot apiKey="Your_Api_Key" aiName="AI_Name" Title="Your_Brand_Name" />
    </div>
  );
}

export default App;`}
          </code>
        </pre>
      </section>

      {/* AI Support */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🤖 AI Backend Support</h2>
        <p>
          Currently, <strong>aibotchat</strong> supports the following AI models:
        </p>
        <ul className="list-disc pl-6">
          <li><strong>Cohere AI</strong> (Natural Language Processing)</li>
          <li><strong>Gemini AI</strong> (Google AI Integration)</li>
        </ul>
        <p className="mt-2">🚧 More AI models (OpenAI, LangGraph) will be supported soon!</p>
      </section>

      {/* Future Goals */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🔮 Future Goals</h2>
        <ul className="list-disc pl-6">
          <li>📌 Train AI models using your business data</li>
          <li>📌 Advanced analytics for chat interactions</li>
          <li>📌 Customizable chatbot personalities</li>
          <li>📌 API support for multi-platform AI integration</li>
        </ul>
      </section>
    </div>
  );
}

export default Docs;
