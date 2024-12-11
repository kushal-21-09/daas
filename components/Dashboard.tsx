"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dashboard from "@/public/dashboard.svg";
import add_member from "@/public/add-member.svg";
import dollar from "@/public/dollar.svg";
import logs from "@/public/logs.svg";
import ticket from "@/public/raise-ticket.svg";
import settings from "@/public/setting.svg";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  let router = useRouter();
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // New state for sidebar visibility

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setProjects([
        { id: 1, name: "Project 1" },
        { id: 2, name: "Project 2" },
        { id: 3, name: "Project 3" },
        { id: 4, name: "Project 4" },
        { id: 5, name: "Project 5" },
        { id: 6, name: "Project 6" },
        { id: 7, name: "Project 7" },
        { id: 8, name: "Project 8" },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleProjectSelect = (project: any) => {
    setSelectedProject(project);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
     
      {/* Top Bar */}
      <div className="w-full bg-black text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 lg:static shadow-md z-50">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={toggleSidebar} // Toggle sidebar visibility
          className="lg:hidden bg-gray-800 p-2 rounded-full hover:bg-gray-700"
        >
          <Image src={dashboard} alt="Toggle Sidebar" width={30} height={30} />
        </button>
        {/* Logout button on larger screens */}
        <div className="hidden lg:flex">
          <button
            onClick={() => alert("Logging out")}
            className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-xl"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row flex-grow relative">
       
        {/* Sidebar */}
        <div
          className={`lg:relative fixed h-screen lg:w-1/5 w-full bg-black text-white lg:flex lg:flex-col p-6 lg:space-y-6 shadow-lg transition-transform duration-300 ease-in-out transform z-40 mt-16 lg:mt-0  ${
            isSidebarVisible ? "left-0" : "-left-full"
          } lg:left-0 lg:translate-x-0 lg:flex-row lg:space-y-0 lg:items-start`}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex gap-5 items-center group">
              <Image
                src={logs}
                height={100}
                width={20}
                alt={"logs"}
                className="filter brightness-50 invert group-hover:brightness-0 group-hover:sepia group-hover:hue-rotate-[90deg]"
              />
              <Link href="/logs" className="text-lg hover:text-gray-300">
                Logs
              </Link>
            </div>
            <div className="flex gap-5 items-center group">
              <Image
                src={settings}
                height={100}
                width={20}
                alt={"settings"}
                className="filter brightness-50 invert group-hover:brightness-0 group-hover:sepia group-hover:hue-rotate-[90deg]"
              />
              <Link href="/settings" className="text-lg hover:text-gray-300">
                Settings
              </Link>
            </div>
            <div className="flex gap-5 items-center group">
              <Image
                src={dollar}
                height={100}
                width={20}
                alt={"dollar"}
                className="filter brightness-50 invert group-hover:brightness-0 group-hover:sepia group-hover:hue-rotate-[90deg]"
              />
              <Link href="/billing" className="text-lg hover:text-gray-300">
                Billing
              </Link>
            </div>
            <div className="flex gap-5 items-center group">
              <Image
                src={add_member}
                height={100}
                width={20}
                alt={"add_member"}
                className="filter brightness-50 invert group-hover:brightness-0 group-hover:sepia group-hover:hue-rotate-[90deg]"
              />
              <Link href="/invite" className="text-lg hover:text-gray-300">
                Invite Members
              </Link>
            </div>
            <div className="flex gap-5 items-center group">
              <Image
                src={ticket}
                height={100}
                width={20}
                alt={"ticket"}
                className="filter brightness-50 invert group-hover:brightness-0 group-hover:sepia group-hover:hue-rotate-[90deg]"
              />
              <Link href="/ticket" className="text-lg hover:text-gray-300">
                Raise Ticket
              </Link>
            </div>

            {/* Logout in Sidebar for Mobile */}
            <div className="lg:hidden flex gap-5 items-center group mt-auto">
              <button
                onClick={() => alert("Logging out")}
                className="bg-white text-black px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-xl"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`lg:w-4/5 w-full px-4 py-6 bg-white overflow-auto transition-all duration-300 ${
            isSidebarVisible ? "lg:ml-1/5 ml-0" : ""
          } lg:mt-0 mt-16`}
        >
          <h2 className="text-2xl font-semibold mb-6">Select a Project</h2>

          {isLoading ? (
            <div className="flex justify-center items-center h-[calc(80vh-200px)]">
              <div className="border-t-4 border-black -500 border-solid w-16 h-16 rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`px-8 py-12 rounded-lg shadow-xl cursor-pointer transition-all duration-300 ease-in-out transform border-2 ${
                    selectedProject?.id === project.id
                      ? "bg-black text-white scale-105"
                      : "bg-gray-100 hover:bg-gray-200 hover:scale-105 hover:border-green-300"
                  }`}
                  onClick={() => handleProjectSelect(project)}
                >
                  <h3 className="text-xl font-semibold text-center">{project.name}</h3>
                </div>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            {selectedProject ? (
              <button
                onClick={() => alert(`Continuing with ${selectedProject.name}`)}
                className="text-black px-10 py-3 rounded-lg shadow-lg hover:text-green-800 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
              >
                Continue with {selectedProject.name}
              </button>
            ) : null}
            <button
              onClick={()=> router.push('/create-project')}
              className="bg-black text-white px-10 py-3 rounded-lg shadow-lg hover:bg-white hover:text-black hover:border-black border-2 border-transparent transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
            >
              New Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
