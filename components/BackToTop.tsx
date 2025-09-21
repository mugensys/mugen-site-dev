'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <Button aria-label="Back to top" className="fixed bottom-6 right-6" variant="secondary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
