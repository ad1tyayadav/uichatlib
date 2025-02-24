import React from "react";
import { Star } from "lucide-react";
import Card from "../Card";

const projects = [
  {
    title: "Rental Management",
    description: "A website where you can find rooms on rents",
    tags: ["Rooms", "Nodejs"],
    image: ".././airbnb.png",
    repo: "https://github.com/ad1tyayadav/Rental-Management",
    homepage: "https://rental-m4nagement.vercel.app/listings",
  },
  {
    title: "Apna Time",
    description: "Book your appointment with Apna Time",
    tags: ["Appointment", "Booking", "Reactjs"],
    image: ".././ApnaTime.png",
    repo: "https://github.com/ad1tyayadav/ApnaTIme",
    homepage: "https://apna-time.vercel.app/",
  },
  {
    title: "Ai Bot Chat",
    description: "AI-powered chat bot assistant",
    tags: ["Developer Tools", "aibotchat", "npm"],
    image: ".././aibotchat.png",
    repo: "https://github.com/milliondreamsblog/FOSSHACK",
    homepage: "https://aibotchatos.vercel.app/",
  },
];

function Showcase() {
  return (
    <section className="pt-24 pb-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* GitHub Star Button */}
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
        <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient animate-in">
          Built with Ai Bot Chat
        </h1>
        <p className="text-xl text-gray-400 mt-4">Explore projects using our chat UI library</p>
      </div>

      {/* Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>

      {/* Closing Message */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-serif font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          More projects are being built using our chatbot library!
        </h2>
        <p className="text-lg text-gray-400 mt-2">
          Are you using our library? Let us know, and we'll feature your project in our showcase!
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf01uE48_aYRF-eG7c0M-yFMVHJ30taH58YKr8M55VbbtbNmA/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 font-moon inline-block px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white transition-all duration-500 hover:scale-105"
        >
          Submit Your Project
        </a>
      </div>
    </section>
  );
}

export default Showcase;