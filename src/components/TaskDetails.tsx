import Task from "@/components/InterfaceTask";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { TaskEditor } from "./TaskEditor";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


interface TaskDetailsProps {
  task?: Task;
}

const colors = [
  "bg-red-300",
  "bg-blue-300",
  "bg-green-300",
  "bg-yellow-300",
  "bg-purple-300",
  "bg-pink-300",
  "bg-orange-300",
];

export default function TaskDetails({ task }: TaskDetailsProps) {
  if (!task) return null;

  return (
    <Card className="border border-zinc-800 bg-transparent p-6 space-y-4 text-white">
      <div className="space-y-4 w-full flex">
        <div className="space-y-10 w-3/4">
          <div className="flex justify-between pr-6">
            <h1 className="text-3xl font-semibold">{task.name}</h1>
            <TaskEditor />
          </div>
          <div className="space-y-4 pr-6 text-justify">
            <h2 className="text-xl">Description</h2>
            <p className="text-zinc-400 text-sm">{task.description}</p>
          </div>
        </div>
        <div className="flex flex-col w-1/4 space-y-10">
          <div className="flex flex-col space-y-2">
            <div className="flex gap-2 justify-between">
              <h3>Due</h3>
              <Badge className="bg-red-950">{task.dueDate}</Badge>
            </div>
            <div className="flex gap-2 justify-between">
              <h3>Priority</h3>
              <Badge className="bg-orange-950">{task.priority}</Badge>
            </div>
            <div className="flex gap-2 justify-between">
              <h3>Status</h3>
              <Badge className="bg-blue-950">{task.status}</Badge>
            </div>
          </div>
          <div className="space-y-4">
            <h4>Colaborators</h4>
            <div className="flex -space-x-4">
              {task.collaborators.map((collaborator, index) => (
                <div
                  key={index}
                  className={`bg-green-300 p-2 text-xl text-emerald-950 rounded-full hover:cursor-pointer flex items-center justify-center border border-black ${colors[index % colors.length]}`}
                  style={{
                    zIndex: task.collaborators.length - index,
                    position: "relative",
                  }}
                >
                  {collaborator
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </div>
              ))}
            </div>
            <div>
              <h4>Project</h4>
              <p>N/A</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full space-y-2">
        <h1>Comment</h1>
        <div className="w-full flex gap-4">
        <Input placeholder="Text" className="border-zinc-600"/>
        <Button className="text-black bg-green-300 w-1/3">Add</Button>
        </div>
      </div>
    </Card>
  );
}
