import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'
import { HiMail, HiPhone } from 'react-icons/hi'
import { personal } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'

const contactLinks = [
  { icon: HiMail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: HiPhone, label: 'Phone', value: personal.phone, href: `tel:+91${personal.phone}` },
  { icon: FaGithub, label: 'GitHub', value: 'GitHub Profile', href: personal.github },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: personal.linkedin },
  { icon: SiLeetcode, label: 'LeetCode', value: personal.leetcodeUsername, href: personal.leetcode },
  { icon: SiCodeforces, label: 'Codeforces', value: personal.codeforcesUsername, href: personal.codeforces },
  { icon: FaWhatsapp, label: 'WhatsApp', value: 'Chat on WhatsApp', href: `https://wa.me/${personal.whatsapp}` },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    )

    setTimeout(() => {
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 600)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Contact"
          title="Let's Connect"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 6 }}
                  className="glassmorphism-card flex items-center gap-4 rounded-xl p-4 transition-all hover:border-cyan-500/20"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <link.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      {link.label}
                    </p>
                    <p className="truncate text-sm font-medium text-gray-200">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="glassmorphism-card rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-heading text-xl font-bold text-white">Send a Message</h3>
              <p className="mt-2 text-sm text-gray-500">
                Fill out the form and I&apos;ll get back to you as soon as possible.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="neon-input w-full rounded-xl px-4 py-3 text-sm text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-400">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="neon-input w-full rounded-xl px-4 py-3 text-sm text-white"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="neon-input w-full resize-none rounded-xl px-4 py-3 text-sm text-white"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:brightness-110 disabled:opacity-60"
              >
                {status === 'sending'
                  ? 'Opening email client...'
                  : status === 'sent'
                    ? 'Message ready to send!'
                    : 'Send Message'}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
