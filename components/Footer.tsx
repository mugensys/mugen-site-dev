'use client'
import { Contact } from './Contact'

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30" role="contentinfo">
      <Contact />
      <div className="container mx-auto flex items-center justify-between py-6 text-sm text-foreground/70">
        <p>© {new Date().getFullYear()} Mugen Systems. All rights reserved.</p>
        <a href="#home" className="underline">Back to top</a>
      </div>
    </footer>
  )
}
