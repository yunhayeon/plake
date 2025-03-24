"use client";

import { IoMdArrowDropdown } from "react-icons/io";
import { TbArrowsSort } from "react-icons/tb";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { LOCATION_OPTION } from "@/constants/ui";
import { cn } from "@/lib/utils";

interface IOption {
  value: string;
  label: string;
}

interface IDropdownProps {
  option?: Array<IOption>;
  placeholder?: string;
  type?: "default" | "sort" | "form";
  onSelect?: (value: string) => void;
}

const Dropdown = ({
  option = LOCATION_OPTION,
  placeholder,
  type = "default",
  onSelect,
}: IDropdownProps) => {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger
        className={cn(
          "min-w-[110px] justify-between rounded-xl bg-white",
          type === "form"
            ? "w-full border-gray-50 bg-gray-50 data-[placeholder]:text-gray-400"
            : "w-[110px] bg-white data-[placeholder]:text-gray-800",
        )}
      >
        {type === "sort" && <TbArrowsSort size={18} />}
        <SelectValue placeholder={`${placeholder || "지역 전체"}`} />
        {type !== "sort" && <IoMdArrowDropdown size={16} color="black" />}
      </SelectTrigger>
      <SelectContent className="w-full min-w-[110px] rounded-xl bg-white text-black">
        {option?.map((option, i) => (
          <SelectItem
            key={`option-${i}`}
            value={option.value}
            className="h-[32px] cursor-pointer rounded-xl px-2 py-1.5 pl-2 text-sm focus:bg-purple-100"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
