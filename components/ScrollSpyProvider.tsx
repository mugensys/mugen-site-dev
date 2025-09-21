'use client';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

type ScrollSpyContextType = {
  activeId: string | null;
  register: (id: string, node: HTMLElement | null) => void;
};

const ScrollSpyContext = createContext<ScrollSpyContextType | null>(null);

export function ScrollSpyProvider({ children }: { children: React.ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const sectionsRef = useRef(new Map<string, HTMLElement>());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = (visible[0].target as HTMLElement).id;
          setActiveId(id);
        }
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: [0.25, 0.5, 0.75] }
    );
    observerRef.current = observer;
    sectionsRef.current.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const register = (id: string, node: HTMLElement | null) => {
    if (!observerRef.current) return;
    const map = sectionsRef.current;
    if (node) {
      map.set(id, node);
      observerRef.current.observe(node);
    } else {
      const prev = map.get(id);
      if (prev) observerRef.current.unobserve(prev);
      map.delete(id);
    }
  };

  return (
    <ScrollSpyContext.Provider value={{ activeId, register }}>
      {children}
    </ScrollSpyContext.Provider>
  );
}

export function useScrollSpy() {
  const ctx = useContext(ScrollSpyContext);
  if (!ctx) throw new Error("useScrollSpy must be used within ScrollSpyProvider");
  return ctx;
}
