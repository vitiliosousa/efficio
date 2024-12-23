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

export function SelectProject() {
  return (
    <Select>
      <SelectTrigger className="w-full h-full">
        <SelectValue placeholder="Project" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Projects</SelectLabel>
          <SelectItem value="f">Dev Challenge</SelectItem>
          <SelectItem value="g">UI More Less</SelectItem>
          <SelectItem value="h">The Code With Us</SelectItem>
          <SelectItem value="i">Code Everyday</SelectItem>
          <SelectItem value="j">Electro Between</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
