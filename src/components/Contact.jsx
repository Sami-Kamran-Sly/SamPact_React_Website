import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import React from "react";
const Contact = () => {
  return (
    <div className="bg-gray-50" id="contact">
      <div className="section-padding">
        <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Ready to discuss your project? Contact us through any of these channels
        </p>
        
        <div className="max-w-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://wa.me/your_number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="text-2xl" />
              <span>WhatsApp</span>
            </a>
            
            <a 
              href="mailto:your@email.com"
              className="flex items-center justify-center gap-3 bg-primary text-white p-4 rounded-lg hover:bg-secondary transition-colors"
            >
              <FaEnvelope className="text-2xl" />
              <span>Email</span>
            </a>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 