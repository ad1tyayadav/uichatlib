import React from "react";

function Pricing() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-16 bg-gray-50">
      <h2 className="font-serif text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
        Pricing Plans
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        Flexible pricing for everyone.
      </p>

      <div className="bg-white p-10 rounded-xl shadow-xl text-center w-full max-w-3xl border border-gray-100">
        <h3 className="text-3xl font-semibold mb-4">Coming Soon 🚀</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          We're working on our pricing plans. Stay tuned for exciting offers and
          AI-powered features.
        </p>

        <div className="mt-8 flex justify-center">
          <button className="px-6 py-3 text-lg font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-md hover:scale-105 transition-all">
            Get Notified
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
