"use client"
import React from "react";
import {Slider} from "@nextui-org/react";

export default function PriceSlider() {
  const [value, setValue] = React.useState([100, 300]);

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center py-3">
        <div className="slider justify-center items-center">
      <Slider 
        color = "primary"
        // label="Select a budget"
        formatOptions={{style: "currency", currency: "USD"}}
        step={10}
        maxValue={1000}
        minValue={0}
        value={value} 
        onChange={setValue}
        className="max-w-40 absolute "
        />
        </div>
      <p className="text-default-500 font-medium text-sm">
        Selected budget: {Array.isArray(value) && value.map((b) => `$${b}`).join(" – ")}
      </p>
    </div>
  );
}
