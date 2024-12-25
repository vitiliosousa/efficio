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

export function ChangeName() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="p-2 rounded-full bg-green-300 text-white flex items-center justify-center cursor-pointer">
                    <Pen className="text-black size-2"/>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px] bg-zinc-900 border-zinc-800">
                <DialogHeader>
                    <DialogTitle className="text-white text-2xl font-semibold">Change Name</DialogTitle>
                    <DialogDescription className="text-zinc-500">
                        Fill in the form to update
                    </DialogDescription>
                </DialogHeader>
                <div className="gap-4 flex flex-col">
                    <Input placeholder="First Name" className="border-zinc-600 h-10 text-zinc-300" />
                    <Input placeholder="Last Name" className="mb-6 border-zinc-600 h-10 text-zinc-300" />
                </div>
                <DialogFooter>
                    <DialogClose className="bg-transparent border border-zinc-700 w-full rounded text-zinc-300 text-sm h-10">Cancel</DialogClose>
                    <Button className="bg-green-300 hover:bg-green-400 text-black w-full">Update</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
