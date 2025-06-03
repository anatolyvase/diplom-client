import { cn } from "@/utils";
import React, { ButtonHTMLAttributes } from "react";

type Size = "sm" | "md" | "lg";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
}

const Button: React.FC<ButtonProps> = ({
  className,
  size = "md",
  ...props
}) => {
  const sizes: Record<Size, string> = {
    sm: "h-8 rounded",
    md: "p-[12px] rounded",
    lg: "p-[15px] text-[18px] font-bold rounded",
  };

  return (
    <button
      className={cn(
        "cursor-pointer bg-black text-white disabled:opacity-40",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
};

export { Button };
