import { FaFileAlt, FaCode, FaRocket } from 'react-icons/fa'
import React from "react";
const HowItWorks = () => {
  const steps = [
    {
      icon: <FaFileAlt />,
      title: "1. Send Your Project",
      description: "Share your project requirements, timeline, and budget with us."
    },
    {
      icon: <FaCode />,
      title: "2. We Develop",
      description: "Our team works on your project with regular updates and communication."
    },
    {
      icon: <FaRocket />,
      title: "3. You Deliver",
      description: "Receive the completed project and deliver it to your client."
    }
  ]

  return (
    <div className="bg-gray-50 mt-5 px-4"       id="process">
      <div className="section-padding">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A simple, straightforward process to help you deliver projects efficiently
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center group hover:shadow-md transition-shadow">
              <div className="text-4xl text-primary mb-4 group-hover:scale-110 transition-transform inline-block">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks 