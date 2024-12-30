interface CollaboratorsProps {
    collaborators: string[];
}

const colors = [
    "bg-red-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-orange-300",
];

export function Collaborators({ collaborators }: CollaboratorsProps) {
    return (
        <div className="space-y-2">
            <h4>Collaborators</h4>
            <div className="flex -space-x-4">
                {collaborators.map((collaborator, index) => (
                    <div
                        key={index}
                        className={`p-2 text-xl rounded-full flex items-center justify-center border border-black ${colors[index % colors.length]}`}
                        style={{
                            zIndex: collaborators.length - index,
                            position: "relative",
                        }}
                    >
                        {collaborator
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                    </div>
                ))}
            </div>
        </div>
    );
}
