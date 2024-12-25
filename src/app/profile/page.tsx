
import { Input } from "@/components/ui/input"
import { ChangePassword } from "@/components/ChangePassword"
import { ChangeName } from "@/components/ChangeName"
import { ChangeUsername } from "@/components/ChangeUsername"
import { ChangeEmail } from "@/components/ChangeEmail"

export const metadata = {
    title: "Profile - Efficio"
}

export default function Profile() {
    return (
        <div className="h-full w-full flex items-center justify-center bg-zinc-950 p-6">
            <div className="flex flex-col pt-4 px-6 pb-10 border border-zinc-800 rounded-xl w-[500px] justify-center space-y-8">
                <div className="w-full">
                    <h1 className="text-zinc-300 font-bold text-xl">My Profile</h1>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <div className="bg-green-300 p-4 text-4xl text-emerald-950 rounded-full">
                        IM
                    </div>
                    <div className="flex gap-2">
                        <p className="text-white">Ivan Manhique</p>
                        <ChangeName/>
                    </div>

                </div>
                <div className="w-full space-y-4">
                    <div className="w-full flex gap-4">
                        <Input placeholder="Username" className="border-zinc-800 bg-transparent text-zinc-300" />
                        <ChangeUsername/>
                    </div>
                    <div className="w-full flex gap-4">
                        <Input placeholder="Email" className="border-zinc-800 bg-transparent text-zinc-300" />
                        <ChangeEmail/>
                    </div>
                    <div className="w-full flex gap-4">
                        <Input placeholder="Password" className="border-zinc-800 bg-transparent text-zinc-300" />
                       <ChangePassword/>
                    </div>
                </div>
            </div>
        </div>
    )
}