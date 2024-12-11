'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import add_member from '@/public/add-member.svg';
import dollar from '@/public/dollar.svg';
import logs from '@/public/logs.svg';
import ticket from '@/public/raise-ticket.svg';
import settings from '@/public/setting.svg';
import { FaGithub, FaGitlab } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa'; // AWS icon
// import { SiMicrosoftazure } from 'react-icons/si'; // Azure icon
import { FaGoogle } from 'react-icons/fa';

const NewProjectForm = () => {
    const [formData, setFormData] = useState({
        projectName: '',
        description: '',
        repository: '',
        primaryCloud: '',
        environment: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/4 bg-black text-white flex flex-col p-6 space-y-6 shadow-xl">
                <div className="flex gap-5 items-center mb-6">
                    <h2 className="text-4xl font-bold">Dashboard</h2>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex gap-5 items-center">
                        <Image src={logs} height={100} width={30} alt="logs" />
                        <Link
                            href="/logs"
                            className="text-lg hover:text-gray-300"
                        >
                            Logs
                        </Link>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Image
                            src={settings}
                            height={100}
                            width={20}
                            alt="settings"
                        />
                        <Link
                            href="/settings"
                            className="text-lg hover:text-gray-300"
                        >
                            Settings
                        </Link>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Image
                            src={dollar}
                            height={100}
                            width={20}
                            alt="dollar"
                        />
                        <Link
                            href="/billing"
                            className="text-lg hover:text-gray-300"
                        >
                            Billing
                        </Link>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Image
                            src={add_member}
                            height={100}
                            width={20}
                            alt="add_member"
                        />
                        <Link
                            href="/invite"
                            className="text-lg hover:text-gray-300"
                        >
                            Invite Members
                        </Link>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Image
                            src={ticket}
                            height={100}
                            width={20}
                            alt="ticket"
                        />
                        <Link
                            href="/ticket"
                            className="text-lg hover:text-gray-300"
                        >
                            Raise Ticket
                        </Link>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="flex-1 pt-[5%]">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Add Project
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="projectName"
                                className="text-lg font-medium text-gray-700 mb-2 block"
                            >
                                Project Name
                            </label>
                            <input
                                type="text"
                                id="projectName"
                                name="projectName"
                                value={formData.projectName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="description"
                                className="text-lg font-medium text-gray-700 mb-2 block"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={() => handleChange}
                                className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="text-lg font-medium text-gray-700 mb-2 block">
                                Repository
                            </label>
                            <div className="flex space-x-4">
                                {['GitHub', 'GitLab'].map((repo) => (
                                    <button
                                        key={repo}
                                        type="button"
                                        onClick={() =>
                                            setFormData({
                                                ...formData,
                                                repository: repo,
                                            })
                                        }
                                        className={`flex items-center space-x-2 px-6 py-3 border-2 rounded-lg ${
                                            formData.repository === repo
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-200 text-gray-700'
                                        } transition-colors duration-200 hover:bg-blue-500 hover:text-white`}
                                    >
                                        {/* Conditionally render icons for GitHub and GitLab */}
                                        {repo === 'GitHub' && (
                                            <FaGithub className="text-xl" /> // GitHub icon
                                        )}
                                        {repo === 'GitLab' && (
                                            <FaGitlab className="text-xl" /> // GitLab icon
                                        )}
                                        <span>{repo}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="text-lg font-medium text-gray-700 mb-2 block">
                                Primary Cloud
                            </label>
                            <div className="flex space-x-4">
                                {['AWS', 'Azure', 'GCP'].map((cloud) => (
                                    <button
                                        key={cloud}
                                        type="button"
                                        onClick={() =>
                                            setFormData({
                                                ...formData,
                                                primaryCloud: cloud,
                                            })
                                        }
                                        className={`flex items-center space-x-2 px-6 py-3 border-2 rounded-lg ${
                                            formData.primaryCloud === cloud
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-200 text-gray-700'
                                        } transition-colors duration-200 hover:bg-blue-500 hover:text-white`}
                                    >
                                        {/* Conditionally render icons for each cloud provider */}
                                        {cloud === 'AWS' && (
                                            <FaAws className="text-xl" /> // AWS icon
                                        )}
                                        {/* {cloud === 'Azure' && (
                                            <SiMicrosoftazure className="text-xl" /> // Azure icon
                                        )} */}
                                        {cloud === 'GCP' && (
                                            <FaGoogle className="text-xl" /> // GCP icon
                                        )}
                                        <span>{cloud}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="environment"
                                className="text-lg font-medium text-gray-700 mb-2 block"
                            >
                                Environment
                            </label>
                            <select
                                id="environment"
                                name="environment"
                                value={formData.environment}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                required
                            >
                                <option value="">Select Environment</option>
                                <option value="Dev">Dev</option>
                                <option value="QA">QA</option>
                                <option value="Production">Production</option>
                            </select>
                        </div>

                        <div className="flex justify-center space-x-6 pt-[5%]">
                            <button
                                type="button"
                                onClick={() => console.log('Canceled')}
                                className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewProjectForm;
