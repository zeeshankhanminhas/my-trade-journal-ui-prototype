export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return <header className='mb-4'><h1 className='text-2xl font-semibold text-slate-900'>{title}</h1>{subtitle && <p className='text-sm text-slate-600 mt-1'>{subtitle}</p>}</header>;
}
