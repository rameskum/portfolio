'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const SheetContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
}>({
  open: false,
  onOpenChange: () => {},
});

export function Sheet({ open: controlledOpen, onOpenChange, children }: SheetProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const open = controlledOpen ?? uncontrolledOpen;
  const handleOpenChange = onOpenChange ?? setUncontrolledOpen;

  return (
    <SheetContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
}

export function SheetTrigger({ 
  children, 
  asChild,
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const { onOpenChange } = React.useContext(SheetContext);

  if (asChild && React.isValidElement(children)) {
    const childProps = children.props as { onClick?: React.MouseEventHandler };
    return React.cloneElement(children, {
      ...props,
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        childProps.onClick?.(e as never);
        onOpenChange(true);
      },
    } as never);
  }

  return (
    <button {...props} onClick={() => onOpenChange(true)}>
      {children}
    </button>
  );
}

export function SheetContent({ 
  children, 
  className,
  side = 'right',
}: { 
  children: React.ReactNode; 
  className?: string;
  side?: 'left' | 'right' | 'top' | 'bottom';
}) {
  const { open, onOpenChange } = React.useContext(SheetContext);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const sideClasses = {
    right: 'right-0 top-0 h-full w-3/4 max-w-sm translate-x-0',
    left: 'left-0 top-0 h-full w-3/4 max-w-sm -translate-x-0',
    top: 'top-0 left-0 right-0 h-auto max-h-[80vh]',
    bottom: 'bottom-0 left-0 right-0 h-auto max-h-[80vh]',
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div
        className={cn(
          'fixed z-50 bg-background border-l border-foreground shadow-lg transition-transform duration-300',
          sideClasses[side],
          className
        )}
      >
        {children}
      </div>
    </>
  );
}
