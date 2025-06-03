import { cn } from "@/utils";
import React, { ButtonHTMLAttributes } from 'react'

type Size = 'sm' | 'md' | 'lg'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: Size;
}

const Button: React.FC<ButtonProps> = ({ className, size = 'md', ...props }) => {
	const sizes: Record<Size, string> = {
		'sm': 'h-8',
		'md': 'h-10',
		'lg': 'p-[15px] text-[18px] font-bold rounded'
	}

	return (
		<button className={cn('cursor-pointer bg-black text-white', sizes[size])} {...props}/>
	);
};

export { Button };
