import { personal } from '../../data/portfolio'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiCodeforces, SiLeetcode } from 'react-icons/si'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    { icon: FaGithub, href: personal.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personal.linkedin, label: 'LinkedIn' },
    { icon: SiLeetcode, href: personal.leetcode, label: 'LeetCode' },
    { icon: SiCodeforces, href: personal.codeforces, label: 'Codeforces' },
    { icon: HiMail, href: `mailto:${personal.email}`, label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-white/5 bg-[#020617]/80 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-heading text-2xl font-bold text-white">
              {personal.brandName}
              <span className="text-cyan-400">.</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Building intelligent software for a better tomorrow.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-gray-500 md:flex-row">
          <p>
            &copy; {year} {personal.fullName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted with
            <span className="text-cyan-400" aria-label="love">
              ♥
            </span>
            using React
          </p>
        </div>
      </div>
    </footer>
  )
}
