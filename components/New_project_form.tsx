"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const NewProjectForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    repository: "",
    primaryCloud: "",
    environment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.projectName ||
      !formData.description ||
      !formData.repository ||
      !formData.primaryCloud ||
      !formData.environment
    ) {
      alert("Please fill out all fields.");
      return;
    }
    alert("Project Created Successfully!");
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Create a New Project</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Name */}
          <div>
            <label
              htmlFor="projectName"
              className="block font-medium text-gray-700 mb-2"
            >
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Enter your project name"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              rows={4}
              placeholder="Enter a brief description of your project"
              required
            ></textarea>
          </div>

          {/* Repository */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Repository</label>
            <div className="flex space-x-4">
              {["GitHub", "GitLab"].map((repo) => (
                <button
                  key={repo}
                  type="button"
                  onClick={() => setFormData({ ...formData, repository: repo })}
                  className={`px-4 py-2 border rounded-lg transition-all transform hover:scale-105 shadow-lg focus:outline-none ${
                      formData.repository === repo
                        ? "bg-black text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                >
                  {repo}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Cloud */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Primary Cloud
            </label>
            <div className="flex space-x-4">
              {["AWS", "Azure", "GCP"].map((cloud) => (
                <button
                  key={cloud}
                  type="button"
                  onClick={() => setFormData({ ...formData, primaryCloud: cloud })}
                  className={`px-4 py-2 border rounded-lg transition-all transform hover:scale-105 shadow-lg focus:outline-none ${
                      formData.primaryCloud === cloud
                        ? "bg-black text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                >
                  {cloud}
                </button>
              ))}
            </div>
          </div>

          {/* Environment */}
          <div>
            <label
              htmlFor="environment"
              className="block font-medium text-gray-700 mb-2"
            >
              Environment
            </label>
            <select
              id="environment"
              name="environment"
              value={formData.environment}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              required
            >
              <option value="">Select Environment</option>
              <option value="Dev">Dev</option>
              <option value="QA">QA</option>
              <option value="Production">Production</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={() => router.push("/dashboard")}
              className="px-6 py-2 bg-gray-200 text-black font-medium rounded-lg shadow-lg hover:bg-gray-300 hover:scale-105 transition-transform focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white font-medium rounded-lg shadow-lg hover:bg-white hover:text-black border-2 border-transparent hover:border-black hover:scale-105 transition-transform focus:outline-none"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProjectForm;