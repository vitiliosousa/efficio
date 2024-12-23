import Notification from "@/components/Notification";
import { ShowNotifications } from "@/components/ShowNotifications";
import { Card } from "@/components/ui/card";

export default function CardNotification() {
    return (
        <Card className="w-full pt-4 px-4 pb-2 rounded-xl border border-zinc-800 bg-transparent space-y-2">
            <h2 className="text-zinc-400 font-bold">Notifications</h2>
            <div className="space-y-1">
                <Notification />
                <Notification />
            </div>
            <div className="flex w-full justify-end">
                <ShowNotifications />
            </div>
        </Card>
    )
}