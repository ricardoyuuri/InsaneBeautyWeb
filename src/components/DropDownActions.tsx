'use client'

import {
    Dropdown, 
    DropdownTrigger, 
    DropdownMenu, 
    DropdownItem, 
    Button
} from "@nextui-org/react";

import { ChevronDown } from 'lucide-react'

export default function DropDownActions() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
          size="sm"
        >
          <ChevronDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="p1">Pagina 1</DropdownItem>
        <DropdownItem key="p2">Pagina 2</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
