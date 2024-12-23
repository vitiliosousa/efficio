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

export function SelectManager() {
  return (
    <Select>
      <SelectTrigger className="w-full h-fulle">
        <SelectValue placeholder="Manager"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Manager</SelectLabel>
          <SelectItem value="a">Joana Elisa</SelectItem>
          <SelectItem value="b">Teresa Machava</SelectItem>
          <SelectItem value="c">Joao David</SelectItem>
          <SelectItem value="d">Patrick Melvis</SelectItem>
          <SelectItem value="e">Elisa Tomas</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
