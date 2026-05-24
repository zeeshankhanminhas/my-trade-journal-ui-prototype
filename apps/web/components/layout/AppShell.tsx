import { BottomNav } from './BottomNav';
import { SidebarNav } from './SidebarNav';
import { PageHeader } from './PageHeader';

export function AppShell({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  status?: string;
}) {
  return (
    <div className='min-h-screen'>
      <SidebarNav />
      <div className='min-h-screen md:ml-64'>
        <div className='mx-auto max-w-7xl px-4 pb-24 pt-4 sm:px-6 lg:px-8 lg:pb-8 lg:pt-8'>
          <PageHeader title={title} subtitle={subtitle} />
          <main className='space-y-4'>{children}</main>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
