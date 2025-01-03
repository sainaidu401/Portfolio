import React, { useEffect, useState } from "react";

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => [...prev, entry.target.id]);
          } else {
            setVisibleProjects((prev) => prev.filter((id) => id !== entry.target.id));
          }
        });
      },
      { threshold: 0.5 }
    );

    const projects = document.querySelectorAll(".project-card");
    projects.forEach((project) => observer.observe(project));

    return () => {
      projects.forEach((project) => observer.unobserve(project));
    };
  }, []);

  const projectData = [
    {
      id: "project1",
      image: "https://digital55.com/wp-content/uploads/2022/01/Single_Page_App.png",
      name: "Single Page App",
      description: "ShopEase is a user-friendly platform with a wide product range, ensuring a seamless shopping experience. This report covers its development.",
      link: "/project1.html",
    },
    {
      id: "project2",
      image:
        "https://img.freepik.com/premium-vector/chat-app-logo-design-template-can-be-used-icon-chat-application-logo_605910-1724.jpg",
      name: "Chat Application",
      description: "This project develops a chat app using web technologies, offering real-time communication accessible on any device with internet.",
      link: "/Chatapp/index.html",
    },
    {
      id: "project3",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a137cf167133333.6423fe107c9de.png",
      name: "Game Website",
      description:
        "Project 3 focuses on user-friendly design and scalability, using modern frameworks and best practices.",
      link: "#",
    },
    {
      id: "project4",
      image: "https://media.cakeresume.com/image/upload/v1642257802/se4x900lxppdhdlbdlyv.png",
      name: "Movie Reccomendation",
      description: "This project explores data visualization and analytics with interactive graphs.",
      link: "#",
    },
    {
      id: "project5",
      image: "https://cdn-icons-png.flaticon.com/512/9504/9504073.png",
      name: "Disk Management",
      description: "An advanced portfolio showcasing dynamic design and responsive layouts.",
      link: "/Disktrack/index.html",
    },
  ];

  return (
    <div id="projects" className="py-16 flex justify-center">
      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Projects</h2>
          <div className="w-24 h-1 bg-gray-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Here are some of the projects I’ve worked on:</p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex space-x-8">
            {projectData.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className={`project-card transform transition-all p-6 rounded-lg bg-white min-w-[20rem] h-auto flex flex-col justify-between items-center ${
                  visibleProjects.includes(project.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-3/4 h-48 object-cover rounded-lg shadow-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-md text-gray-600 mb-4 text-center leading-relaxed">{project.description}</p>
                <a
                  href={project.link}
                  className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
