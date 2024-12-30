'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { SelectStatus } from "@/components/SelectStatus";
import { SelectPriority } from "@/components/SelectPriority";
import { StartDate } from "@/components/StartDate";
import ProjectList from "@/components/ProjectList";
import ProjectDetails from "@/components/ProjectDetails";
import { NewProject } from "@/components/NewProject";

interface Project {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
    collaborators: string[];
    manager: string[];
    progress: number;
    tasks: Task[];
}

interface Task {
    id: number;
    name: string;
    description: string;
    dueDate: string;
    priority: string;
    status: string;
    collaborators: string[];
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectSelect = (project: Project) => {
        setSelectedProject(project);
    };

    return (
        <div className="h-full w-full bg-zinc-950 md:px-10 space-y-4">
            <div className="w-full space-y-2">
                <h1 className="text-white text-2xl font-semibold">Projects</h1>
                <p className="text-zinc-300 text-sm">List of all Projects in the system</p>
            </div>
            <div className="w-full flex gap-2 h-12">
                <Input placeholder="Search" className="h-full border-zinc-600 text-white" />
                <SelectStatus />
                <SelectPriority />
                <StartDate />
                <NewProject />
            </div>
            <div className="w-full space-x-6 flex">
                <div className="w-[400px] space-y-4">
                    <ProjectList onSelectProject={handleProjectSelect} />
                </div>
                <div className="w-full space-y-6">
                    {selectedProject ? (
                        <ProjectDetails project={selectedProject} />
                    ) : (
                        <div className="w-full flex items-center justify-center h-full">
                            <p className="text-zinc-400">Select a project to see details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
