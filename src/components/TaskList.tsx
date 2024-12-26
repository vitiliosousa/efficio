import Task from "@/components/InterfaceTask";
import { Card } from "@/components/ui/card";
import Tasks from "./Tasks";

interface TaskListProps {
    onSelectTask: (task: Task) => void;
}

export default function TaskList({ onSelectTask }: TaskListProps) {
    const tasks: Task[] = [
        {
            id: 1,
            name: "Task 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta placeat doloremque dolorem, doloribus est, tempore incidunt voluptate, rerum corrupti exercitationem quam. Perspiciatis numquam fuga placeat sed vero modi non.",
            dueDate: "2024-12-31",
            priority: "High",
            status: "In Progress",
            collaborators: ["User A", "User B"],
        },
        {
            id: 2,
            name: "Task 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta placeat doloremque dolorem, doloribus est, tempore incidunt voluptate, rerum corrupti exercitationem quam. Perspiciatis numquam fuga placeat sed vero modi non.",
            dueDate: "2024-12-24",
            priority: "Low",
            status: "Pending",
            collaborators: ["User C"],
        },{
            id: 3,
            name: "Task 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta placeat doloremque dolorem, doloribus est, tempore incidunt voluptate, rerum corrupti exercitationem quam. Perspiciatis numquam fuga placeat sed vero modi non.",
            dueDate: "2024-12-31",
            priority: "High",
            status: "In Progress",
            collaborators: ["User A", "User B"],
        },
        {
            id: 4,
            name: "Task 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta placeat doloremque dolorem, doloribus est, tempore incidunt voluptate, rerum corrupti exercitationem quam. Perspiciatis numquam fuga placeat sed vero modi non.",
            dueDate: "2024-12-24",
            priority: "Low",
            status: "Pending",
            collaborators: ["User C"],
        }
    ];

    return (
        <Card className="w-full pt-6 px-4 pb-2 rounded-xl border border-zinc-800 bg-transparent space-y-2">
            <h1 className="text-white">Task List</h1>
            {tasks.map((task) => (
                <Tasks key={task.id} name={task.name} onclick={() => onSelectTask(task)}/>
            ))}
        </Card>
    );
}
