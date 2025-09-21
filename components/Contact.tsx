  'use client'

  import React, { useMemo, useState } from 'react'
  import { useForm } from 'react-hook-form'
  import { z } from 'zod'
  import { zodResolver } from '@hookform/resolvers/zod'
  import { Input } from './ui/input'
  import { Textarea } from './ui/textarea'
  import { Label } from './ui/label'
  import { Button } from './ui/button'
  import { Mail, Phone } from 'lucide-react'

  const schema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    company: z.string().min(1, 'Company is required'),
    email: z.string().email('Valid email is required'),
    phone: z.string().optional(),
    message: z.string().min(1, 'Please include a message'),
  })

  type FormData = z.infer<typeof schema>

  export const Contact: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
      resolver: async (values, context, options) => {
        const res = schema.safeParse(values)
        if (res.success) return { values: res.data, errors: {} }
        const formErrors = res.error.formErrors.fieldErrors
        return { values: {}, errors: Object.fromEntries(Object.entries(formErrors).map(([k, v]) => [k, { type: 'zod', message: (v?.[0]||'') }])) as any }
      }
    })
    const [toast, setToast] = useState<string | null>(null)

    const onSubmit = (data: FormData) => {
      // Show a simple toast
      setToast('Thanks! We’ll be in touch shortly.')
      setTimeout(() => setToast(null), 3000)

      // mailto fallback
      const subject = encodeURIComponent('Consultation request — Mugen Systems')
      const body = encodeURIComponent(`
First Name: ${data.firstName}
Last Name: ${data.lastName}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone || '-'}

Message:
${data.message}
      `.trim())
      window.location.href = `mailto:hello@mugensystems.com?subject=${subject}&body=${body}`
    }

    return (
      <section id="contact" className="section bg-gray-50">
        <div className="container-max grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
            <p className="mt-2 text-gray-700">Let’s plan your next step.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" aria-hidden="true" /> <a href="mailto:hello@mugensystems.com" className="underline">hello@mugensystems.com</a></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" aria-hidden="true" /> (XXX) XXX-XXXX</li>
              <li>Service Area: Southern California (remote engagements available)</li>
            </ul>
            <p className="mt-6 text-xs text-gray-500">We’ll use your info to respond to your inquiry—nothing else.</p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate aria-live="polite">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" aria-invalid={!!errors.firstName} {...register('firstName')} />
                  {errors.firstName && <p className="mt-1 text-xs text-red-600" role="alert">{errors.firstName.message}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" aria-invalid={!!errors.lastName} {...register('lastName')} />
                  {errors.lastName && <p className="mt-1 text-xs text-red-600" role="alert">{errors.lastName.message}</p>}
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" aria-invalid={!!errors.company} {...register('company')} />
                  {errors.company && <p className="mt-1 text-xs text-red-600" role="alert">{errors.company.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" aria-invalid={!!errors.email} {...register('email')} />
                  {errors.email && <p className="mt-1 text-xs text-red-600" role="alert">{errors.email.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" type="tel" {...register('phone')} />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" aria-invalid={!!errors.message} {...register('message')} />
                  {errors.message && <p className="mt-1 text-xs text-red-600" role="alert">{errors.message.message}</p>}
                </div>
              </div>
              <div className="mt-6">
                <Button type="submit" disabled={isSubmitting}>Send</Button>
              </div>
              {toast && (
                <div role="status" aria-live="polite" className="fixed bottom-4 right-4 rounded-xl bg-black text-white px-4 py-3 text-sm shadow-soft">
                  {toast}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    )
  }
