"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Dashboard = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setProjects([
        { id: 1, name: "Project 1" },
        { id: 2, name: "Project 2" },
        { id: 3, name: "Project 3" },
        { id: 4, name: "Project 4" },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleProjectSelect = (project: any) => {
    setSelectedProject(project);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full bg-black text-white flex flex-col p-6 space-y-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
        <div className="flex flex-col space-y-4">
          <Link href="/logs" className="text-lg hover:text-gray-300">Logs</Link>
          <Link href="/settings" className="text-lg hover:text-gray-300">Settings</Link>
          <Link href="/biving" className="text-lg hover:text-gray-300">Biving</Link>
          <Link href="/invite" className="text-lg hover:text-gray-300">Invite Members</Link>
          <Link href="/ticket" className="text-lg hover:text-gray-300">Raise Ticket</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:w-3/4 w-full p-6 bg-white overflow-auto">
        <h2 className="text-3xl font-semibold mb-6">Select a Project</h2>

        {isLoading ? (
          <div>Loading projects...</div>
        ) : (
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition ${
                  selectedProject?.id === project.id ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleProjectSelect(project)}
              >
                <h3 className="text-xl font-semibold">{project.name}</h3>
              </div>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          {selectedProject ? (
            <button
              onClick={() => alert(`Continuing with ${selectedProject.name}`)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Continue with {selectedProject.name}
            </button>
          ) : null}
          <button
            onClick={() => alert("Create a new project")}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            New Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
