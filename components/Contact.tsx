'use client'
import { useMemo, useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Button } from './ui/button'

export function Contact() {
  // For static hosting: use a mailto: fallback with encoded subject/body
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState<string | null>(null)
  const valid = name.trim().length > 1 && /.+@.+/.test(email) && message.trim().length > 4

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Inquiry from ${name || 'Mugen Systems site'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    return `mailto:hello@mugensystems.example?subject=${subject}&body=${body}`
  }, [name, email, message])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid) { setError('Please complete all fields.'); return }
    setError(null)
    window.location.href = mailto
  }

  return (
    <section id="contact" data-section aria-labelledby="contact-h" className="py-14">
      <div className="container mx-auto">
        <h2 id="contact-h" className="mb-6 text-2xl font-semibold">Contact</h2>
        <form onSubmit={submit} className="grid gap-4 md:max-w-xl" aria-live="polite">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required aria-invalid={!!error && !name} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required aria-invalid={!!error && !/.+@.+/.test(email)} />
          </div>
          <div>
            <Label htmlFor="message">How can we help?</Label>
            <Textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required aria-invalid={!!error && !message} />
          </div>
          {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
          <div className="flex items-center gap-3">
            <Button type="submit">Send inquiry</Button>
            <a href={mailto} className="text-sm text-foreground/70 underline">or open email client</a>
          </div>
        </form>
      </div>
    </section>
  )
}
