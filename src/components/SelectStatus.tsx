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

export function SelectStatus() {
  return (
    <Select>
      <SelectTrigger className="w-full h-full">
        <SelectValue placeholder="Project" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Projects</SelectLabel>
          <SelectItem value="f">Start</SelectItem>
          <SelectItem value="g">Doing</SelectItem>
          <SelectItem value="h">Done</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
