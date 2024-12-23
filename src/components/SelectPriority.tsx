import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectPriority() {
    return (
        <Select>
            <SelectTrigger className="w-full h-full">
                <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="l">Low</SelectItem>
                    <SelectItem value="m">Medium</SelectItem>
                    <SelectItem value="h">High</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
