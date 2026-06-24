import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { education } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Education"
          title="Academic Journey"
          subtitle="Building a strong foundation in computer science"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-purple-500/20 md:left-1/2 md:block md:-translate-x-px" />

          <ScrollReveal>
            <div className="relative md:grid md:grid-cols-2 md:gap-8">
              {/* Left spacer on desktop */}
              <div className="hidden md:block" />

              {/* Timeline card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative md:col-start-2"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.15rem] top-8 hidden h-4 w-4 rounded-full border-2 border-cyan-400 bg-[#030712] shadow-[0_0_15px_rgba(6,182,212,0.5)] md:left-auto md:right-full md:mr-[-0.55rem] md:block" />

                <div className="glassmorphism-card group relative overflow-hidden rounded-2xl p-6 md:p-8">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-[1px] rounded-2xl bg-[#0a0f1e]" />

                  <div className="relative">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400">
                        <FaGraduationCap size={22} />
                      </div>
                      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                        {education.year}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                      {education.degree}
                    </h3>
                    <p className="mt-1 text-cyan-400">{education.branch}</p>
                    <p className="mt-3 font-medium text-gray-300">{education.college}</p>

                    <div className="mt-6 flex flex-wrap gap-4 border-t border-white/5 pt-6">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500">Duration</p>
                        <p className="mt-1 text-sm font-medium text-gray-300">{education.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500">CGPA</p>
                        <p className="mt-1 text-sm font-bold text-cyan-400">{education.cgpa}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Mobile timeline dot */}
          <div className="absolute left-6 top-8 h-4 w-4 rounded-full border-2 border-cyan-400 bg-[#030712] shadow-[0_0_15px_rgba(6,182,212,0.5)] md:hidden" />
          <div className="absolute left-[1.65rem] top-12 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-cyan-500/50 to-transparent md:hidden" />
        </div>
      </div>
    </section>
  )
}
