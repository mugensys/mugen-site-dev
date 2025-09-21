'use client'
import React,{createContext,useContext,useEffect,useMemo,useState} from 'react'
const Ctx=createContext<{activeId:string|null}>({activeId:null})
export function ScrollSpyProvider({sectionIds,children}:{sectionIds:string[]; children:React.ReactNode}){
  const [activeId,setActiveId]=useState<string|null>(sectionIds[0]??null)
  useEffect(()=>{ const obs=new IntersectionObserver((entries)=>{ const v=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0]; if(v?.target?.id) setActiveId(v.target.id)}, {rootMargin:'-40% 0px -50% 0px', threshold:[0,.25,.5,.75,1]}); const els=sectionIds.map(id=>document.getElementById(id)).filter(Boolean) as HTMLElement[]; els.forEach(el=>obs.observe(el)); return ()=>obs.disconnect()},[sectionIds])
  const value=useMemo(()=>({activeId}),[activeId]); return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
export function useScrollSpy(){ return useContext(Ctx) }
