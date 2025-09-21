'use client'
import { Button } from './ui/button'
export function FinalCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Ready to modernize your network?</h2>
        <p className="mt-3 text-foreground/80">We’ll meet you where you are and deliver compounding wins.</p>
        <div className="mt-6">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Start a conversation</Button>
        </div>
      </div>
    </section>
  )
}
