import Task from "./InterfaceTask";

export default interface Project {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string
    status: string;
    collaborators: string[];
    manager: string[];
    progress: number;
    tasks: Task[];
}