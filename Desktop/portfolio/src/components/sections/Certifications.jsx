import { motion } from 'framer-motion'
import { FaCertificate, FaAward } from 'react-icons/fa'
import { certifications } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'

const typeIcons = {
  Internship: FaAward,
  Networking: FaCertificate,
  Cybersecurity: FaCertificate,
  Competition: FaAward,
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Certifications"
          title="Credentials & Recognition"
          subtitle="Professional certifications and achievements earned along the way"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => {
            const Icon = typeIcons[cert.type] || FaCertificate
            return (
              <ScrollReveal key={cert.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glassmorphism-card group relative h-full overflow-hidden rounded-2xl p-6"
                >
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 transition-transform group-hover:scale-150" />

                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      <Icon size={22} />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500">
                      {cert.type}
                    </span>

                    <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-white">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">{cert.issuer}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
