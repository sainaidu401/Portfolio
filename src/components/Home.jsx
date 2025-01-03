import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Home() {
  const [visible, setVisible] = useState(false);

  // Effect to trigger animation when the page is loaded
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-8 ">
      
      {/* Text Section */}
      <motion.div
        className="mr-32 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -50 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold">Hi, I'm Sai Naidu</h1>
        <p className="text-2xl mt-4">Cloud Engineer & Tech Enthusiast</p>
        <p className="text-lg mt-6 font-medium">
          I specialize in building scalable cloud solutions and exploring new technologies.
          <br />
          Let's connect and innovate together!
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-64 h-64 rounded-full overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://img.freepik.com/premium-photo/simple-3d-character-illustrations-depicting-different-jobs-careers-clean-white-background_655090-260406.jpg"
          alt="Sai Naidu"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}

export default Home;
