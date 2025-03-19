import { FaClock, FaCode, FaPiggyBank, FaCheckCircle } from 'react-icons/fa'
import React from "react";
const WhyUs = () => {
  const benefits = [
    {
      icon: <FaPiggyBank className="text-4xl text-primary" />,
      title: "Cost-Effective",
      description: "Competitive rates that help you maintain profitability on smaller projects"
    },
    {
      icon: <FaClock className="text-4xl text-primary" />,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality"
    },
    {
      icon: <FaCode className="text-4xl text-primary" />,
      title: "Quality Code",
      description: "Clean, maintainable code following best practices"
    },
    {
      icon: <FaCheckCircle className="text-4xl text-primary" />,
      title: "Reliable Partner",
      description: "Consistent communication and on-time delivery"
    }
  ]

  return (
<div className="bg-gray-50 py-16 px-4"      id="why-us"  >
  <div className="section-padding">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
      Why Outsource to Us?
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center border border-gray-200"
        >
          <div className="mb-4 text-primary text-4xl">{benefit.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {benefit.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default WhyUs 