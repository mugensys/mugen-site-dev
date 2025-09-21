'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  company: z.string().min(1, 'Company is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Please enter a brief message'),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [notice, setNotice] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent('Consultation Request — Mugen Systems');
    const body = encodeURIComponent(
      `Name: ${data.firstName} ${data.lastName}%0ACompany: ${data.company}%0AEmail: ${data.email}%0APhone: ${data.phone || '—'}%0A%0A${data.message}`
    );
    setNotice('Thanks! Your email client should open. If not, email hello@mugensystems.com.');
    window.location.href = `mailto:hello@mugensystems.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="container">
        <h2 id="contact-title" className="text-2xl md:text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-sm text-muted">
          Let’s plan your next step.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate aria-describedby="form-status">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
                <Input id="firstName" aria-invalid={!!errors.firstName} {...register('firstName')} />
                {errors.firstName && <p className="text-xs text-red-600 mt-1" role="alert">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
                <Input id="lastName" aria-invalid={!!errors.lastName} {...register('lastName')} />
                {errors.lastName && <p className="text-xs text-red-600 mt-1" role="alert">{errors.lastName.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="company">Company</label>
              <Input id="company" aria-invalid={!!errors.company} {...register('company')} />
              {errors.company && <p className="text-xs text-red-600 mt-1" role="alert">{errors.company.message}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <Input id="email" type="email" aria-invalid={!!errors.email} {...register('email')} />
                {errors.email && <p className="text-xs text-red-600 mt-1" role="alert">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone (optional)</label>
                <Input id="phone" type="tel" {...register('phone')} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
              <Textarea id="message" aria-invalid={!!errors.message} {...register('message')} />
              {errors.message && <p className="text-xs text-red-600 mt-1" role="alert">{errors.message.message}</p>}
            </div>
            <p className="text-xs text-muted">We’ll use your info to respond to your inquiry—nothing else.</p>
            <Button type="submit" disabled={isSubmitting}>Send</Button>
            <div id="form-status" aria-live="polite" className="text-sm mt-2">{notice}</div>
          </form>
          <div className="space-y-2">
            <p><strong>Email:</strong> <a className="underline" href="mailto:hello@mugensystems.com">hello@mugensystems.com</a></p>
            <p><strong>Phone:</strong> (XXX) XXX-XXXX</p>
            <p><strong>Service Area:</strong> Southern California (remote engagements available)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
