import { motion } from 'framer-motion'
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'
import { FaGraduationCap, FaCode, FaBrain } from 'react-icons/fa'
import { about, personal } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'

const highlights = [
  { icon: FaGraduationCap, label: 'B.Tech CSE', sub: '3rd Year · CGPA 8.65' },
  { icon: FaCode, label: 'Full Stack Dev', sub: 'React · Node · MongoDB' },
  { icon: FaBrain, label: 'AI/ML Focus', sub: 'Agentic AI · LLMs' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="About Me"
          title="Who I Am"
          subtitle="Passionate about building technology that makes a real difference"
        />

        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <ScrollReveal className="lg:col-span-2" direction="left">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-2xl" />
              <div className="glassmorphism-card relative overflow-hidden rounded-3xl p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl font-bold text-white shadow-lg shadow-cyan-500/30">
                    A
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {personal.brandName}
                    </h3>
                    <p className="text-sm text-cyan-400">Software Engineer</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    <HiLocationMarker className="shrink-0 text-cyan-400" />
                    {personal.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <HiMail className="shrink-0 text-cyan-400" />
                    {personal.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <HiPhone className="shrink-0 text-cyan-400" />
                    {personal.phone}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {highlights.map(({ icon: Icon, label, sub }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/5 bg-white/5 p-3 text-center"
                    >
                      <Icon className="mx-auto mb-1 text-cyan-400" size={18} />
                      <p className="text-xs font-semibold text-white">{label}</p>
                      <p className="mt-0.5 text-[10px] text-gray-500">{sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-3" direction="right" delay={0.15}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
                {about}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Problem Solving', desc: 'LeetCode & Codeforces enthusiast with a competitive edge' },
                  { title: 'Hackathons', desc: '20+ national & regional hackathons participated' },
                  { title: 'Open Source', desc: 'Active GitHub contributor building real projects' },
                  { title: 'Continuous Learning', desc: 'Always exploring AI, automation & new technologies' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-cyan-500/20 hover:bg-cyan-500/5"
                  >
                    <h4 className="font-heading font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
