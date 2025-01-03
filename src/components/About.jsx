import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import AOS CSS

function About() {
  useEffect(() => {
    // Initialize AOS with continuous animation on scroll
    AOS.init({
      duration: 1000,  // duration of the animation
      easing: 'ease-in-out',  // easing function
      once: false,  // ensure animation triggers every time the element enters the viewport
      mirror: true,  // trigger animation when scrolling back up as well
    });
  }, []);

  return (
    <div id="about" className="p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6" data-aos="fade-up">About Me</h2>
        <p className="text-lg text-gray-700 mb-4 md:text-xl" data-aos="fade-up" data-aos-delay="200">
          Hello! I'm <span className="font-bold text-blue-600">P. Sai Naidu</span>, a passionate Cloud Engineer with a strong foundation in designing and deploying scalable, high-performance cloud solutions. With a keen eye for detail and a focus on delivering innovative solutions, I specialize in optimizing cloud infrastructure and improving system reliability through automation and cutting-edge technologies.
        </p>
        <p className="text-lg text-gray-700 mb-6 md:text-xl" data-aos="fade-up" data-aos-delay="400">
          My journey started with a deep interest in cloud computing, and I've since honed my skills in various cloud platforms, including AWS, Azure, and Google Cloud. I thrive on solving complex challenges and building systems that enhance user experience and business operations. My expertise lies in leveraging cloud architectures to create scalable, secure, and efficient systems.
        </p>
        <p className="text-lg text-gray-700 md:text-xl" data-aos="fade-up" data-aos-delay="600">
          Let's connect and build the future of cloud computing together!
        </p>
      </div>
    </div>
  );
}

export default About;
