import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlight?: boolean;
}

export const Card = ({ className, children, spotlight = true, ...props }: CardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        'group relative rounded-xl border border-white/10 bg-gray-900/50 backdrop-blur-xl overflow-hidden',
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {spotlight && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(212, 175, 55, 0.15),
                transparent 80%
              )
            `,
          }}
        />
      )}
      <div className="relative h-full">{children}</div>
    </div>
  );
};
