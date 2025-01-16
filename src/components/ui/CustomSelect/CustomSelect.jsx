import React from "react";
import "./CustomSelect.scss";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../core/select";

const CustomSelect = ({
  displayLabel = false,
  value = "",
  handleChange = () => {},
  customStyles = { container: "w-[180px]" },
  options = [],
  placeholder = "Theme",
}) => {
  return (
    <Select value={value} onValueChange={handleChange}>
      <SelectTrigger className={customStyles.container}>
        <div className="select-label">
          {value && displayLabel && <span>{placeholder}: </span>}
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
