import Project from "@/components/InterfaceProject";
import { Card } from "@/components/ui/card";
import Tasks from "@/components/Tasks"; 
import Projects from "@/components/Projects";

interface ProjectListProps {
    onSelectProject: (project: Project) => void;
}

export default function ProjectList({ onSelectProject }: ProjectListProps) {
    const projects: Project[] = [
        {
            id: 1,
            name: "Project Alpha",
            description: "Descrição do Project Alpha.",
            startDate: "2024-01-01",
            endDate: "2024-12-31",
            status: "In Progress",
            collaborators: ["User A", "User B"],
            manager: ["Manager 1"],
            progress: 70,
            tasks:  [
                {
                    id: 1,
                    name: "Task 1",
                    description: "Detalhes da tarefa 1.",
                    dueDate: "2024-03-15",
                    priority: "High",
                    status: "In Progress",
                    collaborators: ["User A"],
                },
                {
                    id: 2,
                    name: "Task 2",
                    description: "Detalhes da tarefa 2.",
                    dueDate: "2024-04-20",
                    priority: "Low",
                    status: "Pending",
                    collaborators: ["User B"],
                },
            ],
        },
        {
            id: 2,
            name: "Project Beta",
            description: "Descrição do Project Beta.",
            startDate: "2024-05-01",
            endDate: "2024-10-31",
            status: "Pending",
            collaborators: ["User C", "User D"],
            manager: ["Manager 2"],
            progress: 0,
            tasks: [],
        },
    ];

    return (
        <Card className="w-full pt-6 px-4 pb-2 rounded-xl border border-zinc-800 bg-transparent space-y-2">
            <h1 className="text-white">Project List</h1>
            {projects.map((project) => (
                <Projects 
                    key={project.id} 
                    name={project.name} 
                    onclick={() => onSelectProject(project)} 
                />
            ))}
        </Card>
    );
}
