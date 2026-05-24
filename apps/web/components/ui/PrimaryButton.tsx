import { cn } from '@/lib/utils';

export function PrimaryButton({
  children,
  disabled,
  variant = 'primary',
  className,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}) {
  return (
    <button
      type='button'
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed',
        variant === 'primary' && 'bg-blue-700 text-white hover:bg-blue-800 disabled:bg-slate-300 disabled:text-slate-600',
        variant === 'secondary' && 'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 disabled:bg-slate-100 disabled:text-slate-500',
        variant === 'ghost' && 'bg-transparent text-slate-700 hover:bg-slate-100 disabled:text-slate-400',
        className,
      )}
    >
      {children}
    </button>
  );
}
