import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Project from "./InterfaceProject";
import { ProjectEditor } from "./ProjectEditor";
import { Collaborators } from "./Collaborators";
import { Checkbox } from "./ui/checkbox";
import { Progress } from "./ui/progress";

interface ProjectDetailsProps {
    project?: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    if (!project) return null;

    return (
        <Card className="border border-zinc-800 bg-transparent p-6 space-y-4 text-white">
            <div className="space-y-4 w-full flex">
                <div className="space-y-10 w-1/2">
                    <div className="flex justify-between pr-6">
                        <h1 className="text-3xl font-semibold">{project.name}</h1>
                        <ProjectEditor />
                    </div>
                    <div className="space-y-4 pr-6 text-justify">
                        <h2 className="text-xl">Description</h2>
                        <p className="text-zinc-400 text-sm">{project.description}</p>
                    </div>
                </div>
                <div className="flex flex-col w-1/4 space-y-4 px-4">
                    <div className="flex flex-col space-y-2">
                        <div className="flex gap-2 justify-between">
                            <h3>Status</h3>
                            <Badge className="bg-blue-950">{project.status}</Badge>
                        </div>
                    </div>
                    <Collaborators collaborators={project.collaborators} />
                    <div className="space-y-2">
                        <h3>Manager</h3>
                        <div className="p-2 text-xl rounded-full flex items-center justify-center border border-black bg-green-300 text-black size-12" >
                            IM
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex gap-2 justify-between">
                            <h3>Start Date</h3>
                            <Badge className="bg-yellow-950">{project.startDate}</Badge>
                        </div>
                        <div className="flex gap-2 justify-between">
                            <h3>End Date</h3>
                            <Badge className="bg-blue-950">{project.endDate}</Badge>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/4 space-y-4">
                    <h1>Tasks</h1>
                    <div className="space-y-2">
                        {project.tasks.map((task) => (
                            <div
                                key={task.id}
                                className="flex w-full h-10 justify-between bg-zinc-800 text-zinc-300 items-center px-4 rounded-lg">
                                {task.name}
                                <Checkbox />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="w-full flex gap-4 items-center">
                <h1 className="text-2xl">Progress</h1>
                <Progress value={project.progress} />
            </div>

        </Card>
    );
}
