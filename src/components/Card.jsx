import React from "react";
import { Button } from "./ui/button";

function Card({ project }) {
  return (
    <div className="border border-gray-300 shadow-lg hover:shadow-2xl p-6 rounded-lg shadow-4xl hover:shadow-7xl transition-shadow duration-300">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-2xl font-semibold text-black mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm font-medium bg-purple-600 text-white rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <Button
          href={project.repo || "/"}
          className="text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </Button>
        <Button
          href={project.homepage || "/"}
          className="text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Homepage
        </Button>
      </div>
    </div>
  );
}

export default Card;