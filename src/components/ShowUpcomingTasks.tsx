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
import Notification from "@/components/Notification"

export function ShowUpcomingTasks() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" className="text-zinc-500 underline text-xs">Show All</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] bg-zinc-800 border-zinc-800">
                <DialogHeader>
                    <DialogTitle className="text-white text-2xl font-semibold">Upcoming Tasks</DialogTitle>
                    <DialogDescription className="text-zinc-500">
                        List of all active tasks in the system
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-2">
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                </div>
                <DialogFooter>
                    <Button className="bg-transparent border border-zinc-700 w-52">Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
