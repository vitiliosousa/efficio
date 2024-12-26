export default interface Task {
    id: number;
    name: string;
    description: string;
    dueDate: string;
    priority: string;
    status: string;
    collaborators: string[];
}