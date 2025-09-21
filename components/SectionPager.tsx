'use client'
import { useScrollSpy } from './ScrollSpyProvider'
export function SectionPager({ ids }:{ ids:string[] }){ const { activeId } = useScrollSpy(); const index=Math.max(0, ids.indexOf(activeId ?? ids[0])); return (<div aria-hidden className="fixed right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2 text-xs text-white/60">{ids.map((id,i)=>(<a key={id} href={'#'+id} className="transition hover:text-white/90">{i+1}/{ids.length}<span className={`block h-[1px] w-8 ${i===index?'bg-white':'bg-white/30'}`}></span></a>))}</div>) }
