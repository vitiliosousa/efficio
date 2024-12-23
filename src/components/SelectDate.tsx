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

export function SelectDate() {
  return (
    <Select>
      <SelectTrigger className="w-full h-full">
        <SelectValue placeholder="Start Date" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Start Date</SelectLabel>
          <SelectItem value="a">1</SelectItem>
          <SelectItem value="b">2</SelectItem>
          <SelectItem value="c">3</SelectItem>
          <SelectItem value="d">4</SelectItem>
          <SelectItem value="e">5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
