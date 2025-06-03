"use client";

import { cn } from "@/utils";
import { LucideEye, LucideEyeClosed, LucideEyeOff } from "lucide-react";
import React, { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  className,
  onValueChange,
  onChange,
  type,
  ...props
}) => {
  const [value, setValue] = React.useState(props.value ?? "");
  const [isVisible, setVisible] = React.useState(false);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e);
    onValueChange?.(e.target.value);
  };

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="flex min-w-fullg gap-2 h-[34px]">
      <input
        type={type === "password" ? (!isVisible ? type : "text") : type}
        className={cn(
          "p-[0px_14px] text-[16px] border border-[#dadfe9] rounded h-full w-full",
          className,
        )}
        value={value}
        onChange={handleValueChange}
        {...props}
      />
      {type === "password" && (
        <button
          onClick={toggleVisible}
          type="button"
          className=" cursor-pointer border border-[#dadfe9] aspect-square h-full flex items-center justify-center rounded"
        >
          {isVisible ? <LucideEyeOff /> : <LucideEye />}
        </button>
      )}
    </div>
  );
};

export { Input };
