import React, { useEffect, useState } from 'react';
import 'animate.css';  // Ensure animate.css is imported

function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  // Set up Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);  // Set visibility when section is in viewport
      },
      { threshold: 0.5 }  // Trigger when 50% of the section is visible
    );
    
    const target = document.querySelector('#resume');
    if (target) {
      observer.observe(target);  // Observe the Resume section
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div id="resume" className="py-16 flex justify-center">
      <div 
        className={`max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg transition-all duration-700 transform ${isVisible ? 'animate-floating' : 'opacity-0 translate-y-10'} `}
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Resume</h2>
          <div className="w-24 h-1 bg-gray-500 mx-auto mb-4"></div>
          <h3 className="text-3xl font-bold text-gray-800">P. Sai Naidu</h3>
          <p className="text-xl text-gray-600">B.Tech, CSE - 3rd Year</p>
          <p className="text-lg text-gray-500">SRM University of AP | Cloud Computing Specialization</p>
        </div>

        {/* Education Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Education</h3>
          <div className="border-l-4 border-[#457B9D] pl-4 mb-6">
            <p className="text-lg text-gray-700">SRM University of AP</p>
            <p className="text-md text-gray-500">B.Tech in Computer Science & Engineering (CSE)</p>
            <p className="text-sm text-gray-400">Specialization: Cloud Computing</p>
            <p className="text-sm text-gray-400">3rd Year - Expected Graduation: 2026</p>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Hobbies</h3>
          <div className="border-l-4 border-pink-500 pl-4 mb-6">
            <ul className="list-disc text-lg text-gray-700">
              <li>Playing Basketball</li>
              <li>Listening to Music</li>
              <li>Learning New Topics</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Skills</h3>
          <div className="border-l-4 border-[#457B9D] pl-4">
            <p className="text-lg text-gray-700">Cloud Computing, Web Development, Data Structures, Algorithms, and more.</p>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-10 text-center">
          <a
            href="/path/to/resume.pdf"  // Replace this with the actual file path
            download="P_Sai_Naidu_Resume.pdf"
            className="inline-block px-6 py-3 mt-4 bg-[#457B9D] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#3A6B7B] transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
