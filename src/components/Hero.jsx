import { FaArrowRight } from 'react-icons/fa'
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (

    <div className="bg-white flex justify-center items-center text-center px-6 md:px-12">
    <motion.div
      className="section-padding min-h-[80vh] flex flex-col justify-center w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="max-w-3xl w-full mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-wide">
          Don't Reject Small Projects, <br />
          <span className="text-primary">Outsource Them to Us!</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
          We help software houses handle their overflow of small projects with
          quality code and fast turnaround times.
        </p>
        <motion.a
          href="#contact"
          className="btn-primary inline-flex items-center gap-2 transition-transform duration-300 px-6 py-3 text-lg sm:text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk <FaArrowRight />
        </motion.a>
      </motion.div>
    </motion.div>
  </div>
    // <div className="bg-white flex justify-center items-center">
    //   <div className="section-padding min-h-[80vh] flex flex-col justify-center">
    //     <div className="max-w-3xl">
    //       <h1 className="text-5xl font-bold leading-tight mb-6">
    //         Don't Reject Small Projects, <br />
    //         <span className="text-primary">Outsource Them to Us!</span>
    //       </h1>
    //       <p className="text-xl text-gray-600 mb-8">
    //         We help software houses handle their overflow of small projects with quality code and fast turnaround times.
    //       </p>
    //       <a href="#contact" className="btn-primary inline-flex items-center gap-2">
    //         Let's Talk <FaArrowRight />
    //       </a>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Hero 