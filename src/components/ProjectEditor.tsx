import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Pen } from "lucide-react"
import { SelectColaborator } from "@/components/SelectColaborator"
import { SelectManager } from "@/components/SelectManager"
import { StartDate } from "@/components/StartDate"
import { EndDate } from "@/components/EndDate"
import { Textarea } from "@/components/ui/textarea"

export function ProjectEditor() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="p-3 rounded-full bg-green-300 text-white flex items-center justify-center cursor-pointer">
                    <Pen className="text-black size-3" />
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] bg-zinc-900 border-zinc-800">
                <DialogHeader>
                    <DialogTitle className="text-white text-2xl font-semibold">Project Editor</DialogTitle>
                    <DialogDescription className="text-zinc-500">
                        Fill in the form to update a project
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                    <div className="flex space-x-2 h-10">
                        <Input placeholder="Project Name" className="border-zinc-600 h-full text-zinc-300" />
                        <SelectManager />
                        <SelectColaborator />
                    </div>
                    <div className="flex space-x-2 h-10">
                        <StartDate />
                        <EndDate />
                    </div>
                    <Textarea className="border-zinc-600 h-28 rounded-xl text-zinc-300" placeholder="Description" />
                </div>
                <DialogFooter>
                    <DialogClose className="bg-transparent border border-zinc-700 w-52 rounded text-zinc-300 text-sm">Close</DialogClose>
                    <Button className="bg-green-300 border text-black hover:bg-green-400 w-52">Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
