import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import iconNewTask from "../../public/iconNewTask.svg"
import Image from "next/image"
import { SelectColaborator } from "@/components/SelectColaborator"
import { SelectProject } from "@/components/SelectProject"
import { SelectPriority } from "@/components/SelectPriority"
import { Textarea } from "@/components/ui/textarea"

export function NewTask() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-emerald-950 w-full h-full font-semibold text-lg text-green-300 hover:bg-emerald-900">
                    New Task
                    <Image alt="icone" src={iconNewTask} />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] bg-zinc-900 border-zinc-800">
                <DialogHeader>
                    <DialogTitle className="text-white text-2xl font-semibold">Create a new task</DialogTitle>
                    <DialogDescription className="text-zinc-500">
                        Fill in the form to create a new task
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                    <div className="flex space-x-2 h-10">
                        <Input placeholder="Task Name" className="border-zinc-600 h-full text-zinc-300"/>
                        <SelectColaborator/>
                        <SelectProject/>
                    </div>
                    <div className="flex space-x-2 h-10">
                        <Input placeholder="Due Date" className="border-zinc-600 text-zinc-300 h-full"/>
                        <SelectPriority/>
                    </div>
                    <Textarea className="border-zinc-600 h-28 rounded-xl text-zinc-300" placeholder="Description"/>
                </div>
                <DialogFooter>
                    <Button className="bg-transparent border border-zinc-700 w-52">Close</Button>
                    <Button className="bg-green-300 border text-black hover:bg-green-400 w-52">Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
