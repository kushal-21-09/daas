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

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full bg-black text-white flex flex-col p-6 space-y-6 shadow-lg">
        <div className="flex gap-5 items-center mb-6 group">
          <Image src={dashboard} height={100} width={30} alt={"dashboard"} className="filter brightness-0 invert sepia hue-rotate-[90deg]"/>
          <h2 className="text-3xl font-bold">Dashboard</h2>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex gap-5 items-center group">
            <Image src={logs} height={100} width={20} alt={"logs"} className="filter brightness-50 invert group-hover:brightness-0 group-hover:sepia group-hover:hue-rotate-[90deg]"/>
            <Link href="/logs" className="text-lg hover:text-gray-300">
              Logs
            </Link>
          </div>
          <div className="flex gap-5 items-center group">
            <Image src={settings} height={100} width={20} alt={"settings"} className="filter brightness-50 invert group-hover:brightness-0 group-hover:sepia group-hover:hue-rotate-[90deg]" />
            <Link href="/settings" className="text-lg hover:text-gray-300">
              Settings
            </Link>
          </div>
          <div className="flex gap-5 items-center group">
            <Image src={dollar} height={100} width={20} alt={"dollar"} className="filter brightness-50 invert group-hover:brightness-0 group-hover:sepia group-hover:hue-rotate-[90deg]" />
            <Link href="/biving" className="text-lg hover:text-gray-300">
              Biving
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
            <Image src={ticket} height={100} width={20} alt={"ticket"} className="filter brightness-50 invert group-hover:brightness-0 group-hover:sepia group-hover:hue-rotate-[90deg]" />
            <Link href="/ticket" className="text-lg hover:text-gray-300">
              Raise Ticket
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:w-3/4 w-full px-10 py-10 bg-white overflow-auto">
        <h2 className="text-3xl font-semibold mb-6">Select a Project</h2>

        {isLoading ? (
          <div>Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`px-5 py-10 rounded-lg shadow-md cursor-pointer transition ${
                  selectedProject?.id === project.id
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200"
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
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black border border-black"
          >
            New Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
