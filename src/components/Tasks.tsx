import { Checkbox } from "@/components/ui/checkbox";

interface TaskProps{
    name: string
    onclick: any
}

export default function Tasks({name, onclick}: TaskProps) {
    return(
        <div className=" flex w-full h-10 justify-between bg-zinc-800 text-zinc-300 items-center px-4 rounded-lg" onClick={onclick}>
            {name}
            <Checkbox/>
        </div>
    )
}