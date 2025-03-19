import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import React from "react";
const Expertise = () => {
  const technologies = [
    { icon: <FaReact />, name: 'React.js' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <FaDatabase />, name: 'MongoDB' },
    { icon: <SiTypescript />, name: 'TypeScript' },
  ]

  return (
    <div className="bg-white py-16 px-4"                         id="expertise">
    <div className="section-padding text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Our Expertise
      </h2>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
        We specialize in modern web technologies that enable us to build fast, scalable, and maintainable applications.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center group hover:text-primary transition-colors duration-300"
          >
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {tech.icon}
            </div>
            <span className="font-semibold text-gray-700 group-hover:text-primary transition-colors duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Expertise 