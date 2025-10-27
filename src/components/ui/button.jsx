import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';

// Shapix custom theme colors
const SHAPIX_COLORS = {
  navy: '#001F3F',
  beige: '#F5F5DC',
  cheese: '#FFD23F',
};

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-md',
  {
    variants: {
      variant: {
        default: `bg-[${SHAPIX_COLORS.navy}] text-[${SHAPIX_COLORS.beige}] hover:bg-opacity-90`,
        cheese: `bg-[${SHAPIX_COLORS.cheese}] text-[${SHAPIX_COLORS.navy}] hover:bg-opacity-90`,
        outline: `border border-[${SHAPIX_COLORS.navy}] text-[${SHAPIX_COLORS.navy}] hover:bg-[${SHAPIX_COLORS.navy}] hover:text-[${SHAPIX_COLORS.beige}]`,
        ghost: 'hover:bg-white/10 text-[rgba(255,255,255,0.9)]',
        link: `text-[${SHAPIX_COLORS.cheese}] underline-offset-4 hover:underline`,
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-xl px-8 text-base',
        icon: 'h-10 w-10 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants };
