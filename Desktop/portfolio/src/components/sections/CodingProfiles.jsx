import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'
import { personal } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'

const profiles = [
  {
    name: 'GitHub',
    username: 'kasanagottuabhinethra21-max',
    href: personal.github,
    icon: FaGithub,
    color: 'hover:border-gray-400/30 hover:text-white',
    bg: 'from-gray-500/10 to-gray-500/5',
  },
  {
    name: 'LinkedIn',
    username: 'kasanagottu-abhinethra',
    href: personal.linkedin,
    icon: FaLinkedin,
    color: 'hover:border-blue-400/30 hover:text-blue-400',
    bg: 'from-blue-500/10 to-blue-500/5',
  },
  {
    name: 'LeetCode',
    username: personal.leetcodeUsername,
    href: personal.leetcode,
    icon: SiLeetcode,
    color: 'hover:border-amber-400/30 hover:text-amber-400',
    bg: 'from-amber-500/10 to-amber-500/5',
  },
  {
    name: 'Codeforces',
    username: personal.codeforcesUsername,
    href: personal.codeforces,
    icon: SiCodeforces,
    color: 'hover:border-blue-400/30 hover:text-blue-300',
    bg: 'from-blue-600/10 to-blue-600/5',
  },
]

export default function CodingProfiles() {
  return (
    <section id="profiles" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Coding Profiles"
          title="Where I Code"
          subtitle="Connect with me across competitive programming and development platforms"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile, index) => (
            <ScrollReveal key={profile.name} delay={index * 0.08}>
              <motion.a
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                className={`glassmorphism-card group flex flex-col items-center rounded-2xl bg-gradient-to-br ${profile.bg} p-6 text-center transition-all ${profile.color}`}
              >
                <profile.icon
                  size={36}
                  className="mb-4 text-gray-400 transition-colors group-hover:scale-110"
                />
                <h3 className="font-heading font-semibold text-white">{profile.name}</h3>
                <p className="mt-1 text-sm text-gray-500">@{profile.username}</p>
                <span className="mt-4 text-xs font-medium text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
                  View Profile →
                </span>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        {/* Resume download CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 p-8 text-center md:p-12">
            <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
              Want the full picture?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-gray-400">
              Download my resume for a comprehensive overview of my skills, projects, and experience.
            </p>
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:brightness-110"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
