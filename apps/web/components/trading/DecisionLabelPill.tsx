import { DecisionLabel } from '@/lib/types';
export function DecisionLabelPill({label}:{label:DecisionLabel}){return <span className='inline-block rounded-full bg-slate-900 text-white text-xs px-3 py-1'>{label}</span>}
