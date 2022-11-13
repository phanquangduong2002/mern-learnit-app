import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-[50%] mt-20 mx-auto flex items-center justify-center">
      <motion.a
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.1 }}
        href="https://quangduong-dev.vercel.app"
        target="_blank"
        className="py-3 px-6 text-white font-light tracking-wide bg-[#78c2ad] hover:bg-[#5eb69d] rounded-xl"
      >
        Visit my portfolio
      </motion.a>
    </div>
  );
};

export default About;
