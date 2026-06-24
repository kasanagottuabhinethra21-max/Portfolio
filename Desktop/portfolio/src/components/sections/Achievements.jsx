import { FaGithub, FaTrophy, FaCode, FaBookOpen } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'
import { achievements } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import AnimatedCounter from '../ui/AnimatedCounter'

const iconMap = {
  leetcode: SiLeetcode,
  hackathon: FaTrophy,
  github: FaGithub,
  codeforces: SiCodeforces,
}

const extraCards = [
  {
    icon: FaCode,
    title: 'Codeforces Participation',
    description: 'Active competitive programmer solving algorithmic challenges',
    color: 'text-blue-400',
  },
  {
    icon: FaBookOpen,
    title: 'Continuous Learning',
    description: 'Always upskilling in AI, automation, and emerging technologies',
    color: 'text-purple-400',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Achievements"
          title="Milestones & Impact"
          subtitle="Dedication to growth, competition, and open source"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <ScrollReveal key={item.label} delay={index * 0.08}>
                <div className="glassmorphism-card group relative overflow-hidden rounded-2xl p-6 text-center transition-all hover:border-cyan-500/30">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-500/5 transition-all group-hover:bg-cyan-500/10" />

                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 transition-all group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <Icon size={26} />
                  </div>

                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                  <h3 className="mt-2 font-heading font-semibold text-white">{item.label}</h3>
                  <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {extraCards.map((card, index) => (
            <ScrollReveal key={card.title} delay={0.3 + index * 0.1}>
              <div className="glassmorphism-card flex items-start gap-4 rounded-2xl p-6 transition-all hover:border-purple-500/20">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 ${card.color}`}>
                  <card.icon size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{card.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
