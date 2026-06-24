import { motion } from 'framer-motion'
import { skills } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'

const categoryColors = [
  'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20',
  'from-blue-500/20 to-blue-500/5 border-blue-500/20',
  'from-purple-500/20 to-purple-500/5 border-purple-500/20',
  'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20',
  'from-pink-500/20 to-pink-500/5 border-pink-500/20',
  'from-amber-500/20 to-amber-500/5 border-amber-500/20',
  'from-indigo-500/20 to-indigo-500/5 border-indigo-500/20',
  'from-rose-500/20 to-rose-500/5 border-rose-500/20',
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Skills"
          title="Tech Arsenal"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((group, index) => (
            <ScrollReveal key={group.category} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`glassmorphism-card h-full rounded-2xl border bg-gradient-to-br p-5 ${categoryColors[index % categoryColors.length]}`}
              >
                <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-cyan-500/30 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
