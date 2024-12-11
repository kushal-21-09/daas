'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dashboard from '@/public/dashboard.svg';
import add_member from '@/public/add-member.svg';
import dollar from '@/public/dollar.svg';
import logs from '@/public/logs.svg';
import ticket from '@/public/raise-ticket.svg';
import settings from '@/public/setting.svg';

const Dashboard = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    useEffect(() => {
        // Simulate fetching data from an API
        setTimeout(() => {
            setProjects([
                { id: 1, name: 'WorkSpace 1' },
                { id: 2, name: 'WorkSpace 2' },
                { id: 3, name: 'WorkSpace 3' },
                { id: 4, name: 'WorkSpace 4' },
                { id: 5, name: 'WorkSpace 5' },
                { id: 6, name: 'WorkSpace 6' },
                { id: 7, name: 'WorkSpace 7' },
                { id: 8, name: 'WorkSpace 8' },
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
            <div className="lg:w-1/5 w-full bg-black text-white flex flex-col p-6 space-y-6 shadow-xl">
                <div className="flex gap-5 items-center mb-6">
                    {/* <Image
                        src={dashboard}
                        height={100}
                        width={30}
                        alt={'dashboard'}
                    /> */}
                    <h2 className="text-4xl font-bold">Dashboard</h2>
                </div>

                <div className="flex flex-col space-y-4">
                    <div className="flex gap-5 items-center">
                        <Image
                            src={logs}
                            height={100}
                            width={30}
                            alt={'logs'}
                        />
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
                            alt={'settings'}
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
                            alt={'dollar'}
                        />
                        <Link
                            href="/biving"
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
                            alt={'add_member'}
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
                            alt={'ticket'}
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

            {/* Main Content */}
            <div className="lg:w-4/5 w-full px-10 py-10 bg-white overflow-auto">
                <h2 className="text-3xl text-center font-semibold mb-6">
                    
                </h2>

                {isLoading ? (
                    <div className="flex justify-center items-center h-[calc(100vh-200px)]">
                        <div className="border-t-4 border-black -500 border-solid w-16 h-16 rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={`px-8 py-12 rounded-lg shadow-xl cursor-pointer transition-all duration-300 ease-in-out transform border-2 ${
                                    selectedProject?.id === project.id
                                        ? 'bg-black text-white scale-105'
                                        : 'bg-gray-100 hover:bg-gray-200 hover:scale-105 hover:border-green-300'
                                }`}
                                onClick={() => handleProjectSelect(project)}
                            >
                                <h3 className="text-2xl font-semibold text-center">
                                    {project.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                )}

                {/* Buttons */}
                {!isLoading && (
                    <div className="mt-6 flex justify-center space-x-6 pt-[55px]">
                        {selectedProject ? (
                            <button
                                onClick={() =>
                                    alert(
                                        `Continuing with ${selectedProject.name}`,
                                    )
                                }
                                className="text-black px-10 py-3 rounded-lg shadow-lg hover:text-green-800 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
                            >
                                Continue with {selectedProject.name}
                            </button>
                        ) : null}

                        <button
                            onClick={() => alert('Create a new project')}
                            className="bg-black text-white px-10 py-3 rounded-lg shadow-lg hover:bg-white hover:text-black hover:border-black border-2 border-transparent transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
                        >
                            Add
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
