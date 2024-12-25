import CardNotification from "@/components/CardNotification"
import CardActiveTasks from "@/components/CardActiveTasks"
import CardUpcoming from "@/components/CardUpcoming"
import { NewTask } from "@/components/NewTask"
import { NewProject } from "@/components/NewProject"
import { Card } from "@/components/ui/card"

export const metadata = {
    title: "Dashboard - Efficio"
}

export default function Dashboard() {
    return (
        <div className="h-full w-full bg-zinc-950 md:px-10 space-y-4">
            <div className="w-full pt-10">
                <h1 className="text-white text-2xl font-semibold">Dashboard</h1>
            </div>
            <div className="w-full space-x-6 flex">
                <div className="w-[450px] space-y-4">
                    <CardNotification />
                    <CardActiveTasks />
                    <CardUpcoming />
                </div>
                <div className="w-full space-y-6">
                    <div className="w-full flex space-x-6 h-16">
                        <NewTask/>
                        <NewProject/>
                    </div>
                    <Card className="flex items-center justify-center border border-zinc-800 bg-transparent flex-col p-4 space-y-4">
                        <h2 className="text-zinc-300">Deadlines e MileStones</h2>
                    </Card>
                </div>
            </div>
        </div>
    )
}