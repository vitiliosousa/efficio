import Notification from "@/components/Notification";
import { Card } from "@/components/ui/card";
import { ShowActiveTasks } from "@/components/ShowActiveTasks";

export default function CardActiveTasks() {
    return (
            <Card className="w-full pt-4 px-4 pb-2 rounded-xl border border-zinc-800 bg-transparent space-y-2">
                <h2 className="text-zinc-400 font-bold">Active Tasks</h2>
                <div className="space-y-1">
                <Notification/>
                <Notification/>
                </div>
                <div className="flex w-full justify-end">
                    <ShowActiveTasks/>
                </div>
            </Card>
    )
}