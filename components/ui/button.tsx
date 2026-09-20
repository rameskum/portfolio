import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
      'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'default',
      'border border-foreground bg-transparent hover:bg-muted': variant === 'outline',
      'hover:bg-muted hover:text-foreground': variant === 'ghost',
      'h-10 px-6 py-2': size === 'default',
      'h-9 px-4 text-sm': size === 'sm',
      'h-11 px-8': size === 'lg',
    },
    className
  );

  if (asChild && React.isValidElement(children)) {
    const childProps = children.props as { className?: string };
    return React.cloneElement(children, {
      className: cn(childProps.className, classes),
    } as never);
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
