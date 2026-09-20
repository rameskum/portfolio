import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
        {
          'bg-muted text-foreground': variant === 'default',
          'border border-foreground bg-transparent': variant === 'outline',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
