"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/components/lib/utils"; // Adjust this import to match your project's utility location

export function RangeSlider() {
  const [values, setValues] = React.useState([1000, 5000]);

  const handleValueChange = (newValue) => {
    setValues(newValue);
  };

  return (
    <div className="flex flex-col items-start space-y-4 pb-4">
      <div className="flex w-full justify-between text-lg font-thin">
        <span className="text-xs text-[#7b7b7b]">
          {values[0]?.toLocaleString("en-US", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
        <span className="text-xs text-[#7b7b7b]">
          {values[1]?.toLocaleString("en-US", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
      </div>

      {/* Range Slider */}
      <SliderPrimitive.Root
        className="relative flex w-full touch-none select-none items-center"
        value={values}
        onValueChange={handleValueChange} // Update state on change
        min={100} // Minimum value
        max={10000} // Maximum value
        step={100} // Step increment
        aria-label="Range Slider"
      >
        <SliderPrimitive.Track className="relative h-[2px] w-full grow overflow-hidden rounded-full bg-gray-200">
          <SliderPrimitive.Range className="absolute h-full bg-zinc-950" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full bg-zinc-950 shadow-md ring-2 ring-zinc-950 focus:outline-none" />
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full bg-zinc-950 shadow-md ring-2 ring-zinc-950 focus:outline-none" />
      </SliderPrimitive.Root>

      {/* Display Slider Values */}
    </div>
  );
}
