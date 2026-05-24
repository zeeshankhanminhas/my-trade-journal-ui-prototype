'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const items = [
  ['/dashboard', 'Dashboard'],
  ['/setup', 'Setup'],
  ['/action', 'Action'],
  ['/decision-review', 'Review'],
  ['/more', 'More'],
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className='fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur md:hidden'>
      <ul className='grid grid-cols-5'>
        {items.map(([href, label]) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                className={cn(
                  'block px-1 py-3 text-center text-xs',
                  isActive ? 'font-semibold text-blue-700' : 'text-slate-500',
                )}
                href={href}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
