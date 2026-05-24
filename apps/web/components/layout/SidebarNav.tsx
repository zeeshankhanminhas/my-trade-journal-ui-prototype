'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const items = [
  ['/dashboard', 'Dashboard'],
  ['/setup', 'Log Setup'],
  ['/recommendation', 'Recommendation'],
  ['/risk-gate', 'Risk Gate'],
  ['/action', 'User Action'],
  ['/outcome', 'Outcome Review'],
  ['/decision-review', 'Decision Review'],
  ['/risk', 'Risk'],
  ['/learning', 'Learning'],
  ['/signal-inbox', 'Signal Inbox'],
  ['/more', 'More / Settings'],
] as const;

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className='fixed inset-y-0 hidden w-64 flex-col border-r border-slate-800 bg-slate-900 p-4 text-slate-100 md:flex'>
      <div className='mb-1 text-xs uppercase tracking-wider text-slate-400'>Trading Intelligence</div>
      <div className='mb-4 text-base font-semibold'>MY-Trade-Journal</div>
      <nav className='flex-1 space-y-1'>
        {items.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'block rounded px-3 py-2 text-sm transition-colors',
              pathname === href ? 'bg-slate-700 text-white' : 'text-slate-200 hover:bg-slate-800',
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className='border-t border-slate-700 pt-3 text-xs text-slate-300'>
        <p className='font-medium'>Manual Execution Only</p>
        <p>No Broker Connection</p>
      </div>
    </aside>
  );
}
