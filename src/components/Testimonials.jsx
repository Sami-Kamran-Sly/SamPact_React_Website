import { FaQuoteLeft } from 'react-icons/fa'
import React from "react";
const Testimonials = () => {
  const testimonials = [
    {
      quote: "They delivered our project on time and with excellent code quality. Highly recommended for small to medium projects.",
      author: "John Doe",
      position: "CTO, TechSolutions Inc."
    },
    {
      quote: "Great communication and professional approach. They helped us handle our overflow projects efficiently.",
      author: "Sarah Smith",
      position: "Project Manager, WebCraft"
    }
  ]

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-16 px-6" id="testimonials">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          Trusted by Software Houses
        </h2>
        <div className="flex flex-col gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-xl p-6 relative border-l-4 border-primary"
            >
              <FaQuoteLeft className="text-primary/20 text-5xl absolute -top-3 -left-3" />
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="mt-4 text-left border-t pt-3">
                <p className="font-semibold text-lg text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials 