import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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
                    <p className="text-white">Ivan Manhique</p>
                </div>
                <div className="w-full space-y-4">
                    <div className="w-full flex gap-4">
                        <Input placeholder="Username" className="border-zinc-800 bg-zinc-900 text-zinc-300" />
                        <Button className="bg-green-300 hover:bg-green-400 text-black w-52">Change</Button>
                    </div>
                    <div className="w-full flex gap-4">
                        <Input placeholder="Email" className="border-zinc-800 bg-zinc-900 text-zinc-300"/>
                        <Button className="bg-green-300 hover:bg-green-400 text-black w-52">Change</Button>
                    </div>
                    <div className="w-full flex gap-4">
                        <Input placeholder="Password" className="border-zinc-800 bg-zinc-900 text-zinc-300"/>
                        <Button className="bg-green-300 hover:bg-green-400 text-black w-52">Change</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}