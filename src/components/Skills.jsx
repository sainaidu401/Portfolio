import React, { useEffect, useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaJsSquare, FaGitAlt, FaFigma, FaPython } from 'react-icons/fa';

function Skills() {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [technicalSkillsVisible, setTechnicalSkillsVisible] = useState(false);
  const [professionalSkillsVisible, setProfessionalSkillsVisible] = useState(false);

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

  const professionalSkills = [
    { label: 'Teamwork', level: 95 },
    { label: 'Creativity', level: 90 },
    { label: 'Problem Solving', level: 90 },
    { label: 'Communication', level: 75 },
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

    const observerProfessional = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setProfessionalSkillsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const targetHeading = document.querySelector('#skills-heading');
    const targetTechnical = document.querySelector('#technical-skills');
    const targetProfessional = document.querySelector('#professional-skills');

    if (targetHeading) observerHeading.observe(targetHeading);
    if (targetTechnical) observerTechnical.observe(targetTechnical);
    if (targetProfessional) observerProfessional.observe(targetProfessional);

    return () => {
      if (targetHeading) observerHeading.unobserve(targetHeading);
      if (targetTechnical) observerTechnical.unobserve(targetTechnical);
      if (targetProfessional) observerProfessional.unobserve(targetProfessional);
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

      <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-10 lg:space-y-0 lg:space-x-10">

        {/* Technical Skills */}
        <div
          id="technical-skills"
          className={`technical-skills lg:w-1/2 mb-6 lg:mb-0 transition-all duration-700 transform ${
            technicalSkillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Technical Skills</h3>
          <div className="grid grid-cols-3 gap-4 px-4"> {/* Adjusted gap for better spacing */}
            {technicalSkills.map((skill, index) => (
              <div key={index} className="card bg-white p-3 shadow-lg rounded-lg text-center">
                <div className={`text-3xl ${skill.color} mb-3`}>{skill.icon}</div>
                <h3 className="text-sm font-semibold text-gray-700">{skill.label}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div
          id="professional-skills"
          className={`professional-skills lg:w-1/2 pl-8 transition-all duration-700 transform ${
            professionalSkillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Professional Skills</h3>
          <div className="grid grid-cols-2 gap-6">
            {professionalSkills.map((skill, index) => (
              <div key={index} className="skill-progress flex flex-col items-center">
                <h3 className="text-xl font-semibold text-gray-700">{skill.label}</h3>
                <div className="relative w-24 h-24">
                  <svg
                    className="absolute top-0 left-0 transform -rotate-90"
                    width="100%"
                    height="100%"
                    viewBox="0 0 36 36"
                    style={{ transform: 'rotate(-90deg)' }}
                  >
                    <circle
                      className="circle-background"
                      cx="18"
                      cy="18"
                      r="15.91549431"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                      fill="none"
                    />
                    <circle
                      className="circle-progress"
                      cx="18"
                      cy="18"
                      r="15.91549431"
                      stroke="#4CAF50"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={`${skill.level} 100`}
                    />
                  </svg>
                  <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg font-semibold">
                    {skill.level}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
