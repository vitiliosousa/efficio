'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { SelectStatus } from "@/components/SelectStatus";
import { SelectPriority } from "@/components/SelectPriority";
import { DueDate } from "@/components/DueDate";
import TaskList from "@/components/TaskList";
import TaskDetails from "@/components/TaskDetails";
import { NewTask } from "@/components/NewTask";


interface Task {
    id: number;
    name: string;
    description: string;
    dueDate: string;
    priority: string;
    status: string;
    collaborators: string[];
}

export default function Tasks() {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleTaskSelect = (task: Task) => {
        setSelectedTask(task);
    };

    return (
        <div className="h-full w-full bg-zinc-950 md:px-10 space-y-4">
            <div className="w-full">
                <h1 className="text-white text-2xl font-semibold">Tasks</h1>
            </div>
            <div className="w-full flex gap-2 h-12">
                <Input placeholder="Search" className="h-full border-zinc-600 text-white" />
                <SelectStatus />
                <SelectPriority />
                <DueDate />
                <NewTask />
            </div>
            <div className="w-full space-x-6 flex">
                <div className="w-[800px] space-y-4">
                    <TaskList onSelectTask={handleTaskSelect} />
                </div>
                <div className="w-full space-y-6">
                    {selectedTask ? (
                        <TaskDetails task={selectedTask} />
                    ) : (
                        <div className="w-full flex items-center justify-center h-full">
                            <p className="text-zinc-400">Select a task to see details</p>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
