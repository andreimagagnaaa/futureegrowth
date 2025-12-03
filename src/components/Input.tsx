import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-400">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
