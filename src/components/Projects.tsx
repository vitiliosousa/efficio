interface ProjectsProps{
    name: string
    onclick: any
}

export default function Projects({name, onclick}: ProjectsProps) {
    return(
        <div className=" flex w-full h-10 justify-between bg-zinc-800 text-zinc-300 items-center px-4 rounded-lg" onClick={onclick}>
            {name}
        </div>
    )
}