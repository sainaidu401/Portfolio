import React, { useEffect, useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaJsSquare, FaGitAlt, FaFigma, FaPython } from 'react-icons/fa';

function Skills() {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [technicalSkillsVisible, setTechnicalSkillsVisible] = useState(false);

  const technicalSkills = [
    { icon: <FaReact />, color: 'text-blue-600', label: 'React' },
    { icon: <FaHtml5 />, color: 'text-orange-600', label: 'HTML' },
    { icon: <FaCss3Alt />, color: 'text-blue-500', label: 'CSS' },
    { icon: <FaBootstrap />, color: 'text-purple-600', label: 'Bootstrap' },
    { icon: <FaPhp />, color: 'text-indigo-600', label: 'PHP' },
    { icon: <FaJsSquare />, color: 'text-yellow-500', label: 'JavaScript' },
    { icon: <FaGitAlt />, color: 'text-gray-800', label: 'Git' },
    { icon: <FaFigma />, color: 'text-pink-600', label: 'Figma' },
    { icon: <FaPython />, color: 'text-green-600', label: 'Python' },
  ];

  useEffect(() => {
    const observerHeading = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setHeadingVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const observerTechnical = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setTechnicalSkillsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const targetHeading = document.querySelector('#skills-heading');
    const targetTechnical = document.querySelector('#technical-skills');

    if (targetHeading) observerHeading.observe(targetHeading);
    if (targetTechnical) observerTechnical.observe(targetTechnical);

    return () => {
      if (targetHeading) observerHeading.unobserve(targetHeading);
      if (targetTechnical) observerTechnical.unobserve(targetTechnical);
    };
  }, []);

  return (
    <div id="skills" className="py-12 flex flex-col justify-center items-center mx-4 lg:mx-16">
      {/* Heading */}
      <h2
        id="skills-heading"
        className={`text-4xl font-bold text-gray-900 mb-8 text-center w-full transition-all duration-700 transform ${
          headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        My Skills
      </h2>

      {/* Technical Skills */}
      <div
        id="technical-skills"
        className={`technical-skills lg:w-1/2 mb-6 lg:mb-0 transition-all duration-700 transform ${
          technicalSkillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Technical Skills</h3>
        <div className="grid grid-cols-3 gap-4 px-4">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="card bg-white p-3 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`text-3xl ${skill.color} mb-3`}>{skill.icon}</div>
              <h3 className="text-sm font-semibold text-gray-700">{skill.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
