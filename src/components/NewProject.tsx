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
import iconNewProject from "../../public/iconNewProject.svg"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectManager } from "@/components/SelectManager"
import { SelectColaborator } from "@/components/SelectColaborator"
import { StartDate } from "@/components/StartDate"
import { EndDate } from "@/components/EndDate"
export function NewProject() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-green-300 w-full h-full font-semibold text-lg text-emerald-900 hover:bg-green-400">
                    New Project
                    <Image alt="icone" src={iconNewProject} />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] bg-zinc-900 border-zinc-800">
                <DialogHeader>
                    <DialogTitle className="text-white text-2xl font-semibold">Create a new project</DialogTitle>
                    <DialogDescription className="text-zinc-500">
                        Fill in the form to create a new project
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                    <div className="flex space-x-2 h-10">
                        <Input placeholder="Project Name" className="border-zinc-600 h-full text-zinc-300"/>
                        <SelectManager/>
                        <SelectColaborator/>
                    </div>
                    <div className="flex space-x-2 h-10">
                        <StartDate/>
                        <EndDate/>
                    </div>
                    <Textarea className="border-zinc-600 h-28 rounded-xl text-zinc-300" placeholder="Description"/>
                </div>
                <DialogFooter>
                <DialogClose className="bg-transparent border border-zinc-700 w-52 rounded text-zinc-300 text-sm">Close</DialogClose>
                    <Button className="bg-green-300 border text-black hover:bg-green-400 w-52">Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
