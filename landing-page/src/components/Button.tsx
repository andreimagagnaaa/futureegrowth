import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', glow = true, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-black hover:bg-[#C5A028] border border-transparent',
      outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10',
      ghost: 'bg-transparent text-white hover:bg-white/5 border border-transparent',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-3 text-sm tracking-wide uppercase',
      lg: 'px-10 py-4 text-base tracking-widest uppercase',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'relative inline-flex items-center justify-center rounded-sm font-semibold transition-all duration-300',
          variants[variant],
          sizes[size],
          glow && variant === 'primary' && 'shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]',
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
